import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import * as C from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <C.LayoutContainer>
        <Outlet />
      </C.LayoutContainer>
      <Footer />
    </>
  )
}
