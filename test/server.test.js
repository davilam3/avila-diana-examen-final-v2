const test = require("node:test");
const assert = require("node:assert/strict");
const { getHomeResponse } = require("../server");

test("GET / responde correctamente", () => {
  const response = getHomeResponse();

  assert.equal(response.status, 201);
  assert.match(response.body, /Aplicacion lista/);
});
