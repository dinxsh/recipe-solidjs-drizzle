import { createAsync, type RouteDefinition } from "@solidjs/router";
import { getUser, logout } from "~/api";

export const route = {
  preload() {
    return getUser(0);
  }
} satisfies RouteDefinition;

export default function Home() {
  return (
    <main class="container mx-auto px-4 py-16">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-6">
          Welcome to SolidJS SaaS Starter
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          A production-ready starter template with PostgreSQL and Drizzle ORM
        </p>
        <div class="space-x-4">
          <a
            href="/dashboard"
            class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="/login"
            class="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300"
          >
            Sign In
          </a>
        </div>
      </div>
    </main>
  );
}
