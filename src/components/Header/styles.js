import styled from '@emotion/styled'

export const Container = styled.header`
  height: 4.25rem;
  position: fixed;
  z-index: 999;
  transition: all 200ms;
  grid-area: header;
  background: ${(props) => props.theme.background['color-background']};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: header;
`

export const Content = styled.div`
  width: 67.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`
