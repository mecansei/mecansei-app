const request = require("request-promise");

const HOST = "http://localhost:8081";

export async function nextProduct() {
  return await request(`${HOST}/product`);
}
