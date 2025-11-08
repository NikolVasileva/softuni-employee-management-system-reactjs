import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"


function App() {

  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />

          <UserList />

          <button className="btn-add btn">Add new user</button>

          <Pagination />
        </section>

        <UserSaveModal />
      </main>

      <Footer />
    </div>
  )
}

export default App
