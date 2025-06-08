import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Tasks from './pages/tasks/tasks'
import Error404 from './pages/error404/error404'
import { createBrowserRouter } from "react-router";




export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
      ),
  },
  {
    path: "signup",
    element: (
      <div>
        <Signup />
      </div>
      ),
  },
    {
    path: "tasks",
    element: (
      <div>
        <Tasks />
      </div>
      ),
  },
    {
    path: "*",
    element: (
      <div>
        <Error404 />
      </div>
      ),
  },

]);