import { useState } from 'react';
import { Layout } from './components/Layout';
import { QuizView } from './components/QuizView';
import { FlashcardView } from './components/FlashcardView';
import './App.css';

function App() {
    const [currentView, setCurrentView] = useState<'quiz' | 'flashcards'>('quiz');

    return (
        <Layout currentView={currentView} onViewChange={setCurrentView}>
            {currentView === 'quiz' ? <QuizView /> : <FlashcardView />}
        </Layout>
    );
}

export default App;
