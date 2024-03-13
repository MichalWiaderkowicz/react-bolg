import { Routes, Route } from "react-router-dom";
import AddPost from "./components/pages/AddPost/AddPost";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import EditPost from "./components/pages/EditPost/EditPost";
import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from "react-bootstrap";
import Footer from "./components/views/Footer/Footer";
import { Header } from "./components/views/Header/Header";
import Post from "./components/Features/Post/Post";

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
