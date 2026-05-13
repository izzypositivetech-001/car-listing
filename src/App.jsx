import Navbar from "./layouts/Navbar/Navbar"
import MainRoutes from "./routes/MainRoutes"
import ScrollToTop from "./shared/components/ScrollToTop"

const App = () => {
  return (
    <>
       <Navbar/>
       <ScrollToTop />
       <MainRoutes/>
    </>
  )
}

export default App
