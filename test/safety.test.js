import test from "node:test";
import assert from "node:assert/strict";
import { adminStatus } from "../admin-panel.js";
test("admin panel never grants access from a local core mode", () => {
  const result = adminStatus();
  assert.equal(result.access, "NONE");
  assert.equal(result.authenticated, false);
  assert.equal(result.mode, "LOCKED");
});
