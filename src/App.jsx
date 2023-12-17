import './App.css'
import logo from './assets/logo-white.png'
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
            <div className="page-container">
             <Routes>
                 <Route path= '/' element={<HomePage/>} />
                 <Route path= '/nieuwepost:id' element={<NieuwePost/>}/>
                 <Route path= '/overview' element={<Overzicht/>}/>
                 <Route path= '/errorPage' element={<ErrorPage/>}/>
                 <Route path= '/blog/:blogId' element={<BlogPostDetail/>}/>
             </Routes>

                 <img src={logo} alt="Company logo"/>
                 <h1>Begin hier met het maken van jouw blog-applicatie!</h1>

        </div>
        </>
    )
}

export default App
