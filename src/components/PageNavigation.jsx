import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navigationConfig } from '../constants/navigation';
import '../pages/Prod-Serv-pages.css';

const PageNavigation = ({ type, currentId }) => {
    const navigate = useNavigate();
    const list = navigationConfig[type];
    const currentIndex = list.findIndex(item => item.id === currentId);

    if (currentIndex === -1) return null;

    const prevIndex = (currentIndex === 0) ? list.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex === list.length - 1) ? 0 : currentIndex + 1;

    const prev = list[prevIndex];
    const next = list[nextIndex];

    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="custom-page-nav">
            <button className="nav-arrow-btn left" onClick={() => handleNavigate(prev.path)}>
                <span className="nav-arrow-icon">← PREVIOUS</span>
                <span className="nav-label">{prev.name}</span>
            </button>

            <button className="nav-arrow-btn right" onClick={() => handleNavigate(next.path)}>
                <span className="nav-arrow-icon">NEXT →</span>
                <span className="nav-label">{next.name}</span>
            </button>
        </div>
    );
};

export default PageNavigation;
