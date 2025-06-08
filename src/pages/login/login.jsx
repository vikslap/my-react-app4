import { Link } from "react-router"
export default function Login () {
  return (
  <>
    <h1>Login Page</h1>
    <ul>
      <li>
        <Link to = "tasks">Tasks</Link>
      </li>
      <li>
        <Link to = "signup">Signup</Link>
      </li>      
    </ul>
  </> 
  )
}