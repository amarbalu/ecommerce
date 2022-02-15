const incrementAction = () => ({
  type: "increment",
});

const decrementAction = () => ({
  type: "decrement",
});

const incrementAsync = () => ({
  type: "increment_async",
});
export { incrementAction, decrementAction, incrementAsync };
