import styled from '@emotion/styled'

export const Menu = styled.aside`
  height: 740px;
  width: 240px;
  /* position: fixed;
  top: 100px;
  right: 84px; */
  background-color: #ff9900;
  box-shadow: 26px 25px 0px 4px #005e1a;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 50px;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
