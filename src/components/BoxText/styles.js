import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    height: 204px;
    width: 14px;
    background-color: #ff9900;
  }
`

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  background: #005e1a;
`

export const TitleBox = styled.h1`
  color: #fff;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 80.4%;
  letter-spacing: 0.01em;
`

export const TextBox = styled.p`
  color: #fff;

  font-style: normal;
  font-size: 20px;
  letter-spacing: 0.01em;
`
