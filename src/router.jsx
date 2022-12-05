import { Route, Routes } from 'react-router-dom'

//! Pages
import { Home } from './pages/home'

//! Layout
import { DefaultLayout } from './layout/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
