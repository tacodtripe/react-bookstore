/* eslint-disable react/jsx-props-no-spreading, no-console */
import React from 'react';
import { useForm } from 'react-hook-form';
import './addBookForm.css';

export default function AddBookForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form className="col-11 row justify-content-center justify-content-md-between" onSubmit={handleSubmit(onSubmit)}>
      <p className="col-12">ADD A NEW BOOK</p>
      <input className="col-10 col-md-4 my-1" placeholder="Book Title" {...register('title', { required: true })} />
      <input className="col-10 col-md-4 my-1" placeholder="Category" {...register('category', { required: true })} />
      <input className="col-4 col-md-2 my-1 submitButton" type="submit" value="ADD BOOK" />
      {errors.title && <span className="col-10 col-md-4 text-center">Title is required</span>}
      {errors.category && <span className="col-10 col-md-4 text-center">Category is required</span>}
      {errors.category && <span className="d-none d-md-block col-md-1 " />}
    </form>
  );
}
