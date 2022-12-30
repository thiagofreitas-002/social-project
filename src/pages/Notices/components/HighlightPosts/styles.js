import styled from '@emotion/styled'

export const Container = styled.div`
  height: 80vh;
  /* width: 80vw; */
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.85) 70%), url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
  cursor: pointer;
  position: relative;

  h1 {
    word-wrap: break-word;
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    font-size: clamp(1.5rem, 4vw, 4rem);
    color: #fff;
  }
`
