import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from './components/Services';
import Transactions from "./components/Transactions";
import Footer from "./components/Footer"
const App = () => (
  <div className="min-h-fit bg-cover ">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div >
    <Services />
    <Transactions />
     <Footer />
  </div>
);

export default App;
