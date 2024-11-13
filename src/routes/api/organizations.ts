import { APIEvent } from "@solidjs/start/server";
import { db } from "~/api/db";
import { organizations } from "../../../drizzle/schema";

export async function GET(event: APIEvent) {
  const orgs = await db.select().from(organizations);
  return new Response(JSON.stringify(orgs), {
    headers: { "Content-Type": "application/json" }
  });
} 