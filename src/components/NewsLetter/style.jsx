import styled from 'styled-components';

export const StyledNewsletter = styled.form`
    width: 100%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    background: #FFF;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);

    img{
        max-width: 21px;
        height: 10px;
    }

    input, button{
        height: 100%;
        border: none;
    }

    input{
        outline: none;
        opacity: 0.3;
        width: 60%;
    }

    button{
        cursor: pointer;
        padding: 20px;
        background-color: #FFCB47;
        color: #202020;
        
    }

    button:hover{
        background-color: #ecab00;
    }
  
`;

