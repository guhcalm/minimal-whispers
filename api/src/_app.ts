import { createServer as api, type ServerResponse, type IncomingMessage } from "node:http"
const { stringify, parse } = JSON

type CustomRequest = IncomingMessage & { cookies?: Record<string, string>; body?: Record<string, any> }
type CustomController = (req: CustomRequest) => Promise<Record<string, any>>

const cors = (res: ServerResponse) =>
  res
    .setHeader("x-powered-by", "me")
    .setHeader("content-type", "application/json")
    .setHeader("access-control-allow-origin", "*")
    .setHeader("access-control-allow-method", "*")

const cookies = (req: CustomRequest) => {
  req.cookies = req.headers.cookie
    ?.split("; ")
    .map(item => item.split("="))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
}

const body = (req: CustomRequest, buffer: any[] & readonly Uint8Array[] = []) =>
  (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") &&
  new Promise(resolve =>
    req
      .on("data", chunk => buffer.push(chunk))
      .on("end", () => resolve((req.body = parse(Buffer.concat(buffer).toString()))))
  )

const controllers: Record<string, CustomController> = {
  "get:/": async req => ({ message: "hello from home" }),
  "post:/": async req => ({ message: "hello from post" })
}

const { PORT = 3000 } = process.env

api(async (req, res) => {
  try {
    cors(res)
    cookies(req)
    await body(req)
    const data = await controllers[(req.method + ":" + req.url).toLowerCase()](req as CustomRequest)
    res.writeHead(200).end(stringify(data || { message: "default message" }))
  } catch (exception) {
    exception instanceof Error
      ? res.writeHead(400).end(stringify({ error: exception.message }))
      : res.writeHead(500).end(stringify({ error: "Internal Server Error", exception }))
  }
}).listen(PORT)

fetch("http://localhost:3000", {
  method: "POST",
  body: JSON.stringify({ message: "hello from peer" }),
  headers: { "content-type": "application/json" }
})
