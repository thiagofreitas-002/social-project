import styled from '@emotion/styled'
import Logo from '../../assets/logo_adolfo.png'

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 10rem; */
  margin-top: 1.15rem;
  padding: 2rem 3.125rem;
  background: #ff9900;

  & > a {
    width: 8rem;
    aspect-ratio: 1/1;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    background-image: url(${Logo});
  }

  @media (max-width: 768px) {
    padding: 1rem 1.875rem;
    flex-direction: column;

    a {
      width: 20rem;
    }
  }

  @media (max-width: 425px) {
    padding: 1rem 1.25rem;
  }
`

export const Bloco = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  h3 {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: #fff;
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export const OtherPages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;

  ul {
    display: flex;
    list-style: none;
    flex-direction: column;

    li {
      a {
        color: #005e1a;
        font-weight: 600;
        font-size: clamp(1rem, 3vw, 1.25rem);
      }
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;

  ul {
    li {
      display: inline-flex;
      align-items: center;
      width: 32px;
      height: 32px;

      a {
        display: inline-flex;
        transition: 200ms ease-in-out;

        &:hover {
          transform: translateY(-5px);
        }
      }
    }
  }
`
