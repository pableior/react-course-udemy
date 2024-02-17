import {Route, Routes } from "react-router-dom"
// import { MarvelPage } from "../heroes/pages/MarvelPage"
import { DCPage, HeroesRoutes, MarvelPage } from "../heroes"
import { LoginPage } from "../auth"
import { Navbar } from "../ui";



export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />}/>
            <Route path="/*" element={<HeroesRoutes to="/marvel"/>} /> 
        </Routes>
    </>
  )
}
