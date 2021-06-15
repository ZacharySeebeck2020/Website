import './App.css';
import Experiences from './components/Experiences';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Hero from './components/Hero';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      {/* <Hero/> */}
      <Profile/>
      <Experiences/>
      {/* <Portfolio/> */}
      <Contact/>
    </div>
  );
}

export default App;
