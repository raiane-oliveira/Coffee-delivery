import { produce } from 'immer'
import { DeliveriesActionTypes } from './actions'

export interface Coffee {
  id: number | string
  tags: string[]
  name: string
  description: string
  price: number
  img: string
  amountInShoppingCart: number
}

export interface Order {
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

interface DeliveriesState {
  coffees: Coffee[]
  orders: Order[]
}

export function deliveriesReducer(state: DeliveriesState, action: any) {
  switch (action.type) {
    case DeliveriesActionTypes.ADD_NEW_COFFEE_TO_CART: {
      return produce(state, (draft) => {
        const coffeeIndex = state.coffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )
        draft.coffees[coffeeIndex].amountInShoppingCart = action.payload.amount
      })
    }
    case DeliveriesActionTypes.REMOVE_COFFEE_FROM_CART: {
      return produce(state, (draft) => {
        const coffeeIndex = state.coffees.findIndex(
          (coffee) => coffee.id === action.payload.id,
        )
        draft.coffees[coffeeIndex].amountInShoppingCart = 0
      })
    }
    case DeliveriesActionTypes.ADD_NEW_ORDER: {
      return produce(state, (draft) => {
        draft.orders.push(action.payload.newOrder)
        draft.coffees.forEach((coffee) => (coffee.amountInShoppingCart = 0))
      })
    }
    default: {
      return state
    }
  }
}
