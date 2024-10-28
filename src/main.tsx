import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/main.scss';
import AppRoutes from './Routes/AppRoutes'
 
 

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <AppRoutes/>
 </StrictMode>,
)
