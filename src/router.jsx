import { Route, Routes } from 'react-router-dom'

//! Pages
import { Home } from './pages/home'
import { Notices } from './pages/Notices'

//! Layout
import { DefaultLayout } from './layout/defaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/notices" element={<Notices />} />
      </Route>
    </Routes>
  )
}
