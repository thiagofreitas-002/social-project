import styled from '@emotion/styled'

export const Carrousel = styled.div`
  overflow: hidden;
  margin-top: 7rem;
  margin-bottom: 1.15rem;
  transition: 150ms ease-in-out;

  @media (max-width: 425px) {
    min-height: calc(50vh - 4.25rem);
  }
`

export const Image = styled.div`
  object-fit: cover;
  width: 100%;
  min-height: calc(80vh - 4.25rem);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.imageSrc});

  @media (max-width: 425px) {
    min-height: calc(50vh - 4.25rem);
  }
`

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 12.5rem;
  gap: 1.8rem;
  max-width: 75.75rem;
  margin: 0 auto;
  padding-inline: 3.125rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 0 1.875rem;
  }

  @media (max-width: 425px) {
    padding: 0 1.25rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .infinite-scroll {
    display: flex;
    flex-direction: column;

    a:nth-of-type(n + 2) {
      margin-top: 1.5rem;
    }
  }
`

export const Menu = styled.aside`
  height: fit-content;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  transition: 200ms ease-out;

  header {
    font-size: clamp(0.85rem, 3vw, 1.25rem);
    font-weight: 600;
    text-align: center;
    color: #000;
    transition: 200ms ease-out;
  }

  &:hover header {
    color: green;
    padding: 0.25rem;
  }

  @media (max-width: 768px) {
    header {
      padding: 0.5rem;
      color: green;
    }
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly; */
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const Info = styled.div`
  position: relative;
  z-index: 3;
  color: #f5f5f5;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20%);
  transition: 500ms;

  & > h4 {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: 500;
  }

  & > p {
    letter-spacing: 1px;
    font-size: clamp(0.75rem, 3vw, 0.9rem);
    margin: 0.4rem 0 1rem 0;
  }

  /* & > button {
    padding: 0.6rem;
    outline: none;
    border: none;
    border-radius: 4px;
    background: #00a849;
    color: white;
    font-weight: bold;
    transition: 0.4s ease;

    &:hover {
      background: #00a84967;
      color: #f5f5f5;
    }
  } */
  @media (max-width: 768px) {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

const BaseCard = styled.div`
  width: 100%;
  overflow: hidden;
  aspect-ratio: 3/4;
  border-radius: 8px;
  padding: 1.5rem;
  background: #f5f5f5;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 400ms ease-out;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.2);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(0.95);

  &:hover {
    transform: /* translateY(-5%) */ scale(1);
    border-radius: 0;
  }

  &:hover ${Info} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: #00000010;
    z-index: 2;
    transition: 500ms;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    transform: scale(1);
    border-radius: initial;
    padding: 1rem;
    aspect-ratio: initial;
    height: 10rem;
  }
`

export const Breakfast = styled(BaseCard)`
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.85) 70%), url(https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
`

export const Lunch = styled(BaseCard)`
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.85) 70%), url(https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-position: right;
`

export const AfternoonSnack = styled(BaseCard)`
  background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.85) 70%), url(https://images.pexels.com/photos/2227775/pexels-photo-2227775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
`
