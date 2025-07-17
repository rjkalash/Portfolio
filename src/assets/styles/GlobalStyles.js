// src/assets/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --shadow-light: rgba(255, 255, 255, 0.1);
    --shadow-dark: rgba(0, 0, 0, 0.3);
    --text-primary: #ffffff;
    --text-secondary: #a0a0a0;
    --text-accent: #00ffcc;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: var(--text-primary);
    background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
    background-size: 400% 400%;
    animation: gradientFlow 20s ease-in-out infinite;
    position: relative;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
      pointer-events: none;
      z-index: -1;
    }
    overflow-x: hidden;
    min-height: 100vh;
  }

  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Glassmorphism utility classes */
  .glass {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .glass-dark {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  /* Modern button styles */
  .btn-modern {
    position: relative;
    padding: 14px 36px;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    backdrop-filter: blur(10px);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    &:hover::before {
      left: 100%;
    }
  }

  .btn-primary {
    background: var(--accent-gradient);
    color: white;
    box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .btn-primary:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(79, 172, 254, 0.6);
  }

  .btn-primary:active {
    transform: translateY(-1px) scale(0.98);
  }

  .btn-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .btn-glass:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }

  .btn-neon {
    background: transparent;
    border: 2px solid var(--text-accent);
    color: var(--text-accent);
    text-shadow: 0 0 10px var(--text-accent);
    box-shadow:
      0 0 20px rgba(0, 255, 204, 0.3),
      inset 0 0 20px rgba(0, 255, 204, 0.1);
  }

  .btn-neon:hover {
    background: var(--text-accent);
    color: #000;
    transform: translateY(-3px);
    box-shadow:
      0 0 30px rgba(0, 255, 204, 0.6),
      0 8px 25px rgba(0, 255, 204, 0.3);
  }

  /* Scroll animations */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-in-right.visible {
    opacity: 1;
    transform: translateX(0);
  }

  /* Advanced animations */
  .scale-in {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .scale-in.visible {
    opacity: 1;
    transform: scale(1);
  }

  .rotate-in {
    opacity: 0;
    transform: rotate(-10deg) scale(0.9);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .rotate-in.visible {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  .stagger-animation {
    animation-delay: var(--delay, 0s);
  }

  /* Floating animation */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }

  /* Pulse animation */
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  /* Glow effect */
  .glow {
    box-shadow: 0 0 20px rgba(0, 255, 204, 0.3);
    transition: box-shadow 0.3s ease;
  }

  .glow:hover {
    box-shadow: 0 0 30px rgba(0, 255, 204, 0.6);
  }

  /* Card hover effects */
  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-hover:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  /* Morphic elements */
  .morphic {
    background: linear-gradient(145deg, #1e1e1e, #2a2a2a);
    box-shadow:
      20px 20px 60px #0d0d0d,
      -20px -20px 60px #313131;
    border-radius: 20px;
  }

  .morphic-inset {
    background: linear-gradient(145deg, #2a2a2a, #1e1e1e);
    box-shadow:
      inset 20px 20px 60px #0d0d0d,
      inset -20px -20px 60px #313131;
    border-radius: 20px;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-gradient);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  /* Responsive typography */
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid var(--text-accent);
    outline-offset: 2px;
  }

  /* Selection styles */
  ::selection {
    background: var(--text-accent);
    color: #000;
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
    
    .glass, .glass-dark {
      border-radius: 15px;
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
    }
  }

  /* Touch device optimizations */
  @media (hover: none) and (pointer: coarse) {
    .btn-modern:hover {
      transform: none;
    }
    
    .btn-modern:active {
      transform: scale(0.95);
    }
  }
`;

export default GlobalStyles;
