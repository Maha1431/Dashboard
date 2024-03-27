import { baseurl } from "../Url"

export const getOrders = () => {
  return fetch(`${baseurl}/carts/1`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch orders: ${res.status}`);
      }
      console.log("fetch data:",res);
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching orders:', error);
    });
};

export const getRevenue = () => {
  return fetch(`${baseurl}/carts`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch revenue: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching revenue:', error);
    });
};
export const getInventory = () => {
  return fetch(`${baseurl}/products`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch inventory: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching inventory:', error);
    });
};


export const getCustomers = () => {
  return fetch(`${baseurl}/users`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch customers: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching customers:', error);
    });
};
export const getComments = () => {
  return fetch(`${baseurl}/comments`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch comments: ${res.status}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching comments:', error);
    });
};
