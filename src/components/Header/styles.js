import styled from "@emotion/styled";

export const Container = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 0 3.125rem;
  top: 0;
  width: 100%;
  height: 7rem;
  z-index: 100;
  background: #ff9900;
  transition: all ease-in-out 200ms;

  @media (max-width: 768px) {
    gap: 0px;
    font-size: clamp(0.75rem, 2.5vw, 1rem);
    justify-content: center;
    text-align: center;

    a img {
      display: none;
    }
  }

  & a img {
    width: 6rem;
    aspect-ratio: 1/1;
    object-fit: contain;
  }

  h1 {
    color: #005e1a;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
