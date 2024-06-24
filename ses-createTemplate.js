const{SESClient,CreateTemplateCommand}= require("@aws-sdk/client-ses");
const { Panorama } = require("aws-sdk");
require('dotenv').config();
const SES_CONFIG={
    credentials:{
        accessKeyId: process.env.Access_key_ID,
        secretAccessKey: process.env.Secret_access_key,
    },
    region: process.env.AWS_SES_region,
};

const sesClient =new SESClient(SES_CONFIG);
const run=async(template_name)=>{
    const params={
        Template:{
            TemplateName:template_name,
            HtmlPart: "<h1>Hello, {{name}}!</h1><p>Did you order anything recently?</p>",

                Textpart:"Hello,{{name}}! Did you order recently from our store",
                SubjectPart: "Amazon SES",
        },
    };
    const command=new CreateTemplateCommand(params);
    try{
        const res=await sesClient.send(command);
        console.log('SES template has been created!',res);
        
        }catch(err){
            console.error("failed to create template",err);
        }
    }


run('SES-Template');