import { createRoot } from 'react-dom/client';
import { BrowserRouter as Routes } from 'react-router-dom';
import Logger from './utils/Logger.ts';
import "./index.css"
import { AppProvider } from './context/context.tsx';
import App from './App.tsx';

const rootElement: HTMLElement | null = document.getElementById("root");

if (rootElement) {
  Logger.info("Root Element created sucessfully..")
  const root = createRoot(rootElement);
  root.render(
    <AppProvider>
      <Routes>
        <App />
      </Routes>
    </AppProvider>
  );
} else {
  Logger.error("Failed to find the root element.");
}