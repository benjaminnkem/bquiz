// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import "./index.css";
// import ErrorPage from "./ErrorPage.jsx";
import QuizPage from "./pages/quiz/QuizPage.tsx";
import GlobalQuizProvider from "./contexts/GlobalQuizProvider.tsx";
import QuizErrPage from "./pages/quiz/components/QuizError.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="wrapper bg-slate-900">
        <Home />
      </div>
    ),
    // errorElement: <ErrorPage />,
  },
  {
    path: "quiz/:quizId",
    element: (
      <GlobalQuizProvider>
        <QuizPage />
      </GlobalQuizProvider>
    ),
    // errorElement: <QuizErrPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
