import styled from '@emotion/styled'

export const Carrousel = styled.div`
  overflow: hidden;
  margin-top: 7rem;

  @media (max-width: 425px) {
    min-height: calc(50vh - 4.25rem);
  }
`

export const Image = styled.div`
  object-fit: cover;
  width: 100%;
  min-height: calc(80vh - 4.25rem);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.imageSrc});

  @media (max-width: 425px) {
    min-height: calc(50vh - 4.25rem);
  }
`

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 12.5rem;
  gap: 1rem;
  max-width: 68.75rem;
  margin: 0 auto;
  padding: 0 3.125rem;
  min-height: 100vh;
  margin-bottom: 1.15rem;
  margin-top: 1.15rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 0 1.875rem;
  }

  @media (max-width: 425px) {
    padding: 0 1.25rem;
  }
`

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Menu = styled.aside`
  max-height: 45rem;
  background-color: #ff9900;
  box-shadow: 0.5rem 0.5rem 0 #005e1a;
  padding: 1rem 1.25rem;
  border-radius: 6px;

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    min-height: 20rem;
    padding: 1rem;
    box-shadow: 0 0.5rem 0 #005e1a;
  }

  h1 {
    margin-bottom: 1rem;
    color: white;
  }
`
