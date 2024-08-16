import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './components/Test';
import Login from './components/Login';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import ShowBook from './components/ShowBook';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
      
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/create-book" element={<AddBook />} />
        <Route path="/show-book/:id" element={<ShowBook />} /> {/* Updated Route for ShowBook */}
      </Routes>
    </div>
  </Router>
      
    // <Test />
    // <BookList />
  )
}

export default App
