import './App.css'

import Navigation from "./componenten/navigation/Navigation.jsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./componenten/home/HomePage.jsx";
import NieuwePost from "./componenten/newpost/NieuwePost.jsx";
import Overzicht from "./componenten/overview/Overzicht.jsx";
import ErrorPage from "./componenten/error/ErrorPage.jsx";
import BlogPostDetail from "./componenten/postdetail/BlogPostDetail.jsx";


function App() {
    return (
        <>
            <Navigation/>
        <main>
             <Routes>
                 <Route path= '/' element={<HomePage/>} />
                 <Route path= '/new' element={<NieuwePost/>}/>
                 <Route path= '/posts' element={<Overzicht/>}/>
                 <Route path= '/errorPage' element={<ErrorPage/>}/>
                 <Route path= '/posts/:id' element={<BlogPostDetail/>}/>
             </Routes>
        </main>

            <footer className="footer-navigation outer-content-container">
                Blogventure &copy; 2023 - ontwikkeld voor NOVI Hogeschool
            </footer>


        </>
    )
}

export default App
