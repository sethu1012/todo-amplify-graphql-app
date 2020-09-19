import { apiAddTodo, apiListTodos } from '@services/todo.service';
import React, { useEffect } from 'react';
import randomWords from 'random-words';

function IndexPage() {
  useEffect(() => {
    console.log('[index.tsx] Console ' + randomWords());

    apiListTodos().then((data) => console.log(data));
  }, []);

  const addTodo = async () => {
    const randomString = randomWords();

    const data = await apiAddTodo({
      name: randomString,
      description: randomString,
    });

    console.log(data);
  };

  return (
    <h1>
      Index Page <button onClick={addTodo}>Add</button>
    </h1>
  );
}

export default IndexPage;
