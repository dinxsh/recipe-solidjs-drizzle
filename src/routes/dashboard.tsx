import { createAsync } from "@solidjs/router";
import { getUserOrganizations } from "~/api/server";
import { Show } from "solid-js";

export default function Dashboard() {
  const orgs = createAsync(() => getUserOrganizations(1));

  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-semibold mb-4">Your Organizations</h2>
          <Show when={orgs()} fallback={<p>Loading...</p>}>
            <ul class="space-y-2">
              {orgs()?.map(org => (
                <li class="flex items-center justify-between">
                  <span>{org.organizations.name}</span>
                  <span class="text-sm text-gray-500">{org.memberships.role}</span>
                </li>
              ))}
            </ul>
          </Show>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-semibold mb-4">Quick Actions</h2>
          <div class="space-y-2">
            <button class="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              New Organization
            </button>
            <button class="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
              Invite Members
            </button>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-semibold mb-4">Recent Activity</h2>
          <p class="text-gray-600">No recent activity</p>
        </div>
      </div>
    </div>
  );
} 