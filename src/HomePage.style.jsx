import styled from "styled-components";

export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffffc5;
    ${(props) => props.cartVisibility && 'filter: blur(5px); ' };
    
`



