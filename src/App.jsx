import UserProfile from "./components/userprofile/userprofile"


const user = {
  firstName: "Sam",
  lastName: "Singh",
  skills: "React JS"
}

const user2 = {
  firstName: "Samantha",
  lastName: "Ruth",
  skills: "Node JS"
}







function App() {

  return (
    <>
      <UserProfile firstName={user.firstName} lastName={user.lastName} skills={user.skills} />
      <UserProfile firstName={user2.firstName} skills={user2.skills}/>
      <h1>Hello world</h1>
    </>
  )
}

export default App
