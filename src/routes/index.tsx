export default function Home() {
  return (
    <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <title>Zerops - SolidJS + Drizzle + PostgresSQL Starter Recipe</title>
      
      <div class="container mx-auto px-4 py-16">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold text-gray-900 mb-4">
            SolidJS + Drizzle + PostgreSQL Starter Recipe
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            A minimal starter template for building modern full-stack applications
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 class="text-xl font-semibold mb-4 text-blue-600">Modern Stack</h2>
            <ul class="space-y-2 text-gray-600">
              <li>• Latest SolidJS with SolidStart</li>
              <li>• Drizzle ORM for type-safe queries</li>
              <li>• PostgreSQL database</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 class="text-xl font-semibold mb-4 text-blue-600">Features</h2>
            <ul class="space-y-2 text-gray-600">
              <li>• Server-side rendering (SSR)</li>
              <li>• Database migrations</li>
              <li>• Type-safe APIs</li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 class="text-xl font-semibold mb-4 text-blue-600">Development</h2>
            <ul class="space-y-2 text-gray-600">
              <li>• Hot module replacement</li>
              <li>• TypeScript support</li>
              <li>• Tailwind CSS styling</li>
            </ul>
          </div>
        </div>

        <div class="mt-16 text-center">
          <div class="space-x-4">
            <a
              href="/dashboard"
              class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Demo
            </a>
            <a
              href="https://github.com/your-repo/solid-drizzle-starter"
              class="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              GitHub
            </a>
          </div>

          <div class="mt-16 pt-8 border-t border-gray-200">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <div class="bg-gray-900 text-gray-100 p-4 rounded-lg max-w-2xl mx-auto text-left">
              <pre class="overflow-x-auto">
                <code>{`npm install
# Configure DATABASE_URL in .env
npm run db:generate
npm run db:migrate
npm run dev`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
