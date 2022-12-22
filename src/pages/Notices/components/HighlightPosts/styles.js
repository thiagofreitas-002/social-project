import styled from '@emotion/styled'

export const Container = styled.div`
    height: 80vh;
    /* width: 80vw; */
    background-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 70%), url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    display: flex;
    justify-content: start;
    align-items: flex-end;
    cursor: pointer;
    
    h1 {
        margin-bottom: 5rem;
        font-size: 4rem;
        margin-left: 4rem;
    }
`