import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './Routes/AppRoutes'
import './Styles/main.scss';
 
createRoot(document.getElementById('root')!).render(
<StrictMode>
  <AppRoutes/>
 </StrictMode>,
)
