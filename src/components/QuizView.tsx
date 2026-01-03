import React, { useState, useEffect } from 'react';
import { questions as allQuestions, Question } from '../data/content';
import './QuizView.css';

export const QuizView: React.FC = () => {
    // Game State
    const [currentPool, setCurrentPool] = useState<Question[]>(allQuestions);
    const [nextPool, setNextPool] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [roundNumber, setRoundNumber] = useState(1);

    // Question State
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // View State
    const [gameState, setGameState] = useState<'playing' | 'round-summary' | 'victory'>('playing');

    const currentQuestion = currentPool[currentIndex];

    // Reset game handler
    const handleRestart = () => {
        setCurrentPool(allQuestions);
        setNextPool([]);
        setCurrentIndex(0);
        setRoundNumber(1);
        setSelectedOption(null);
        setIsSubmitted(false);
        setGameState('playing');
    };

    const handleOptionClick = (index: number) => {
        if (isSubmitted) return;
        setSelectedOption(index);
        setIsSubmitted(true);

        // Logic: if incorrect, add to next pool
        if (index !== currentQuestion.correctAnswer) {
            // Avoid duplicates if clicked multiple times (though disabled prevents this)
            if (!nextPool.find(q => q.id === currentQuestion.id)) {
                setNextPool(prev => [...prev, currentQuestion]);
            }
        }
    };

    const handleNext = () => {
        // Reset per-question state
        setSelectedOption(null);
        setIsSubmitted(false);

        // Check if round is over
        if (currentIndex < currentPool.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            // Round over
            if (nextPool.length > 0) {
                setGameState('round-summary');
            } else {
                setGameState('victory');
            }
        }
    };

    const startNextRound = () => {
        setCurrentPool(nextPool);
        setNextPool([]);
        setCurrentIndex(0);
        setRoundNumber(prev => prev + 1);
        setGameState('playing');
        setSelectedOption(null);
        setIsSubmitted(false);
    };

    // --- RENDERERS ---

    if (gameState === 'victory') {
        return (
            <div className="quiz-container">
                <div className="victory-card card">
                    <h2>🎉 Mastery Achieved! 🎉</h2>
                    <p>You have correctly answered all {allQuestions.length} questions.</p>
                    <div className="stats">
                        <p>Total Rounds: {roundNumber}</p>
                    </div>
                    <button className="restart-btn" onClick={handleRestart}>
                        Restart Full Quiz
                    </button>
                </div>
            </div>
        );
    }

    if (gameState === 'round-summary') {
        return (
            <div className="quiz-container">
                <div className="summary-card card">
                    <h2>Round {roundNumber} Complete</h2>
                    <div className="summary-stats">
                        <p>Questions in this round: {currentPool.length}</p>
                        <p className="missed-count">Missed: {nextPool.length}</p>
                    </div>
                    <p>You need to retry the {nextPool.length} questions you missed.</p>
                    <button className="restart-btn" onClick={startNextRound}>
                        Start Retry Round {roundNumber + 1}
                    </button>
                </div>
            </div>
        );
    }

    // Default: Playing
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <span className="round-badge">Round {roundNumber}</span>
                <span className="progress-badge">
                    Question {currentIndex + 1} / {currentPool.length}
                </span>
            </div>

            <div className="quiz-card-mcq card">
                <h3 className="question-text">{currentQuestion.question}</h3>

                <div className="options-grid">
                    {currentQuestion.options.map((option, idx) => {
                        let className = "option-btn";
                        if (isSubmitted) {
                            if (idx === currentQuestion.correctAnswer) {
                                className += " correct";
                            } else if (idx === selectedOption) {
                                className += " incorrect";
                            } else {
                                className += " disabled";
                            }
                        }

                        return (
                            <button
                                key={idx}
                                className={className}
                                onClick={() => handleOptionClick(idx)}
                                disabled={isSubmitted}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>

                {isSubmitted && (
                    <div className={`feedback-section ${isCorrect ? 'success' : 'error'}`}>
                        <div className="feedback-header">
                            {isCorrect ? 'Correct!' : 'Incorrect'}
                        </div>
                        <p className="explanation">
                            {currentQuestion.explanation}
                        </p>
                        <div className="source">Source: {currentQuestion.basedOn}</div>

                        <button className="next-btn" onClick={handleNext}>
                            {currentIndex < currentPool.length - 1 ? 'Next Question →' : 'Finish Round'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
