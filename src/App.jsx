import PostsList from "./pages/PostsList";
import AddPostForm from "./pages/AddPostForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SinglePostPage from "./pages/SinglePostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />

          <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
