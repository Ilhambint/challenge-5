import { Routes, Route, Link } from 'react-router-dom'
import Layout from './Layouts/Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/login';
import Car from './Pages/Car/Car';

function App() {
  return (
    <>
    <div className="wrapper">
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Layout>
        </div>
    </>
  );
}

export default App;
