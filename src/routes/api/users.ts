import { APIEvent } from "@solidjs/start/server";
import { db } from "~/api/db";
import { users } from "../../../drizzle/schema";

export async function GET(event: APIEvent) {
  const allUsers = await db.select().from(users);
  
  return new Response(JSON.stringify(allUsers), {
    headers: { "Content-Type": "application/json" }
  });
} 