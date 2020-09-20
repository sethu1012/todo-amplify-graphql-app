import { API, graphqlOperation } from 'aws-amplify';

// export const apiTodoTest = async () => {
//   try {
//     const data = await API.get('todolamdaapi', '/', { body: {} });
//     return { status: true, data };
//   } catch (e) {
//     return { status: false, message: e };
//   }
// };

export const apiListTodos = async () => {
  try {
    const query = `
    query Todos {
        listTodos {
          items {
            id
            name
            description
            isDone
          }
        }
      }`;
    const data = await API.graphql(graphqlOperation(query));

    return { status: true, data: data?.data?.listTodos?.items };
  } catch (e) {
    return { status: false, message: e };
  }
};

export const apiAddTodo = async (payload) => {
  try {
    const query = `
    mutation Todos($name: String!, $description: String) {
        createTodo(input: {
            name: $name,
            description: $description,
            isDone:false
        }) {
            id
            name
            description
            isDone
        }
    }`;
    const data = await API.graphql(graphqlOperation(query, payload));
    return { status: true, data };
  } catch (e) {
    return { status: false, message: e };
  }
};

export const apiDeleteTodo = async (payload) => {
  try {
    const query = `
    mutation Todos($id:ID!) {
      deleteTodo(input: {id: $id}) {
        id
      }
    }`;
    const data = await API.graphql(graphqlOperation(query, payload));
    return { status: true, data };
  } catch (e) {
    return { status: false, message: e };
  }
};
