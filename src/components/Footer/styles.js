import styled from '@emotion/styled'
import Logo from '../../assets/logo_adolfo.png'

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding: 0 3.125rem;
  background: #ff9900;

  > a {
    width: 8rem;
    aspect-ratio: 1/1;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    background-image: url(${Logo});
  }
`

export const Bloco = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  ul {
    display: flex;
    list-style: none;
  }

  h3 {
    font-size: 1.5rem;
    color: #005e1a;
  }

  a {
    color: #005e1a;
  }
`

export const OtherPages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;

  ul {
    flex-direction: column;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;

  li {
    display: inline-flex;
    align-items: center;
    width: 32px;
    height: 32px;

    a {
      display: inline-flex;
    }
  }
`
