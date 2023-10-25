import styled from "styled-components";

export const Paragraph = styled.p`
    line-height: 26px;
    font-size: ${ props => props.fontSize || '22px'};
    opacity: 0.5;
    @media(max-width: 440px){
        font-size: 4.5vw;
        line-height: 20px;
    }
`;