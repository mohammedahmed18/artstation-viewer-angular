const cors = require("@fastify/cors");
const sensible = require("@fastify/sensible");
const http = require("./utils/http");

const fastify = require("fastify")();

fastify.register(cors, {
  origin: "http://localhost:4200",
  credentials: true,
});
fastify.register(sensible);

fastify.get("/artworks/:type", (req, res) => {
  const { type } = req.params;
  const { page = 1, per_page = 100 } = req.query;
  return callApi(
    `/community/explore/projects/${type}.json?page=${page}&per_page=${per_page}&dimension=all`
  );
});

fastify.get("/artwork/:hash_id", (req, res) => {
  const { hash_id } = req.params;
  return callApi(`https://www.artstation.com/projects/${hash_id}.json`);
});

fastify.listen(
  {
    port: process.env.PORT || 5000,
  },
  (err) => {
    if (err) return console.log(err.message);
    console.log("server is now running");
  }
);

async function callApi(url, options) {
  const [error, resolved] = await fastify.to(
    http.request({
      url,
      ...options,
    })
  );
  if (error) {
    return fastify.httpErrors.internalServerError(
      "something went wrong ... " + error.message
    );
  }
  return resolved.data;
}
