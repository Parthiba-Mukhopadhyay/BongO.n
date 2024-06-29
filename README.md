![image](https://github.com/Parthiba-Mukhopadhyay/BongO.n/assets/89331202/1bd14b6e-ae57-4fe3-8ce8-f224ec5f969c)
---

# PAWsitive

## Project Inspiration
The inspiration for PAWsitive came from the need to create a centralized platform that connects pet owners with essential services such as blood donors, veterinary clinics, and rescue centers. Our goal is to ensure the well-being of pets by making it easier for their owners to find and access the necessary resources.

## Project Description
PAWsitive is a comprehensive web application designed to help pet owners find blood donors, veterinary clinics, and rescue centers with ease. The platform features:

- **Blood Donors Directory**: Search and filter blood donors based on specific criteria.
- **Veterinary Clinics Locator**: Find nearby veterinary clinics and get detailed information about their services.
- **Rescue Centers Directory**: Access a directory of rescue centers with information on ambulance services.
- **Registration Portals**: Register as a blood donor, veterinary clinic, rescue center, or event host.
- **Spotlight Section**: Highlight ongoing projects and campaigns to encourage community participation.
- **Voice Assistant Section**: Provide customer support and educational resources for pet owners through voice assistant calls powered by Callchimp.AI.
- **Fully Customized AI Chatbot**: Gemini powered AI chatbot to tackle all animal-related queries of users and provide customized answers through puns for other doubts.

## Tech Stacks Used
- **React**: For building the user interface.
- **Next.js**: For server-side rendering and building static websites.
- **TypeScript**: For static type checking to improve code quality.
- **MongoDB**: For the database to store and retrieve data.
- **Tailwind CSS**: For styling the application with a dark theme.
- **Node.js**: For backend development and handling server-side operations.

## Third-Party Technologies Used

### Kinde
For user authentication using OTP, login, and signup.

#### Integration Steps:
1. **Install Kinde SDK**:
   ```bash
   npm install @kinde-oss/kinde
   ```
2. **Initialize Kinde**:
   ```javascript
   import { KindeClient } from '@kinde-oss/kinde';

   const kinde = new KindeClient({
     clientId: 'your-client-id',
     domain: 'your-kinde-domain'
   });
   ```
3. **Set Up OTP Login**:
   ```javascript
   kinde.sendOtp({
     email: 'user@example.com'
   }).then(response => {
     // Handle OTP sent response
   });
   ```
4. **Verify OTP**:
   ```javascript
   kinde.verifyOtp({
     email: 'user@example.com',
     otp: '123456'
   }).then(response => {
     // Handle verified response
   });
   ```

### Uploadthing
To upload images of certificates for dog vaccination certificate status.

#### Integration Steps:
1. **Install Uploadthing SDK**:
   ```bash
   npm install @uploadthing/sdk
   ```
2. **Initialize Uploadthing**:
   ```javascript
   import Uploadthing from '@uploadthing/sdk';

   const uploadthing = new Uploadthing({
     apiKey: 'your-api-key'
   });
   ```
3. **Upload Image**:
   ```javascript
   uploadthing.upload({
     file: imageFile,
     onProgress: (progress) => {
       // Handle progress updates
     }
   }).then(response => {
     // Handle upload response
   });
   ```

### Callchimp.ai
To integrate a calling service that tackles user doubts.

#### Integration Steps:
1. **Authentication**:
   ```javascript
   const apiKey = 'your-api-key';
   ```
2. **Create Supervisor**:
   ```javascript
   callchimp.createSupervisor({
     name: 'Supervisor Name'
   }).then(response => {
     // Handle create supervisor response
   });
   ```
3. **Send OTP to Supervisor by ID**:
   ```javascript
   callchimp.sendOtpToSupervisor({
     supervisorId: 'supervisor-id'
   }).then(response => {
     // Handle OTP sent response
   });
   ```
4. **Verify Supervisor OTP by ID**:
   ```javascript
   callchimp.verifySupervisorOtp({
     supervisorId: 'supervisor-id',
     otp: '123456'
   }).then(response => {
     // Handle verified response
   });
   ```
5. **List Subscribers**:
   ```javascript
   callchimp.listSubscribers().then(response => {
     // Handle list subscribers response
   });
   ```
6. **Create Call**:
   ```javascript
   callchimp.createCall({
     leadId: 'lead-id'
   }).then(response => {
     // Handle create call response
   });
   ```

### Gemini API
To create a custom chatbot for solving animal-related user queries.

#### Integration Steps:
1. **Install Gemini SDK**:
   ```bash
   npm install @gemini/sdk
   ```
2. **Initialize Gemini**:
   ```javascript
   import GeminiClient from '@gemini/sdk';

   const gemini = new GeminiClient({
     apiKey: 'your-api-key'
   });
   ```
3. **Create Chatbot**:
   ```javascript
   gemini.createChatbot({
     name: 'PAWsitive Bot',
     description: 'Handles animal-related queries'
   }).then(response => {
     // Handle create chatbot response
   });
   ```
4. **Send Message to Chatbot**:
   ```javascript
   gemini.sendMessage({
     botId: 'bot-id',
     message: 'What do you need help with today?'
   }).then(response => {
     // Handle chatbot response
   });
   ```

## How to Start and Run the Project

Follow these steps to start and run the PAWsitive project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Parthiba-Mukhopadhyay/BongO.n
   ```

2. **Navigate into the project directory**:
   ```bash
   cd BongO.n
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to see the application running.

## Walkthrough of the Project

Here are the steps to navigate through the PAWsitive application:

1. **Landing Page**: The homepage of the PAWsitive application.
![landing](https://github.com/Parthiba-Mukhopadhyay/BongO.n/assets/89331202/193dcbda-2cc9-445c-a2f0-61e58e1922ed)

2. **Login/Sign Up**: Authenticate users via Kinde for secure access.
![sign in](https://github.com/Parthiba-Mukhopadhyay/BongO.n/assets/89331202/721091c4-89a3-4a5c-a24a-9b5eb5e45c53)
![sign up](https://github.com/Parthiba-Mukhopadhyay/BongO.n/assets/89331202/df6d5c0e-ac9a-4baf-ab2d-93d0e3595d4d)

3. **Dashboard**: The main interface with access to all features.
 - **Spotlight Section**: Highlight ongoing projects and campaigns.
 - **Call Support**: Access voice assistant support powered by Callchimp.AI.
![dashboard1](https://github.com/Parthiba-Mukhopadhyay/BongO.n/assets/89331202/2ddb3b0e-2002-45f6-9648-b0f91956d4f2)

 - **Services**:
   - **View Donors**: Search and filter through blood donors.
   - **View Veterinary Clinics**: Locate nearby veterinary clinics.
   - **View Rescue Centers**: Find rescue centers and ambulance services.

![dashboard2](https://github.com/Parthiba-Mukhopadhyay/BongO.n/assets/89331202/c9c66679-9674-4ff0-96be-3454ef8a1bf5)

 - **Collaborations**:
   - **Register as Donor**: Sign up as a blood donor.
   - **Register as Vet Clinic**: Register a veterinary clinic.
   - **Register as Rescue Center**: Enroll a rescue center.
   - **Register Events and Campaigns**: Organize events and campaigns.
     
![image](https://github.com/Parthiba-Mukhopadhyay/BongO.n/assets/89331202/f9c35cfa-00b5-4e1a-825a-b20960de4db4)


4. **AI Chatbot**: Use the Gemini-powered chatbot for animal-related queries.
![image](https://github.com/Parthiba-Mukhopadhyay/BongO.n/assets/89331202/23812d42-a331-48bd-a6be-6a14ac298290)


## Detailed Working of the Project

For a comprehensive understanding of how the PAWsitive project works, you can watch our video walkthrough on youtube:

[Watch the Detailed Video Walkthrough](https://your-video-link-here)

## Team
- **Parthiba Mukhopadhyay**: Full Stack Developer
- **Mainak Chattopadhyay**: Full Stack Developer
- **Aritro Saha**: Full Stack Developer

---
