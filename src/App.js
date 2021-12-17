import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSeats from "./components/BookSeats";
import BrowseMovies from "./components/BrowseMovies";
import Header from "./components/Header";
import Schedule from "./components/Schedule";
import Success from "./components/Success";

import "./css/reset.css"

export default function App () {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<BrowseMovies/>}></Route>
                <Route path="/sessoes/:idFilm" element={<Schedule />} />
                <Route path="/assentos/:idSession" element={<BookSeats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}
