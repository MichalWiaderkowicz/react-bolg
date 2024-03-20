import { Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import Footer from "./components/views/Footer/Footer";
import { Header } from "./components/views/Header/Header";
import Post from "./components/Features/Post/Post";
import Home from "./components/pages/home/home";
import AddPost from "./components/pages/addPost/addPost";
import EditPost from "./components/pages/editPost/editPost";
import About from "./components/pages/about/about";
import NotFound from "./components/pages/notFound/notFound";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
