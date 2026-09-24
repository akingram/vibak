import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

const requestFile = path.resolve("data/service-requests.json");
const requiredFields = ["name", "service", "location", "propertyType"];

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateServiceRequest(body) {
  const request = {
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    service: clean(body.service),
    location: clean(body.location),
    propertyType: clean(body.propertyType),
    frequency: clean(body.frequency),
    preferredDate: clean(body.preferredDate),
    address: clean(body.address),
    roomCount: clean(body.roomCount),
    bathroomCount: clean(body.bathroomCount),
    propertySize: clean(body.propertySize),
    currentCondition: clean(body.currentCondition),
    accessMethod: clean(body.accessMethod),
    supplies: clean(body.supplies),
    parkingAccess: clean(body.parkingAccess),
    priorityAreas: clean(body.priorityAreas),
    screeningNotes: clean(body.screeningNotes),
    details: clean(body.details),
  };

  const missing = requiredFields.filter((field) => !request[field]);

  if (!request.email && !request.phone) {
    missing.push("email or phone");
  }

  return {
    ok: missing.length === 0,
    missing,
    request,
  };
}

async function readRequests() {
  try {
    return JSON.parse(await readFile(requestFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export async function saveServiceRequest(body) {
  const validation = validateServiceRequest(body);

  if (!validation.ok) {
    const error = new Error(`Missing required fields: ${validation.missing.join(", ")}`);
    error.statusCode = 400;
    error.missing = validation.missing;
    throw error;
  }

  const now = new Date();
  const entry = {
    id: randomUUID(),
    reference: `VIB-${now.getFullYear()}-${String(now.getTime()).slice(-6)}`,
    createdAt: now.toISOString(),
    status: "new",
    ...validation.request,
  };

  await mkdir(path.dirname(requestFile), { recursive: true });
  const requests = await readRequests();
  requests.unshift(entry);
  await writeFile(requestFile, `${JSON.stringify(requests, null, 2)}\n`, "utf8");

  return entry;
}

export async function handleServiceRequest(request, response) {
  try {
    const entry = await saveServiceRequest(request.body ?? {});

    response.status(201).json({
      ok: true,
      reference: entry.reference,
      message: "Your request has been received. Vibak will follow up shortly.",
    });
  } catch (error) {
    const status = error.statusCode ?? 500;

    response.status(status).json({
      ok: false,
      message:
        status === 400
          ? error.message
          : "We could not save your request right now. Please try again.",
      missing: error.missing ?? [],
    });
  }
}
