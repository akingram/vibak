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
    propertySize: "Medium property",
    currentCondition: "Standard clean",
    priorityAreas: "Kitchen, bathroom, and hallway",
  });

  assert.equal(result.ok, true);
  assert.deepEqual(result.missing, []);
  assert.equal(result.request.name, "Ada Client");
  assert.equal(result.request.propertySize, "Medium property");
  assert.equal(result.request.currentCondition, "Standard clean");
  assert.equal(result.request.priorityAreas, "Kitchen, bathroom, and hallway");
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
