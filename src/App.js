import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './page/LoginForm';
import Home from './page/Home';
import Main from './page/Main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
