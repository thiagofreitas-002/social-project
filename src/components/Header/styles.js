import styled from '@emotion/styled'

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 3.125rem;
  top: 0;
  width: 100%;
  height: 7rem;
  z-index: 100;
  background: #ff9900;
  transition: ease-out 500ms;

  & a img {
    width: 6rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    display: block;
  }

  & a {
    transition: 200ms;
  }

  h1 {
    color: #005e1a;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.2s ease-in !important;
  }
`
