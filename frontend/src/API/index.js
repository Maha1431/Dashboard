export const getOrders = () => {
  return fetch("https://dashboard-8hzz.onrender.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dashboard-8hzz.onrender.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dashboard-8hzz.onrender.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dashboard-8hzz.onrender.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dashboard-8hzz.onrender.com/comments").then((res) => res.json());
};
