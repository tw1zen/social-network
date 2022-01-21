import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className='wrapper'>
    <Header />
    <Navbar />
    <Profile />
    </div>
  );
}

export default App;
