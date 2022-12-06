import { Outlet } from 'react-router-dom'

import * as C from './styles'

export function DefaultLayout() {
  return (
    <>
      <C.LayoutContainer>
        <Outlet />
      </C.LayoutContainer>
    </>
  )
}
