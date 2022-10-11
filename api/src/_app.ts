import { createServer } from "node:http"
const { stringify } = JSON

const { PORT = 3000 } = process.env

createServer(({ method, url }, res) => {
  res
    .setHeader("content-type", "application/json")
    .setHeader("access-controll-allow-origin", "*")
    .setHeader("access-controll-allow-method", "*")
  try {
    res.end(stringify({}[method + "." + url] || { message: "default message" }))
  } catch (exception) {
    exception instanceof Error
      ? res.end(stringify({ error: exception.message }))
      : res.end(stringify({ error: "Internal Server Error", exception }))
  }
}).listen(PORT)
