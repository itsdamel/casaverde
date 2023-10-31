import styled from "styled-components";

export const CartDiv = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    right: 0;
    height: 100vh;
    width: 60vw;
    align-items: center;
    justify-content: space-between;
    background-color: #F9FFFC;

`

export const CartHeader = styled.div`
    display: flex;
    width: 100%;
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
    height: 80%;
    width: 100%;
    align-items: center;
    overflow-y: auto;
   
`
export const CartFooter = styled.div`
    border-top: 3px solid black;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 15%;


    .totalDiv{
        display: flex;
        width: inherit;
        justify-content: space-between;
    }
    .buttonsDiv{
        display: inherit;
        justify-content: space-between;
        width: inherit;
    }
    button{
        cursor: pointer;
        background-color: #FFCB47;
        border: none;
        width: 40%;
        padding: 10px;
    }
    .buttonsDiv button{
        color: white;
    }
    .buttonsDiv button:first-of-type:hover{
        background-color:#DB3E00;
        
    }

    .buttonsDiv button:last-of-type:hover{
        background-color: #6C8F51;

    }
`
