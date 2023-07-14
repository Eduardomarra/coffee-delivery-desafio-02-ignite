import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { CompleteOrder } from './pages/completeOrder'
import { ConfirmedOrder } from './pages/ConfirmedOrder'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
        <Route path="/confirmedOrder" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}
