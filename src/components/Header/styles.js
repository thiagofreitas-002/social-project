import styled from '@emotion/styled'

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #ff9900;
  transition: transform ease-out 300ms;

  & a img {
    width: 10rem;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  h1 {
    color: #005e1a;
    font-weight: 700;
    text-transform: uppercase;
  }
`
