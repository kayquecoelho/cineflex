import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseMovies from "./components/BrowseMovies";
import Header from "./components/Header";
import "./css/reset.css"

export default function App () {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<BrowseMovies/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}