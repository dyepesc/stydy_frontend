import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BookList.css';

const ShowBook = () => {
  const { id } = useParams(); // Get the book ID from the URL parameters
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details from the backend API
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://study-backend-jf8w.onrender.com/books/${id}`);
        // const response = await axios.get(`http://localhost:5000/book/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching the book data:', error);
      }
    };

    fetchBook();
  }, [id]);

  // Display a loading message or error if book is not found
  if (!book) return <div>Loading...</div>;

  return (
    <div className="ShowBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <a className="btn btn-info float-left" href="/">Show Book List</a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">{book.title}</h1>
            <p className="lead text-center">Author: {book.author}</p>
            <p className="text-center">Description: {book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
