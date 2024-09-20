import React from 'react';
import Home from './pages/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import AddToCart from './pages/AddToCart';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import Explore from './pages/Explore';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'explore', element: <Explore /> },
      { path: 'contact', element: <Contact /> },
      { path: 'payment', element: <Payment /> }, // Route for Shop
      { path: 'cart', element: <AddToCart /> }, // Route for Cart
      { path: 'login', element: <Login /> }, // Route for Login
    ],
  },
]);


const App = () => {
  // const [count,setCount] = useState(0);


  // useEffect(()=>{
  //   console.log('count change')
  // },[count]);

  // const handleClick = () => {
  //   setCount(count + 1)
  // }

  return (
      <div>
        {/* <button onClick={handleClick}>count</button> */}
       <RouterProvider router={router} />
      </div>
  )
}

export default App