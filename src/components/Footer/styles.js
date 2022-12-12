import styled from '@emotion/styled'

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10rem;
  padding: 0 3.125rem;
  background: #ff9900;
`

export const Bloco = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 8px;

  ul {
    display: flex;
    list-style: none;
  }

  h3 {
    font-size: 25px;
  }
`
