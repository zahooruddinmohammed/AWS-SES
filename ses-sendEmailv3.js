const{SESClient,SendEmailCommand}=require("@aws-sdk/client-ses");
require('dotenv').config();

const SES_CONFIG={
    credentials:{
        accessKeyId: process.env.Access_key_ID,
        secretAccessKey: process.env.Secret_access_key,
    },
    region: process.env.AWS_SES_region,
};

const sesClient = new SESClient(SES_CONFIG);

const sendEmail = async (recipientEmail, name) => {
    let params = {
      Source: process.env.AWS_SES_SENDER,
      Destination: {
        ToAddresses: [recipientEmail],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: '<h1>This is the body of my email with v3</h1>',
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'This is the body of an email! with v3',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: `Hello, ${name}!`,
        },
      },
    };
  
    try {
        const command = new SendEmailCommand(params); // Ensure SendEmailCommand is initialized here
        const response = await sesClient.send(command); // Send the email
        console.log('Email has been sent!', response);
      } catch (error) {
        console.error('Error sending email:', error);
      }
  };
  
sendEmail('marketingoperations@smoketechone.com', 'Sales Smoke');
