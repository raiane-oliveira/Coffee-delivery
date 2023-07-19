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
}

const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesData)
  const [shoppingCart, setShoppingCart] = useState(0)

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

    if (amount >= 0) {
      const sumTotalShoppingCart = coffees
        .map((coffee) => {
          if (coffee.id === id) {
            return amount
          } else {
            return coffee.amountInShoppingCart
          }
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue)

      setShoppingCart(sumTotalShoppingCart)
    }
  }

  return (
    <CoffeeContext.Provider
      value={{ coffees, addNewCoffeeToCart, shoppingCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export const useCoffeeContext = () => useContext(CoffeeContext)
