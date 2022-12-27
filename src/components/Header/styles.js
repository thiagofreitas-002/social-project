import styled from '@emotion/styled'

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 3.125rem;
  top: 0;
  width: 100%;
  height: 7rem;
  z-index: 100;
  background: #ff9900;
  transition: 150ms ease-in-out;

  & a img {
    width: 6rem;
    aspect-ratio: 1/1;
    object-fit: contain;
    transition: 150ms ease-in-out;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  h1 {
    color: #005e1a;
    font-weight: 600;
    text-transform: uppercase;
    margin: auto;
    position: relative;
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  @media (max-width: 768px) {
    gap: 0px;
    font-size: clamp(0.75rem, 2.5vw, 1rem);
    justify-content: center;
    text-align: center;

    img {
      display: none;
    }
  }
`
