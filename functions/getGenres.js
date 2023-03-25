exports.handler = async () => {
  console.log("inside the handler");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};
