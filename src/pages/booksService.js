import { BOOKS } from "../common/apiConstants";
import { get } from "../common/apiService";

export const LIST_BOOKS = async (filter, page) => {
  let url = BOOKS;
  if (page) {
    url = url + `?page=${page}`;
  }
  if (filter) {
    url = url + `?search=${filter}`;
  }
  return await get(url);
};
