import styled from "styled-components";

const BaseParagraph = styled.p`
    line-height: 26px;
    font-size: ${ props => props.fontSize || '22px'};
    opacity: 0.5;
    @media(max-width: 440px){
        font-size: 4.5vw;
        line-height: 20px;
    }
`;

export default BaseParagraph;