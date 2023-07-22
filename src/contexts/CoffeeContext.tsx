import { ReactNode, createContext, useContext, useState } from 'react'
import { coffeesData } from '../coffeesData'

export enum PaymentMethodsType {
  credit_card = 'credit_card',
  debit_card = 'debit_card',
  cash = 'cash',
}

export interface Coffee {
  id: number | string
  tags: string[]
  name: string
  description: string
  price: number
  img: string
  amountInShoppingCart: number
}

interface Order {
  id: number | string
  cep: number
  address: string
  numberHouse: number
  complemento?: string
  bairro: string
  city: string
  state: string
  paymentMethod: string
}

type CreateNewOrderData = Omit<Order, 'id'>

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffees: Coffee[]
  orders: Order[]
  shoppingCart: number
  addNewCoffeeToCart: (id: number, amount: number) => void
  removeCoffeeFromCart: (id: number | string) => void
  addNewOrder: (orderFormData: CreateNewOrderData) => void
}

const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesData)
  const [orders, setOrders] = useState<Order[]>([])

  const shoppingCart =
    coffees.length > 0
      ? coffees
          .map((coffee) => coffee.amountInShoppingCart)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      : 0

  function addNewCoffeeToCart(id: number, amount: number) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            amountInShoppingCart: amount,
          }
        } else {
          return coffee
        }
      }),
    )
  }

  function removeCoffeeFromCart(id: number | string) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === id) {
          return {
            ...coffee,
            amountInShoppingCart: 0,
          }
        } else {
          return coffee
        }
      }),
    )
  }

  function addNewOrder(orderFormData: CreateNewOrderData) {
    const newOrder: Order = {
      id: new Date().getTime(),
      ...orderFormData,
    }

    setOrders((prevOrders) => [...prevOrders, newOrder])
    setCoffees((prevCoffees) =>
      prevCoffees.map((coffee) => ({
        ...coffee,
        amountInShoppingCart: 0,
      })),
    )
  }

  return (
    <CoffeeContext.Provider
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
    </CoffeeContext.Provider>
  )
}

export const useCoffeeContext = () => useContext(CoffeeContext)
