import React from 'react';
import './Layout.css';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-container">
            <header className="app-header glass-panel">
                <div className="logo">
                    <h1>Service Design Master</h1>
                    <span className="subtitle">Exam Prep Companion</span>
                </div>
                {/* Navigation removed as per simplified requirements */}
            </header>
            <main className="app-content">
                {children}
            </main>
        </div>
    );
};
