import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  padding: 0.5rem 3.125rem;

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

  .logo-header {
    width: 10rem;
    height: 10rem;

    transition: all ease-out 300ms;
  }

  .school-name {
    color: #005e1a;

    font-weight: 700;

    text-transform: uppercase;
  }
`;
