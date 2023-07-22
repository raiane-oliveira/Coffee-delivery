import { Route, Routes } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'
import { History } from './pages/History'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
