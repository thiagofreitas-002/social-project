import styled from '@emotion/styled'

const Title = styled.h1`
  background: tomato;
  transition: 200ms;
`

const Container = styled.div`
  max-width: 1000px;
  padding: 4rem;
  margin: 0 auto;
  background: hotpink;

  &:hover ${Title} {
    transform: translateY(-1rem);
  }
`

export function App() {
  return (
    <Container>
      <Title>Hello world</Title>
    </Container>
  )
}
