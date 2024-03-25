import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Route } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout/>}>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
