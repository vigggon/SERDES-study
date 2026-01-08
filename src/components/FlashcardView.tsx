import React, { useState } from 'react';
import { questions as allQuestions, Question } from '../data/content';
import './FlashcardView.css';

export const FlashcardView: React.FC = () => {
    // Game State
    const [currentPool, setCurrentPool] = useState<Question[]>(allQuestions);
    const [nextPool, setNextPool] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [roundNumber, setRoundNumber] = useState(1);

    // Card State
    const [isFlipped, setIsFlipped] = useState(false);
    const [hasGraded, setHasGraded] = useState(false);

    // View State
    const [gameState, setGameState] = useState<'playing' | 'round-summary' | 'victory'>('playing');

    const currentQuestion = currentPool[currentIndex];

    const handleRestart = () => {
        setCurrentPool(allQuestions);
        setNextPool([]);
        setCurrentIndex(0);
        setRoundNumber(1);
        setIsFlipped(false);
        setHasGraded(false);
        setGameState('playing');
    };

    const handleFlip = () => {
        if (!hasGraded) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleGrade = (correct: boolean) => {
        setHasGraded(true);

        if (!correct) {
            setNextPool(prev => [...prev, currentQuestion]);
        }

        // Auto-advance delay for smoother UX, or manual next?
        // Let's do a slight delay or wait for user to click "Next Card" if we want to show feedback state?
        // Requirement said: "checkmark and a cross ... For the ones that are wrong, they should be repeated in rounds"

        // Let's instantly advance after a short delay to keep flow, 
        // OR show the result state (Green/Red border) then next.
        // Let's do manual "Next" or simple auto-advance. 
        // Given typically flashcards align with 'grade -> next', let's advance heavily.

        setTimeout(() => {
            handleNext();
        }, 600);
    };

    const handleNext = () => {
        setIsFlipped(false);
        setHasGraded(false);

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
        setIsFlipped(false);
        setHasGraded(false);
    };

    if (gameState === 'victory') {
        return (
            <div className="flashcard-container">
                <div className="victory-card card">
                    <h2>🎉 Mastery Achieved! 🎉</h2>
                    <p>You have mastered all {allQuestions.length} flashcards.</p>
                    <div className="stats">
                        <p>Total Rounds: {roundNumber}</p>
                    </div>
                    <button className="restart-btn" onClick={handleRestart}>
                        Restart Flashcards
                    </button>
                </div>
            </div>
        );
    }

    if (gameState === 'round-summary') {
        return (
            <div className="flashcard-container">
                <div className="summary-card card">
                    <h2>Round {roundNumber} Complete</h2>
                    <div className="summary-stats">
                        <p>Cards in this round: {currentPool.length}</p>
                        <p className="missed-count">Need to Retry: {nextPool.length}</p>
                    </div>
                    <button className="restart-btn" onClick={startNextRound}>
                        Start Retry Round {roundNumber + 1}
                    </button>
                </div>
            </div>
        );
    }

    // Progress
    const progress = ((currentIndex + 1) / currentPool.length) * 100;

    return (
        <div className="flashcard-container">
            <div className="quiz-header">
                <span className="round-badge">Round {roundNumber}</span>
                <span className="progress-badge">
                    Card {currentIndex + 1} / {currentPool.length}
                </span>
            </div>

            <div className="scene">
                <div
                    className={`card-object ${isFlipped ? 'is-flipped' : ''}`}
                    onClick={handleFlip}
                >
                    <div className="card-face card-front">
                        <h3>Question</h3>
                        <p className="flashcard-text">{currentQuestion.question}</p>
                        <span className="tap-hint">Tap to flip</span>
                    </div>

                    <div className="card-face card-back">
                        <div className="answer-content">
                            <h3>Answer</h3>
                            <div className="correct-answer">
                                {currentQuestion.options[currentQuestion.correctAnswer]}
                            </div>
                            <div className="explanation-box">
                                <p>{currentQuestion.explanation}</p>
                                <span className="source-tag">{currentQuestion.basedOn}</span>
                            </div>
                        </div>

                        {/* Controls are only on the back and catch clicks to prevent flip back */}
                        <div className="grading-controls" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="grade-btn fail"
                                onClick={() => handleGrade(false)}
                                disabled={hasGraded}
                            >
                                ❌
                            </button>
                            <button
                                className="grade-btn pass"
                                onClick={() => handleGrade(true)}
                                disabled={hasGraded}
                            >
                                ✅
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
