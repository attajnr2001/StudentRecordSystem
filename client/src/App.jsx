import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Index from "./pages/Index";
import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import AdminDashboard from "./pages/admin/Overview";
import TeacherDashboard from "./pages/teacher/Overview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Index />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherDashboard />} />
      </Route>
    </>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
