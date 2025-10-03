import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AxiosError } from "axios";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ReactQueryProvider } from "./reactQueryProvider";
import "./index.css";
// // Generated Routes
import { routeTree } from "./routeTree.gen";
import { AuthProvider } from "./context/AuthContext";
import { queryClient } from "./reactQueryProvider/queryClient";

// Create a new router instance
const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ReactQueryProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ReactQueryProvider>
    </StrictMode>
  );
}
