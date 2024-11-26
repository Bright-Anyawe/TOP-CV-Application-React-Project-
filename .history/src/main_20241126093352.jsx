import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Component/App'
import './Styles/style.css'
import './Styles/styles2.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
