import assert from "node:assert/strict";
import test from "node:test";
import { validateServiceRequest } from "../server/serviceRequests.js";

test("validates a complete service request", () => {
  const result = validateServiceRequest({
    name: "Ada Client",
    email: "ada@example.com",
    service: "Domestic Cleaning",
    location: "Crewe",
    propertyType: "Home",
    frequency: "Weekly",
  });

  assert.equal(result.ok, true);
  assert.deepEqual(result.missing, []);
  assert.equal(result.request.name, "Ada Client");
});

test("requires contact details and core service information", () => {
  const result = validateServiceRequest({
    name: "Ada Client",
    service: "",
    location: "Crewe",
    propertyType: "",
  });

  assert.equal(result.ok, false);
  assert.ok(result.missing.includes("service"));
  assert.ok(result.missing.includes("propertyType"));
  assert.ok(result.missing.includes("email or phone"));
});
