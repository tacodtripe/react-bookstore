/* eslint-disable react/jsx-props-no-spreading, no-console, no-unused-vars */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { v4 as bookId } from 'uuid';
import { addBook } from '../redux/books/books';
import './addBookForm.css';

export default function AddBookForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = () => {
    const newBook = {
      id: bookId(),
      title,
      category,
    };
    dispatch(addBook(newBook));
  };

  return (
    <form className="col-11 row justify-content-center justify-content-md-between" onSubmit={handleSubmit(onSubmit)}>
      <p className="col-12">ADD A NEW BOOK</p>
      <input className="col-10 col-md-4 my-1" placeholder="Book Title" {...register('title', { required: true })} onChange={handleTitleChange} />
      <input className="col-10 col-md-4 my-1" placeholder="Category" {...register('category', { required: true })} onChange={handleCategoryChange} />
      <input className="col-4 col-md-2 my-1 submitButton" type="submit" value="ADD BOOK" />
      {errors.title && <span className="col-10 col-md-4 text-center">Title is required</span>}
      {errors.category && <span className="col-10 col-md-4 text-center">Category is required</span>}
      {errors.category && <span className="d-none d-md-block col-md-1 " />}
    </form>
  );
}
