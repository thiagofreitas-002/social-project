import styled from '@emotion/styled'
export const Container = styled.div`
  font-family: var(--notices-datails-font);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: calc(2/3 * 100vw);
    object-fit: cover;
    filter: blur(0.03rem);
    transition: 200ms;
    aspect-ratio: 16 / 9;
    &:hover {
      filter: blur(0);
    }
  }
`

export const Content = styled.div`
  max-width: 1368px;
  padding: 0 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  #title {
    color: #111111;
    font-weight: 700;
    font-size: clamp(1.65rem, 3vw, 3.5rem);
    margin-bottom: 1rem;
    padding: 0 2rem;
    text-align: center;
  }
  @media (max-width: 425px) {
    padding: 0 0.5rem;
  }
`

export const Comp = styled.div`
  padding: 0.875rem 1.75rem;
  max-width: 1000px;
  width: 100%;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  min-height: 50vh;
  > p {
    font-size: clamp(1.2rem, 3vw, 1.25rem);
    line-height: 1.5rem;
    font-weight: 400;
    color: #333333;
  }
  > a {
    color: #245633;
    text-decoration: underline;
  }
  > a[href='/notices'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    font-weight: 500;
    padding: 0.375rem;
    font-size: 1.5rem;
    border-radius: 8px;
    background: #ff9900;
    text-transform: uppercase;
    transition: 200ms;
    &:hover {
      filter: brightness(0.9);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
  }
`

export const Comments = styled.div`
  .utterances {
    max-width: 100vw !important;
  }
`