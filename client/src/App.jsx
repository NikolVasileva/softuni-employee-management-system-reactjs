import { useEffect, useState } from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Search from "./components/Search.jsx"
import UserList from "./components/UserList.jsx"
import CreateUserModal from "./components/CreateUserModal.jsx"

function App() {
  const [users, setUsers] = useState([]);
  const [showCreateUser, setShowCreateUser] = useState(false);
  
  const addUserClickHandler = () => {
    setShowCreateUser(true)
  }

  const closeUserModalHandler = () => {
    setShowCreateUser(false)
  }

  const addUserSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const userData = Object.fromEntries(formData)

    console.log(userData)
  }

  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />

          <UserList users={users}/>

          <button onClick={addUserClickHandler} className="btn-add btn">Add new user</button>

          <Pagination />
        </section>

        {showCreateUser && <CreateUserModal 
        onClose={closeUserModalHandler}
        onSubmit={addUserSubmitHandler}
        />}
      </main>

      <Footer />
    </div>
  )
}

export default App
