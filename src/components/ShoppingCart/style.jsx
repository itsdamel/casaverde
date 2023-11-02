import styled from 'styled-components';
import BaseFlexDiv from '../../shared/Base/BaseFlexDiv';

export const CartDiv = styled(BaseFlexDiv)`
    position: fixed;
    z-index: 2;
    top: 0;
    padding: 30px;
    flex-direction: column;

    right: 0;
    height: 100vh;
    min-width: 45vw;
    justify-content: space-between;
    background-color: #F9FFFC;
    @media (max-width: 940px){
        padding: 10px 2px;
        width: 60vw;
    }
    @media (max-width: 600px){
        width: 80vw;
    }
    @media (max-width: 420px){
        padding: 10px 2px;
        width: 100vw;
    }
`

export const CartHeader = styled(BaseFlexDiv)`
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 2px solid #DEDEDE;
    
`
export const CloseButton = styled.img`
    max-width: 30px;
    height:auto;
    cursor: pointer;
`

export const CartContent = styled(BaseFlexDiv)`
    height: 80%;
    width: 100%;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
   
`
export const CartFooter = styled(BaseFlexDiv)`
    border-top: 3px solid black;
    padding-top: 10px;
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
