import sgMail from '@sendgrid/mail'; 
import express from "express";
import ViteExpress from "vite-express";
import dotenv from 'dotenv'
import cors from 'cors';

dotenv.config()
let apiKey = import.meta.env.VITE_API_KEY;
sgMail.setApiKey(apiKey) 

const app = express();
app.use(cors());



app.get('/', ( res ) => {
  res.send('Welcome to the sendgrid email server')
});

//Email page
app.get('/send-email', ( req ) =>{
  const {recipient} = req.query
  const msg ={
    to: recipient,
    from: 'workmailmelo@gmail.com',
    subject: 'CasaVerde - Newsletter',
    text: "Thank you for subscribing to our newsletter! Dear recruiter, this button does work :)"
  }
  sgMail.send(msg)
  .then(() => console.log('Email sent'));
})

ViteExpress.listen(app, 3000, () => console.log("Server is listening...")); 