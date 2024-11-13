// API route example with Vinxi
import { APIEvent } from "@solidjs/start/server";

export async function GET(event: APIEvent) {
  return new Response(JSON.stringify({ message: "Hello from Vinxi!" }), {
    headers: { "Content-Type": "application/json" }
  });
} 