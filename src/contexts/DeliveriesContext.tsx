import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { coffeesData } from '../coffeesData'

import {
  Coffee,
  Order,
  deliveriesReducer,
} from '../reducers/deliveries/reducer'

import {
  addNewCoffeeToCartAction,
  addNewOrderAction,
  removeCoffeeFromCartAction,
} from '../reducers/deliveries/actions'

export enum PaymentMethodsType {
  credit_card = 'credit_card',
  debit_card = 'debit_card',
  cash = 'cash',
}

interface DeliveriesContextProviderProps {
  children: ReactNode
}

type CreateNewOrderData = Omit<Order, 'id'>

interface DeliveriesContextType {
  coffees: Coffee[]
  orders: Order[]
  shoppingCart: number
  addNewCoffeeToCart: (id: number, amount: number) => void
  removeCoffeeFromCart: (id: number | string) => void
  addNewOrder: (orderFormData: CreateNewOrderData) => void
}

const DeliveriesContext = createContext({} as DeliveriesContextType)

export function DeliveriesContextProvider({
  children,
}: DeliveriesContextProviderProps) {
  const [deliveriesState, dispatch] = useReducer(
    deliveriesReducer,
    {
      coffees: coffeesData,
      orders: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:deliveries-state-1.0.0',
      )

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

      return initialState
    },
  )
  const { coffees, orders } = deliveriesState

  const shoppingCart =
    coffees.length > 0
      ? coffees
          .map((coffee) => coffee.amountInShoppingCart)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      : 0

  useEffect(() => {
    const stateJSON = JSON.stringify(deliveriesState)

    localStorage.setItem('@coffee-delivery:deliveries-state-1.0.0', stateJSON)
  }, [deliveriesState])

  function addNewCoffeeToCart(id: number, amount: number) {
    dispatch(addNewCoffeeToCartAction(id, amount))
  }

  function removeCoffeeFromCart(id: number | string) {
    dispatch(removeCoffeeFromCartAction(id))
  }

  function addNewOrder(orderFormData: CreateNewOrderData) {
    const newOrder: Order = {
      id: new Date().getTime(),
      ...orderFormData,
    }

    dispatch(addNewOrderAction(newOrder))
  }

  return (
    <DeliveriesContext.Provider
      value={{
        coffees,
        orders,
        shoppingCart,
        addNewCoffeeToCart,
        removeCoffeeFromCart,
        addNewOrder,
      }}
    >
      {children}
    </DeliveriesContext.Provider>
  )
}

export const useDeliveriesContext = () => useContext(DeliveriesContext)
