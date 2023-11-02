import validator from 'validator'; 
import { StyledNewsletter } from './style';
import {toast} from 'react-toastify'
export default function Newsletter(){
    
    const handleValidEmail = async (e) => {
        e.preventDefault()
        let email = e.target.email.value.trim()

        if(validator.isEmail(email)){
            try {
                const response = await fetch(`https://casaverde-backend-itsdamel.onrender.com/send-email?recipient=${email}`);
                console.log(response)
                response.ok ? toast.success(`Email enviado para ${email}`) : toast.error('Ops, algo deu errado com nosso servidor :(');
            
              } catch (err) {
                toast.error('Ops, algo deu errado com nosso servidor :(');
                console.log(err)
              }
            } else {
              toast.error('Email inválido.');
              toast.warning('meuemail@email.com é um exemplo de email válido.');
            }
          }
    return(
            <StyledNewsletter onSubmit={handleValidEmail}>

                <img src='assets/email-icon.svg' alt='email icon'></img>
                <input type="text" name='email' placeholder="Insira seu e-mail"></input>
                <button type='submit'>Assinar newsletter</button>
                
            </StyledNewsletter>
    )
}

   
 