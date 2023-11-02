import validator from 'validator'; 
import { StyledNewsletter } from './style';
import {toast} from 'react-toastify'
export default function Newsletter(){
    
    const handleValidEmail = async (e) => {

        let email = e.target.email.value.trim()

        e.preventDefault()

        if(validator.isEmail(email)){
            try{
                await fetch(`http://localhost:3000/send-email?recipient=${email}`).then((response)=>{
                    
                    response.ok&&toast.success(`Email enviado para ${email}`) 
                })
            }catch(err){toast.error('Ops, algo deu errado com nosso servidor :(')}
        }else{
            toast.error('Email inválido.')
            toast.warning('meuemail@email.com é um exemplo de email válido.')
        }
        
    }
    return(
            <StyledNewsletter onSubmit={handleValidEmail}>
                
                <img src='assets/email-icon.svg'></img><input type="text" name='email' placeholder="Insira seu e-mail"></input><button type='submit'>Assinar newsletter</button>
            </StyledNewsletter>
    )
}

   
 