import styled from '@emotion/styled'
export const Container = styled.div`
  background-color: var(--yellow);
`

export const Content = styled.div`
  max-width: 75.75rem;
  min-height: 100vh;
  margin: 0 auto;
  background: rgba(0, 94, 26);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1,
  p {
    color: #ffff;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: #000;
    font-weight: 500;
    padding: 0.375rem;
    font-size: 1.5rem;
    border-radius: 8px;
    background: #ff9900;
    text-transform: uppercase;
    transition: 200ms;

    position: fixed;
    top: 1rem;
    left: 1rem;

    &:hover {
      filter: brightness(0.9);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
  }

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 0 0 32px 32px;
    filter: blur(0.03rem);
    transition: 200ms;

    &:hover {
      filter: blur(0);
    }
  }
`

export const Comp = styled.div`
  font-family: 'Roboto';
  padding: 0.875rem 2.5rem;

  #title {
    text-transform: capitalize;
    font-weight: 700;
    word-wrap: break-word;
    font-size: 2.9rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: capitalize;
  }
`
export const TextContent = styled.div`
  min-height: 50vh;
`
