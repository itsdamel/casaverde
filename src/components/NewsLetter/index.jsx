import validator from "validator"; 
import { StyledNewsletter } from "./style";

export default function Newsletter(){
    
    const handleValidEmail = async (e) => {

        let email = e.target.email.value.trim()

        e.preventDefault()

        if(validator.isEmail(email)){

            let resolution = await fetch(`http://localhost:3000/send-email?recipient=${email}`).catch(err => console.log(err)) //Make it a function
            alert(`Email enviado para ${email}`) //Make it a pop up
            console.log(resolution)
            
        }else if(!validator.isEmail(email)){
            alert('Seu email não é válido. "meuEmail@email.com" é um exemplo de um email válido.') //Make it a pop up
        }
        
    }
    return(
            <StyledNewsletter onSubmit={handleValidEmail}>
                <img src='assets/email-icon.svg'></img><input type="text" name='email' placeholder="Insira seu e-mail"></input><button type='submit'>Assinar newsletter</button>
            </StyledNewsletter>
    )
}

   
 