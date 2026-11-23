import test from "node:test";
import assert from "node:assert/strict";
import { adminStatus } from "../admin-panel.js";

test("admin access remains disabled by default", () => {
  const status = adminStatus();
  assert.equal(status.mode, "LOCKED");
  assert.equal(status.access, "NONE");
  assert.equal(status.authenticated, false);
  assert.equal(status.reason, "AUTHENTICATION_NOT_IMPLEMENTED");
});
