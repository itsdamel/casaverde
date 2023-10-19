import styled from "styled-components"
import validator from "validator"; 

const Wrapper = styled.form`
    max-width: 580px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    background: #FFF;
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);

    img{
        width: 21px;
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
export default function Newsletter(){
    
    const handleValidEmail = async (e) => {

        let email = e.target.email.value.trim()

        e.preventDefault()

        if(validator.isEmail(email)){

            let resolution = await fetch(`http://localhost:3000/send-email?recipient=${email}`).catch(err => console.log(err)) 
            console.log(resolution)
        }else if(!validator.isEmail(email)){
            console.log('not valid')
        }
        
    }
    return(
            <Wrapper onSubmit={handleValidEmail}>
                <img src='assets/email-icon.svg'></img><input type="text" name='email' placeholder="Insira seu e-mail"></input><button type='submit'>Assinar newsletter</button>
            </Wrapper>
    )
}

   
 