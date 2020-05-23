const request = require("request-promise");

const HOST = process.env.PRODUCT_CATALOG;

export async function nextProduct() {
  return await request(`${HOST}/product`);
}
