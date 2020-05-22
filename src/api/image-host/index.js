const request = require("request-promise");

const HOST = "http://localhost:8080";

export function getImageUrl(imageTail) {
  return `${HOST}/statics/images${imageTail}`
}

export async function getImage(imageTail) {
  const imgUrl = getImageUrl(imageTail)
  return request.get({
    headers: {
      'Host': imgUrl,
      'User-Agent': 'PostmanRuntime/7.24.1',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive'
    },
    uri: imgUrl,
  })
}
export async function checkHealth() {
  console.info(`${HOST}/health`)
  const healthUrl = `${HOST}/health`
  return request.get({
    headers: {
      'Host': healthUrl,
      'User-Agent': 'PostmanRuntime/7.24.1',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive'
    },
    uri: healthUrl,
  })
}
