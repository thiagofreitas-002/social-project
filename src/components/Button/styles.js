import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    .imgclick{
        position: absolute;
        left: -34px;
        top: 3px;
    }
`;

export const Button = styled.button`
    height: 34px;
    width: 250px;

    color: #000;

    font-weight: 600;
    font-size: 32px;
    line-height: 80.4%;
/* or 26px */

    letter-spacing: -0.065em;

    text-align: left;

    background: #FF9900;

    border: none;

    box-shadow: 12px 10px 0px 0px rgb(0 94 26);

    padding-left: 20px;
`;  