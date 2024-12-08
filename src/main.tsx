import React from "react";
import ReactDOM from "react-dom/client";

/* --- libs --- */
import { RouterProvider } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

/* --- routes --- */
import { routes } from "@routes/router";

/* --- global styles --- */
import '@styles/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import '@theme-toggles/react/css/Expand.css'

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("America/Sao_Paulo");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");

// Use contextBridge
