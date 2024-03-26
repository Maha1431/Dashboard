export const getOrders = () => {
  return fetch("http://localhost:5000/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("http://localhost:5000/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("http://localhost:5000/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("http://localhost:5000/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("http://localhost:5000/comments").then((res) => res.json());
};
