import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidJS SaaS Starter</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <nav class="bg-gray-800 text-white p-4">
              <div class="container mx-auto flex justify-between items-center">
                <a href="/" class="text-xl font-bold">SolidJS SaaS</a>
                <div class="space-x-4">
                  <a href="/dashboard" class="hover:text-gray-300">Dashboard</a>
                  <a href="/login" class="hover:text-gray-300">Login</a>
                </div>
              </div>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
} 