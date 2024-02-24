# Project Name : Secure File Upload and Download

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Configuration](#configuration)

---

## 1. Introduction <a name="introduction"></a>

This project is a backend application that provides a secure file upload and download functionality. It allows users to upload files, protect them with passwords, and generate shareable links. The recipients of the links can download the files directly if they have the correct password.

## 2. Features <a name="features"></a>

- **File Upload:** Users can upload files through the backend API.
- **Password Protection:** Optional password protection for uploaded files.
- **Shareable Links:** Generate shareable links for uploaded files.
- **Password-Protected Downloads:** Files can only be downloaded from the shareable link if the correct password is provided.

## 3. Requirements<a name="requirements"></a>

- Node.js 
- MongoDB 
- Express.js

## 4. Installation<a name="installation"></a>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VishalKumar369/file-sharing-backend-project.git
   cd file-sharing-backend-project

2. **Install dependencies:**
   ```bash
   npm install

3. Set up and configure your MongoDB database.

4. Configure the environment variables (see [Configuration](#configuration)) :

5. Run the application:
   ```bash
   npm start


## 5. Usage<a name="usage"></a>

1. **File Upload**:
   - Use the /upload endpoint to upload a file.
   
2. **Password Protection**:
   - Use the /upload endpoint with the password parameter to protect the uploaded file with a password.
   
3. **Generate Shareable Link**:
   - After a successful upload, a unique shareable link will be generated.
   
4. **Download File**:
   - Click on the shareable link to download the file.
   - If the file is password-protected, enter the password when prompted.
  
## 6. Configuration<a name="configuration"></a>
   - Create a .env file in the project root and set the following variables:

     ```bash
     
     PORT=3001
     MONGODB_URI=mongodb://localhost:27.0.0.1/your-database
