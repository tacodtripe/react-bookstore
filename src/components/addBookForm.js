/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddBookForm() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Book Title" {...register('title', { required: true })} />
      {errors.title && <span>This field is required</span>}
      <input placeholder="Book Author" {...register('author', { required: true })} />
      {errors.author && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
