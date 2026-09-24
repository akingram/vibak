import { handleServiceRequest } from "../server/serviceRequests.js";

function parseBody(body) {
  if (typeof body !== "string") {
    return body ?? {};
  }

  try {
    return JSON.parse(body);
  } catch {
    return {};
  }
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({
      ok: false,
      message: "Use POST to send a service request.",
    });
    return;
  }

  request.body = parseBody(request.body);
  await handleServiceRequest(request, response);
}
