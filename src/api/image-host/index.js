const request = require("request-promise");

const HOST = "http://localhost:8080";

export async function getImage(imageTail) {
  return await request(`${HOST}/static/images${imageTail}`);
}
export function checkHealth() {
  console.info(`${HOST}/health`)
  const healthUrl = `${HOST}/health`
  let results = []
  let health = request.get({
    headers: {
      'Host': healthUrl,
      'User-Agent': 'PostmanRuntime/7.24.1',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive'
    },
    uri: healthUrl,
    transform: function (body, res) {
      res.data = JSON.parse(body)
      return res
    }
  }).then(function (res) {
    results.push(res.data)
  }).catch(function (err) {
    console.error(err)
    results.push(err)
  });
  console.info(health)
  return results
}
