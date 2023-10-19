import sgMail from '@sendgrid/mail'; 
import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';


const app = express();
app.use(cors());

sgMail.setApiKey('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');/*  import.meta.env.VITE_REACT_API_KEY; */

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