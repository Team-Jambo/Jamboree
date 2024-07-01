import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/AboutUs';
import Landing from './pages/Landing';


const router = createBrowserRouter([
  { path: '/', element: <Landing />},
  { path: '/about', element: <About /> },

]);

function App() {
  return (

    <RouterProvider router={router} />

  )
}

export default App
