import styled from '@emotion/styled'

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  padding: 1.25rem 1.875rem;
  background: #005e1a;
  min-height: 15rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1.25rem;
    height: 12.5rem;
    width: 0.875rem;
    background-color: #ff9900;
  }
`

export const TitleBox = styled.h1`
  color: #fff;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 80.4%;
  letter-spacing: 0.01em;
`

export const TextBox = styled.p`
  color: #fff;
  font-size: 1.25rem;
  letter-spacing: 0.01em;
`
