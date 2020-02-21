import { BOOKS } from "../common/apiConstants";
import { get } from "../common/apiService";

export const LIST_BOOKS = async (filter, page) => {
  let url = BOOKS + `?search=${filter}`;
  if (page) {
    url = url + `&page=${page}`;
  }
  return await get(url);
};
