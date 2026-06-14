import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminNewRecipe from "./pages/AdminNewRecipe.jsx";
import AdminRecipeList from "./pages/AdminRecipeList.jsx";
import ExternalRecipe from "./pages/ExternalRecipe.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/receitas" element={<Recipes />} />
        <Route path="/receita/:id" element={<RecipeDetails />} />
        <Route path="/sugestao" element={<ExternalRecipe />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="nova" element={<AdminNewRecipe />} />
          <Route path="lista" element={<AdminRecipeList />} />
        </Route>
      </Route>

      <Route path="/inicio" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}