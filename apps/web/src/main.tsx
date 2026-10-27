import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { initializeTheme } from './features/settings/theme';
import './styles/themes.css';
import './styles/global.css';
import './features/assistant/assistant.css';
import './features/workspace/workspace.css';
import './features/settings/settings.css';

initializeTheme();

const root = document.getElementById('root');

if (!root) {
  throw new Error('MuseShow root element was not found.');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
