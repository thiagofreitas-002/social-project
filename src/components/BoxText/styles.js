import styled from "@emotion/styled";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 150px;
    gap: 20px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;

    &::before {
    content: "";
    height: 204px;
    width: 14px;
    background-color: #FF9900;
    }
`;

export const Box = styled.section`
    height: 250px;
    width: 864px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    padding: 30px 30px;

    background: #005E1A;
`;

export const TitleBox = styled.h1`
    color: #fff;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 80.4%;
    letter-spacing: 0.01em;
`;

export const TextBox = styled.p`
    color: #fff;
    
    font-style: normal;
    font-size: 20px;
    letter-spacing: 0.01em;
`;
