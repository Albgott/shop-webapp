import { Navigate, Route, Routes } from "react-router"
import AuthRoutes from "../auth/routes/AuthRoutes"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />}/>
      <Route path="*" element={<h1>THis is the shopping app</h1>}/>
    </Routes>
  )
}

export default AppRouter