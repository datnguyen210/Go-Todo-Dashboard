import { Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/404";
import { Inbox } from "./modules/todos/components/inbox";

export const Main = () => {
  return (
    <div className={`relative h-full w-full`}>
      <Routes>
        <Route path="/app" element={<Navigate to="/app/today" replace />} />
        <Route path="/app/inbox" element={<Inbox />} />
        <Route path="/app/today" element={<PageNotFound />} />
        <Route path="/app/upcoming" element={<PageNotFound />} />
        <Route path="/app/filters-lables" element={<PageNotFound />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
