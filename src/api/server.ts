"use server";
import { eq } from "drizzle-orm";
import { db } from "./db";
import { users, organizations, memberships } from "../../drizzle/schema";

export async function getUserById(id: number) {
  const [user] = await db.select()
    .from(users)
    .where(eq(users.id, id))
    .limit(1);
  return user;
}

export async function getUserOrganizations(userId: number) {
  return db.select()
    .from(memberships)
    .innerJoin(organizations, eq(memberships.organizationId, organizations.id))
    .where(eq(memberships.userId, userId));
}

export async function createOrganization(name: string, userId: number) {
  const [org] = await db.insert(organizations)
    .values({ name })
    .returning();

  await db.insert(memberships)
    .values({ 
      userId, 
      organizationId: org.id,
      role: 'owner' 
    });

  return org;
}
