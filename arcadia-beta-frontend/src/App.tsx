<<<<<<< HEAD
import Header from "./components/Header"
import VideosCards from "./components/VideosCards/indesx"
=======
import VideosCardComponent from "./components/VideosCardComponent"
import HeaderComponent from "./components/HeaderComponent"
>>>>>>> de29836c8b94733957a90ac4acddf5a81a3b6d8d


function App() {
  return (
    <>
<<<<<<< HEAD
      <Header />
      <main>
        <section id="section-videos">
          <div className="videos-container">
            <VideosCards />
          </div>
        </section>
      </main>
=======
    <HeaderComponent />
    <main>
        <section id="section-videos">
            <div className="videos-container">
              <VideosCardComponent />
            </div>
        </section>
    </main>
>>>>>>> de29836c8b94733957a90ac4acddf5a81a3b6d8d
    </>
  )
}

export default App
