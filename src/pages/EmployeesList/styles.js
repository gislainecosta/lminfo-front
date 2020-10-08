import styled from "styled-components";

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 18vw;
`;

export const ContainerEmployee = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2%;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.4);
    background-color: #00111f;
    border-radius: 20px;
    width: 94%;
    margin-bottom: 2vw;
`;

export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 2vw;
    background: -webkit-linear-gradient(90deg, #480377 0%, #3c03df 20%, #02ecff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Office = styled.h2`
    font-size: 1.5rem;
    color: #56bcf7;
    font-weight: 1000;
    text-transform: uppercase;
`;

export const Description = styled.p`
    margin: 1% 0 3% 3%;
    text-align: justify;
`;