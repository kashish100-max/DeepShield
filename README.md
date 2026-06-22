# DeepShield 🛡️

DeepShield is an AI-powered deepfake detection and risk assessment platform designed to help users identify manipulated images and videos. As AI-generated content becomes increasingly realistic, DeepShield provides an accessible way to analyze suspicious media, estimate the likelihood of manipulation, and guide users toward informed action.

## Features

* Upload images and videos for analysis
* AI-powered deepfake detection
* Manipulation risk assessment
* Authenticity scoring
* Visual indicators of suspicious content
* Recommended actions based on risk level
* Modern and responsive user interface

## System Architecture

User Upload
⬇️
React Frontend (Vite)
⬇️
FastAPI Backend
⬇️
Deepfake Detection Model
⬇️
Risk Assessment Engine
⬇️
Results & Action Guide

## Tech Stack

### Frontend

* React
* Vite
* React Router
* CSS3

### Backend

* FastAPI
* Python

### AI & Machine Learning

* Hugging Face Transformers
* PyTorch
* Deepfake Detection Model

## Project Structure

```text
DeepShield
│
├── src/                 # React Frontend
├── public/
│
├── backend/
│   ├── main.py
│   ├── detector.py
│   ├── requirements.txt
│   └── uploads/
│
├── package.json
└── README.md
```

## Installation

### Frontend Setup

```bash
npm install
npm run dev
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

Frontend runs on:

```text
http://localhost:5173
```

## Problem Statement

The rapid growth of generative AI has made it easier than ever to create realistic fake images and videos. These deepfakes can be used for misinformation, impersonation, fraud, harassment, and reputational damage. DeepShield aims to provide a practical solution for detecting manipulated media and helping users respond responsibly.

## Future Enhancements

* Explainable AI (XAI) visualizations
* Heatmap-based manipulation localization
* Detailed PDF investigation reports
* Video frame-level analysis
* Cloud deployment and scalability improvements
* Real-time browser extension support

## Team

Developed as a collaborative project focused on combating AI-generated misinformation and improving digital trust.

## License

This project is intended for educational, research, and demonstration purposes.
