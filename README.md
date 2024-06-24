# SES Email Template and Sending Emails with AWS SDK v3
This project demonstrates how to create an email template and send emails using Amazon SES (Simple Email Service) with AWS SDK v3 in Node.js.

## Prerequisites
1.Node.js installed on your machine.
2.AWS Account with SES configured.
3.Domain verified in Amazon SES.
4.IAM User with appropriate permissions for SES.
5.Environment Variables configured for AWS credentials.

# Setup
## Step 1: Install Node.js
Ensure you have Node.js installed. You can download and install it from Node.js official website.

## Step 2: Create Project Directory
Create a new project directory and navigate into it:
![image](https://github.com/zahooruddinmohammed/AWS-SES/assets/130806627/0b8c4aed-9331-438b-b38e-a56b01346f52)


## Step 3: Initialize Node.js Project
Initialize a new Node.js project:
"npm init -y"

## Step 4: Install Required Packages
Install the necessary packages:
"npm install @aws-sdk/client-ses dotenv"

## Step 5: Configure Environment Variables
Create a .env file in the root directory of your project and add your AWS credentials and region:

## Step 6: Create Script to Send Email
Create a file named sendEmail.js

## Step 7: Run the Script to Send Email
Execute the script to send an email:
"node sendEmail.js"
![image](https://github.com/zahooruddinmohammed/AWS-SES/assets/130806627/e4b57329-b371-4144-b05e-eb38a9c3d4d9)

## Step 8: Create Script to Create Email Template
Create a file named createTemplate.js

## Step 9: Run the Script to Create Email Template
Execute the script to create the email template:
"node createTemplate.js"
![image](https://github.com/zahooruddinmohammed/AWS-SES/assets/130806627/7c8f8db8-6389-45ad-9eca-970c612503f4)
![image](https://github.com/zahooruddinmohammed/AWS-SES/assets/130806627/c8e97e7e-8418-4fbf-9090-18203a022225)


## Summary
Installed Node.js and initialized the project with necessary dependencies.
Configured environment variables for AWS credentials and region.
Created a script to send an email using Amazon SES and AWS SDK v3.
Created a script to create an email template using Amazon SES and AWS SDK v3.
By following these steps, you can successfully create email templates and send emails using Amazon SES with AWS SDK v3 in Node.js.
