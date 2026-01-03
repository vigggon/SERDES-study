# Service Design Study App

A comprehensive Multiple Choice Question (MCQ) application designed for studying Service Design concepts, covering key articles and frameworks (Barney, Helfat & Peteraf, Vargo & Lusch, Henkel, Platforms, etc.).

## Features

- **Massive Question Bank**: ~130+ granular questions covering deep theoretical details.
- **Mastery Learning**: Incorrect answers are tracked. You must retry and clear all missed questions in subsequent "Retry Rounds" until mastery is achieved.
- **Instant Feedback**: Immediate validation of answers with detailed explanations and source citations.
- **Premium UI**: Clean, responsive interface with visual feedback states.

## Tech Stack

- **Framework**: React + TypeScript (Vite)
- **Styling**: Vanilla CSS

## Setup & Running

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open the local URL provided (usually `http://localhost:5173`).

3. **Build for Production**:
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

## Project Structure

- `src/components/QuizView.tsx`: Main quiz logic (State machine for rounds/retries).
- `src/data/content.ts`: The dataset containing all questions.
- `src/App.tsx`: Main entry point.
- `src/components/Layout.tsx`: UI wrapper.
