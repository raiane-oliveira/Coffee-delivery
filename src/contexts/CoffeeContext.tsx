import { ReactNode, createContext, useContext, useState } from 'react'
import { coffeesData } from '../coffeesData'

export interface Coffee {
  id: number | string
  tags: string[]
  name: string
  description: string
  price: number
  img: string
  amountInShoppingCart: number
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

interface CoffeeContextType {
  coffees: Coffee[]
  shoppingCart: number
  addNewCoffeeToCart: (id: number, amount: number) => void
  removeCoffeeFromCart: (id: number | string) => void
}

const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesData)

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

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        addNewCoffeeToCart,
        shoppingCart,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export const useCoffeeContext = () => useContext(CoffeeContext)
