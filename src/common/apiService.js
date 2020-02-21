const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const get = async url => {
  const result = await fetch(url, {
    method: "GET",
    headers: HEADERS
  });
  return result.json();
};

export const post = async (url, body) => {
  const result = await fetch(url, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(body)
  });
  return result.json();
};

export const remove = async url => {
  await fetch(url, {
    method: "DELETE",
    headers: HEADERS
  });
};
