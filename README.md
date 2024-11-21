# Getting Started with Modular Compliance Dashboard

This project is a **web application** built with **ReactJS**, **Redux**, and **Redux-saga** for managing and displaying data efficiently. It includes several modules for compliance management, including task overview, compliance status, recent activity, and authentication.

## Features

### 1. **Task Overview Module**
- Displays a table with hardcoded task data including:
  - Task title
  - Due date
  - Assigned person
  - Status
- Allows sorting, filtering, and pagination of tasks.

### 2. **Compliance Status Module**
- Displays pie chart and bar chart with compliance-related data, including:
  - Task title
  - Due date
  - Assigned person
  - Status
- Shows key metrics like:
  - Percentage of completed tasks
  - Overdue tasks
  
### 3. **Recent Activity Module**
- Displays a log of recent actions related to compliance tasks, including:
  - Timestamp
  - Action description
  - User involved
  
### 4. **Authenticator**
- Uses **AWS Amplify UI** for user authentication.

## Tech Stack

- **Frontend:**
  - **React.js**
  - **Redux** & **Redux-saga**
  - **Ant Design**
  - **AWS Amplify**
  - **Jest** (for testing)
  - **React Router** (for routing)
  - **Recharts** (for data visualization)

## Prerequisites

Before running the project locally, ensure that you have the following installed:

- **Node.js** (version 14 or later)
- **npm** (Node Package Manager)

## Steps to Run Locally

### 1. Clone the repository

First, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/TBaoBrian09/modular-compliance-dashboard.git
