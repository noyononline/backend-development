const http = require("http");

const students = [
  {
    id: 1,
    fastName: "Noyon",
    lstName: "Hossen",
  },
  {
    id: 2,
    fastName: "Afif",
    lastName: "Khan",
  },
];

const sendResponse = (
  res,
  { status = 200, contentType = "application/json", body = {} }
) => {
  res.writeHead(status, { "content-type": contentType });
  res.write(JSON.stringify(body));
  res.end();
};
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    sendResponse(res, {
      body: {
        msg: "Welcome to Backend course",
      },
    });
  } else if (req.url === "/students") {
    sendResponse(res, {
      body: students,
    });
  } else {
    sendResponse(res, { status: 400, body: { msg: "Resoure not found" } });
  }
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
