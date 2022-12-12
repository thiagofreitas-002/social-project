import styled from '@emotion/styled'

export const Carrousel = styled.div`
  overflow: hidden;
  margin-top: 10rem;

  @media (max-width: 420px) {
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

  @media (max-width: 420px) {
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
    padding: 0 1.875rem;
  }

  @media (max-width: 420px) {
    padding: 0 1.25rem;
  }
`

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Menu = styled.aside`
  position: relative;
  min-height: 40rem;
  background-color: #ff9900;
  box-shadow: 0.5rem 0.5rem 0 #005e1a;
  padding: 1rem 1.25rem;

  @media (max-width: 768px) {
    min-height: 20rem;
    padding: 1rem;
  }
`

export const MenuContent = styled.div`
  position: sticky;
  top: 6.25rem;
  width: 100%;
  min-height: 10rem;
  background: tomato;

  transition: transform 200ms;
`
