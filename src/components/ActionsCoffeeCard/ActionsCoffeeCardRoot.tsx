import { ReactNode } from 'react'
import { ActionsCoffeeCardRootContainer } from './styles'

interface ActionsCoffeeCardRootProps {
  children: ReactNode
}

export function ActionsCoffeeCardRoot({
  children,
}: ActionsCoffeeCardRootProps) {
  return (
    <ActionsCoffeeCardRootContainer>{children}</ActionsCoffeeCardRootContainer>
  )
}
