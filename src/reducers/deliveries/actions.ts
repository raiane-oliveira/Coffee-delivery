import { Order } from './reducer'

export enum DeliveriesActionTypes {
  ADD_NEW_COFFEE_TO_CART = 'ADD_NEW_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
}

export function addNewCoffeeToCartAction(id: number, amount: number) {
  return {
    type: DeliveriesActionTypes.ADD_NEW_COFFEE_TO_CART,
    payload: {
      id,
      amount,
    },
  }
}

export function removeCoffeeFromCartAction(id: number | string) {
  return {
    type: DeliveriesActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      id,
    },
  }
}

export function addNewOrderAction(newOrder: Order) {
  return {
    type: DeliveriesActionTypes.ADD_NEW_ORDER,
    payload: {
      newOrder,
    },
  }
}
