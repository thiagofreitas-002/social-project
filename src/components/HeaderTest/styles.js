import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  padding: 0 3.125rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background: #ff9900;

  transition: transform ease-out 300ms;

    .logo-header{
        width: 10rem;
        height: 10rem;
    }

    .nav-bar{
        
    }
    ul{
        display: flex;
        align-items: center;
        gap: 50px;
    }

    ul a{
        color: #005e1a;
        
        font-weight: 700;
        font-size: 1.20rem;
        letter-spacing: 0.1rem;

        text-transform: uppercase;
    }
`;