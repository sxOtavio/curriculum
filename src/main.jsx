import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Curriculo from './pages/Curriculo.jsx';
import Projects from './pages/Projetos.jsx';


const router=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    
  },
  {
    path:"/curriculum",
    element: <Curriculo/>,
    
  },
   {
    path:"/projects",
    element: <Projects/>,
    
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
   
  </StrictMode>,
);