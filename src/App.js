import { Routes, Route } from "react-router-dom";
import AddPost from "./components/pages/addPost/addPost";
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import EditPost from "./components/pages/editPost/editPost";
import NotFound from "./components/pages/notFound/notFound";
import Post from "./components/pages/post/post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/add" element={<AddPost />} />
      <Route path="/post/edit/:id" element={<EditPost />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
