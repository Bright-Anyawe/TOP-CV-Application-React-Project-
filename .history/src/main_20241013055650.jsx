import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Component/App'
import './index.css'
import './Styles/style.css'
import './src/Styles/styles2.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
