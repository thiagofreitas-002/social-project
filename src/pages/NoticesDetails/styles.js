import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 68.75rem;
  padding: 0 3.125rem;
  min-height: 100vh;
  margin: 0 auto;
  background: hotpink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Content = styled.div`
  min-height: 100vh;

  a {
    color: #000;
    font-weight: 300;
    padding: 0.375rem;
    font-size: 1.5rem;
    border-radius: 8px;
    background: #ff9900;
    text-transform: uppercase;

    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    padding-top: 10px;
  }
`
