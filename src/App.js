import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Contact/Login/Login";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Post from "./Components/Post/Post";
import Posts from "./Components/Posts/Posts";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />}>
                    <Route path=":postID" element={<Post />}></Route>
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
