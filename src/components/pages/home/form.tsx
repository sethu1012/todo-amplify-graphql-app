import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { apiAddTodo } from '@services/todo.service';

function AddTodoForm() {
  const { register, handleSubmit, errors } = useForm();

  const addTodo = async (values) => {
    const { status, data } = await apiAddTodo(values);
    if (status) {
      console.log(data);
    }
  };

  return (
    <form className="flex py-2" onSubmit={handleSubmit(addTodo)}>
      <input
        className="shadow appearance-none border rounded w-2/5 py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Todo"
        name="name"
        ref={register}
      />
      <input
        className="shadow appearance-none border rounded w-2/5 py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Description"
        name="description"
        ref={register}
      />
      <button
        className="bg-teal-500 hover:bg-teal-700 text-white w-1/5 py-2 px-3 mr-2 font-bold rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;
