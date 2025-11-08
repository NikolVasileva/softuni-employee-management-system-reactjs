import { useEffect, useState } from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Search from "./components/Search.jsx"
import UserList from "./components/UserList.jsx"
import CreateUserModal from "./components/CreateUserModal.jsx"

function App() {
  const [users, setUsers] = useState([]);
  const [showCreateUser, setCreateUser] = useState(false);
  
  const addUserClickHandler = () => {
    setCreateUser(true)
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
        {showCreateUser && <CreateUserModal />}
      </main>

      <Footer />
    </div>
  )
}

export default App
