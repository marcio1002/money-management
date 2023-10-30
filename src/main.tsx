import React from "react";
import ReactDOM from "react-dom/client";

/* --- libs --- */
import { RouterProvider } from "react-router-dom";

import { routes } from "@routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
