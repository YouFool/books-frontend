import { BOOKS } from "../common/apiConstants";
import { get } from "../common/apiService";

export const LIST_BOOKS = async (filter, page, startYear, endYear) => {
  let url = BOOKS + `?search=${filter}&startYear=${startYear}&endYear=${endYear}`;
  if (page) {
    url = url + `&page=${page}`;
  }
  return await get(url);
};
