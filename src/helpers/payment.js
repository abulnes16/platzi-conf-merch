function handleSumTotal(cart) {
  return cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
}

export default {
  handleSumTotal,
};
