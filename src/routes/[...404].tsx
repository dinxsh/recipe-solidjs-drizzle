export default function NotFound() {
  return (
    <main class="container mx-auto px-4 py-16 text-center">
      <h1 class="text-4xl font-bold mb-4">404</h1>
      <p class="text-xl text-gray-600 mb-8">Page not found</p>
      <a
        href="/"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Go Home
      </a>
    </main>
  );
}
