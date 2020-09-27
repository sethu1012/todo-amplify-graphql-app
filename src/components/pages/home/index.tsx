import { apiDeleteTodo, apiListTodos } from '@services/todo.service';
import React, { useEffect, useState } from 'react';
import AddTodoForm from './form';

function HomePageComponent() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('[index.tsx] Console');
    apiListTodos().then(({ status, data }) => {
      if (status) {
        setTodos(data);
      }
    });
  }, []);

  const deleteTodo = async (id) => {
    const payload = { id };
    const { status } = await apiDeleteTodo(payload);
    if (status) {
      const updatedTodos = todos.filter((todo) => {
        return todo?.id !== id;
      });

      setTodos(updatedTodos);
    }
  };

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-4xl">TODOs</h2>
      <AddTodoForm />
      <div className="">
        {todos.map((todo) => (
          <div
            className="flex justify-between mb-4 items-center border border-gray-300 rounded-lg p-4"
            key={todo?.id}
          >
            <div>
              <div className="flex text-black-500 text-xl">{todo?.name}</div>
              <div className="flex text-gray-500 text-lg">
                {todo?.description}
              </div>
            </div>
            <div className="btn-group">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteTodo(todo?.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePageComponent;
