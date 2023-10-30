import styled from "styled-components";


export const CartDiv = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    padding: 30px;
    right: 0;
    height: 100vh;
    width: 40vw;
    align-items: center;
    justify-content: space-around;
    background-color: #F9FFFC;

`

export const CartHeader = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 2px solid #DEDEDE;
    
`
export const CloseButton = styled.img`
    max-width: 30px;
    height:auto;
    cursor: pointer;
`

export const CartContent = styled.div`
    max-height: 80%;
    align-items:center;
    overflow-y: auto;
    justify-content: center;
`