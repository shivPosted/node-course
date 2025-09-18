import http from "node:http";
import fs from "node:fs";
import { URL } from "node:url";

const logFileUrl = new URL("./log.txt", import.meta.url).pathname;

fs.rm(
  logFileUrl,
  {
    force: true,
  },
  (err) => {
    console.error(err?.message);
  },
);

const fakeTweets = [
  {
    name: "tweet1",
    likes: 233,
    retweets: 23,
  },
  {
    name: "tweet2",
    likes: 243,
    retweets: 43,
  },
];

function handleGetRequests(path, res) {
  switch (path) {
    case "/":
      return res.end(
        JSON.stringify({
          message: "hello",
        }),
      );
    case "/contact-us":
      return res.end(
        JSON.stringify({
          email: "example@demo.com",
          contact: 2345453434,
        }),
      );
    case "/tweets":
      return res.end(JSON.stringify(fakeTweets));
    default:
      return res.end({
        error: "no path found",
      });
  }
}

function handlePostRequests(path, res) {
  switch (path) {
    case "/tweets":
      return res.end(
        JSON.stringify({
          message: "user created successfully",
          tweets: [...fakeTweets],
        }),
      );
    default:
      return res.end({
        error: "no path found",
      });
  }
}

function appendRequstTimeStampToFile(message) {
  fs.appendFile(logFileUrl, message, "utf8", (err) => {
    if (err) throw err;
    console.log("log.txt updated");
  });
}

const server = http.createServer((req, res) => {
  const path = req.url;
  const method = req.method;

  appendRequstTimeStampToFile(`Got ${method} request at ${Date.now()} \n`);
  switch (method) {
    case "GET":
      res.writeHead(200, {
        "content-type": "text/html",
      });
      return handleGetRequests(path, res);
    case "POST":
      res.writeHead(201, {
        "content-type": "application/json",
      });
      return handlePostRequests(path, res);
  }
});

const PORT = 8001;

server.listen(PORT, () => {
  console.log(`Welcome to node:http server`);
  console.log(`server is listening on port ${PORT}`);
});
