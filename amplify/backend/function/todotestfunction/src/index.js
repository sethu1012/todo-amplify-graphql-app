exports.handler = async (event) => {
  // TODO implement
  const response = {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
