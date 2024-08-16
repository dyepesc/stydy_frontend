import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookList.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      description,
    };

    axios
      // .post('http://localhost:5000/book/add', newBook)
      .post('https://study-backend-jf8w.onrender.com/book/add', newBook)
      .then((res) => {
        console.log(res.data);
        navigate('/'); // Redirect to the book list page after successful submission
      })
      .catch((err) => {
        console.error('There was an error adding the book!', err);
      });
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <a className="btn btn-info float-left" href="/">Show Book List</a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form onSubmit={onSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" value="Add Book" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
