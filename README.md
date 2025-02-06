# Credit Report Management System

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) ![React](https://img.shields.io/badge/frontend-react-blue) ![DaisyUI](https://img.shields.io/badge/UI-daisyui-blue) ![React](https://img.shields.io/badge/backend-expressJS-blue)

This is a full-stack web application for managing and visualizing credit reports. It allows users to upload XML files, extract relevant data, and view comprehensive reports in a user-friendly interface.

## Features

- File Upload: Upload XML files containing credit report data
- Data Extraction: Automatically parse XML files and extract relevant information
- Report Management: View list of uploaded reports
- Detailed Reports: View comprehensive report details with various sections
- Responsive Design: Mobile-friendly interface using Tailwind CSS and DaisyUI
- Dark Mode: Theme switching functionality
- Data Visualization: Tabbed interface for different report sections

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express, MongoDB
- **APIs**: RESTful API endpoints
- **Authentication**: JWT-based authentication
- **Styling**: Tailwind CSS, DaisyUI components

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kartik8Dwivedi/credit-sea.git
   ```
2. Install dependencies in both client and server directories:
   ```bash
    npm install
    ```

3. Create a .env file in the project root in both client and server directories:
   ```bash
   touch .env
   cp .env.example .env
   ```
4. Update the environment variables in the .env file:
   ```bash
    VITE_FRONTEND_URI='http://localhost:5000'

    MONGODB_URI='<YOUR_MONGODB_ATLAS_URI>'

    PORT=5000

    ```

5. Start the development server in both client and server directories:
    ```bash
     npm run dev
     ```
6. Open http://localhost:5173/ to view the app in the browser.

## API Endpoints

### Backend API

- **POST /api/v1/upload**
  - **Description**: Upload XML file and extract data
  - **Request Body**: XML file
  - **Response**: JSON object containing report ID

- **GET /api/v1/reports**
  - **Description**: Get list of all reports
  - **Response**: JSON array of report objects

- **GET /api/v1/reports/:id**
  - **Description**: Get specific report by ID
  - **Response**: JSON object containing report details

### Frontend API(Routes)

- **/upload**
  - **Description**: File upload page
  - **Functionality**: Upload XML files and display upload status

- **/reports**
  - **Description**: List of reports
  - **Functionality**: Display table of uploaded reports with basic details

- **/reports/:id**
  - **Description**: Specific report details
  - **Functionality**: Display detailed report information in tabbed interface

## Database Schema

### Report Schema

- **basicDetails**
  - name: String
  - mobilePhone: String
  - pan: String
  - creditScore: Number

- **reportSummary**
  - totalAccounts: Number
  - activeAccounts: Number
  - closedAccounts: Number
  - currentBalanceAmount: Number
  - securedAccountsAmount: Number
  - unsecuredAccountsAmount: Number
  - last7DaysCreditEnquiries: Number

- **creditAccountsInformation** (array of objects)
  - creditCard: String
  - bank: String
  - address: String
  - accountNumber: String
  - amountOverdue: Number
  - currentBalance: Number

# Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
