import styled from '@emotion/styled'

export const Container = styled.section`
  padding: 1.25rem 1.5rem;
  min-height: 15rem;
  background: #fff;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  transition: 200ms ease-out;
  border-radius: 8px;

  &:hover {
    border-radius: 0;
    box-shadow: none;
    scale: 0.98;
    padding-inline: 0.5rem;
  }

  @media (max-width: 425px) {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    &:hover {
      border-radius: 8px;
      scale: 1;
      box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
      padding-inline: 1.5rem;
    }

    &:active {
      border-radius: 0;
      box-shadow: none;
      scale: 0.98;
      padding-inline: 0.5rem;
    }
  }
`
export const Time = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.35rem;
  font-weight: bold;
  position: relative;
  color: #ddd;

  p {
    color: #31a85e;
    font-size: clamp(0.75rem, 3vw, 0.85rem);
  }

  time {
    color: #ddd;
    text-transform: uppercase;
    font-size: clamp(0.75rem, 3vw, 0.85rem);
  }
`

export const Content = styled.div`
  position: relative;
  padding-inline: 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    height: 5.225rem;
    width: 0.325rem;
    background: #00a849;
  }

  h1 {
    color: #000;
    word-break: break-all;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: clamp(1rem, 3vw, 1.4rem);
    line-height: 80.4%;
    letter-spacing: 0.01em;
  }

  p {
    color: rgba(0, 0, 0, 0.4);
    font-size: clamp(1rem, 3vw, 1.3rem);
    font-weight: 500;
    letter-spacing: 0.01em;
    max-height: 9.3rem;
    overflow: hidden;
  }
` 
