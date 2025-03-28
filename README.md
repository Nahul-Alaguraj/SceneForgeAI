﻿# SceneForgeAI - AI-Powered Video Generation

## 📌 Project Overview

SceneForgeAI is an AI-driven tool that generates short videos from scene ideas. It utilizes **Llama 3** to create scene descriptions, fetches relevant visuals from **Pexels API**, and stitches them together to form a complete video. The project is structured as a **React frontend** with a **JavaScript server** that triggers Python scripts for video generation.

## 🚀 Features

- **AI-Powered Scene Generation** - Uses Llama 3 API to create scene descriptions.
- **Automated Video Creation** - Fetches images/videos from the Pexels API.
- **Backend Processing** - JavaScript server invokes Python scripts for video processing.

## 🔧 Improvements in Progress

- **Enhancing Video Generation Accuracy** 🔄
- **Integrating Background Music API** 🎵
- **Adding Voiceover API for Narration** 🎙️

## 📂 Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js (Express)
- **AI Model:** Llama 3 API
- **Media API:** Pexels API
- **Video Processing:** Python scripts (FFmpeg, OpenCV, MoviePy)

## 📜 Installation & Setup

### Prerequisites

- Node.js & npm
- Python 3.x
- API keys for Llama 3, Pexels, and video processing services

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nahul-Alaguraj/SceneForgeAI.git
   cd SceneForgeAI
   ```
2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. **Install backend dependencies**
   ```bash
   cd ../server
   npm install
   node server.js
   ```
4. **Run Python scripts for video generation**
   ```bash
   python generate_video.py
   ```

## 📌 Usage

- Enter a script for your video and let Llama 3 generate scene ideas.
- The backend fetches relevant media and processes them into a video.
- (Upcoming) Add background music and voiceover.

## 🤝 Contributing

We welcome contributions! Feel free to fork this repo, create pull requests, or report issues.



