import { Children, useState } from 'react'
import Nav from './component/Nav'
import Home from './component/home'
import Signin from './component/Signin'
import Signup from './component/Signup'
import Profile from './component/profile'
// import ImageUpload from './component/ImageUpload'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        index: true, // this makes it the default child for '/'
        element: <Home />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'signin',
        element: <Signin />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'imageupload',
        element: <ImageUpload />
      },
      {
        path: 'view',
        element: <ViewImages />
      }
    ]
  }
])
import { createContext } from 'react'
import ImageUpload from './component/ImageUpload'
import ViewImages from './component/ViewImage'

let Usercontext = createContext();
function App() {
  let [userdata, setUserdata] = useState("")

  return (
    <>
      <Usercontext.Provider value={[userdata, setUserdata]}>
        <RouterProvider router={router} />
      </Usercontext.Provider >
    </>)
}
export default App

export { Usercontext }