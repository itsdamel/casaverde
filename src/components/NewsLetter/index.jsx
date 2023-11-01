import validator from "validator"; 
import { StyledNewsletter } from "./style";
import {toast} from 'react-toastify'
export default function Newsletter(){
    
    const handleValidEmail = async (e) => {

        let email = e.target.email.value.trim()

        e.preventDefault()

        if(validator.isEmail(email)){

            await fetch(`http://localhost:3000/send-email?recipient=${email}`)
            .catch(toast.error('Ops, algo deu errado com nosso servidor :('))  
            toast.success(`Email enviado para ${email}`, {containerId: 'newsletterAlert'}) 
        }else{
            toast.error('Email inválido.', {containerId: 'newsletterAlert'})
            toast.warning('meuemail@email.com é um exemplo de email válido.', {containerId: 'newsletterAlert'})
        }
        
    }
    return(
            <StyledNewsletter onSubmit={handleValidEmail}>
                
                <img src='assets/email-icon.svg'></img><input type="text" name='email' placeholder="Insira seu e-mail"></input><button type='submit'>Assinar newsletter</button>
            </StyledNewsletter>
    )
}

   
 