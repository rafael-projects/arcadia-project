
import Header from "./components/Header"

import VideosCardComponent from "./components/VideosCardComponent"




function App() {
  return (
    <>
      <Header />
      <main>
        <section id="section-videos">
          <div className="videos-container">
            <VideosCardComponent />
          </div>
        </section>
      </main>
  
    </>
  )
}

export default App
