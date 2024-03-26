import {baseurl} from "../Url"

export const getOrders = () => {
  return fetch(`${baseurl}/carts/1`).then((res) => res.json());
};

export const getRevenue = () => {
  return fetch(`${baseurl}/carts`).then((res) => res.json());
};

export const getInventory = () => {
  return fetch(`${baseurl}/products`).then((res) => res.json());
};

export const getCustomers = () => {
  return fetch(`${baseurl}/users`).then((res) => res.json());
};
export const getComments = () => {
  return fetch(`${baseurl}/comments`).then((res) => res.json());
};
