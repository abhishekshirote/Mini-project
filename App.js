// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Error } from './pages/Error';
import { StudentsList } from './pages/StudentList';
import { StudentEditForm } from './pages/StudentEditForm';
import { Courses } from './pages/Courses';

 

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students-list" element={<StudentsList/>}/>
        <Route path="/edit/:roll" element={<StudentEditForm/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;
