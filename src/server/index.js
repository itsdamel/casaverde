import sgMail from '@sendgrid/mail'; 
import express from "express";
import ViteExpress from "vite-express";
import cors from 'cors';


let apiKey = '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';

sgMail.setApiKey(apiKey) 

const app = express();
app.use(cors());



app.get('/', ( req, res ) => {
  res.send('Welcome to the sendgrid email server')
});

//Email page
app.get('/send-email', ( req, res ) =>{
  const {recipient} = req.query
  const msg ={
    to: recipient,
    from: 'workmailmelo@gmail.com',
    subject: 'CasaVerde - Newsletter',
    text: "Thank you for subscribing to our newsletter! Dear recruiter, this button does work :)"
  }
  sgMail.send(msg)
  .then((sucess) => {
    res.send(sucess)
    console.log('Email sent')
  });
})

ViteExpress.listen(app, 3000, () => console.log("Server is listening...")); 