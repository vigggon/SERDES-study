import React from 'react';
import './Layout.css';

interface LayoutProps {
    children: React.ReactNode;
    currentView: 'quiz' | 'flashcards';
    onViewChange: (view: 'quiz' | 'flashcards') => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange }) => {
    return (
        <div className="app-container">
            <header className="app-header glass-panel">
                <div className="logo">
                    <h1>Service Design Master</h1>
                    <span className="subtitle">Exam Prep Companion</span>
                </div>

                <nav className="nav-pills">
                    <button
                        className={currentView === 'quiz' ? 'active' : ''}
                        onClick={() => onViewChange('quiz')}
                    >
                        Quiz
                    </button>
                    <button
                        className={currentView === 'flashcards' ? 'active' : ''}
                        onClick={() => onViewChange('flashcards')}
                    >
                        Flashcards
                    </button>
                </nav>
            </header>
            <main className="app-content">
                {children}
            </main>
        </div>
    );
};
