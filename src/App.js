import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSeats from "./components/BookSeats";
import BrowseMovies from "./components/BrowseMovies";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import Success from "./components/Success";
import "./css/reset.css"

export default function App () {
    const [filmInfo, setFilmInfo] = useState()
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<BrowseMovies/>}></Route>
                <Route path="/sessoes/:idFilm" element={<Schedule />} />
                <Route 
                    path="/assentos/:idSession" 
                    element={<BookSeats filmInfo={filmInfo} setFilmInfo={setFilmInfo} />} 
                />
                <Route path="/sucesso" element={<Success filmInfo={filmInfo} />} />
            </Routes>
        </BrowserRouter>
    )
}
