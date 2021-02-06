import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
