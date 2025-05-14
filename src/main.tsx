
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apply theme based on logo colors
document.documentElement.style.setProperty('--background', '0 0% 100%');
document.documentElement.style.setProperty('--foreground', '0 0% 13%');
document.documentElement.style.setProperty('--primary', '13 96% 40%');

createRoot(document.getElementById("root")!).render(<App />);
