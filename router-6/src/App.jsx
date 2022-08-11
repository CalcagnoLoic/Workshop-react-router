import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Layout from "./components/Layout";
import Singlepage from "./pages/Singlepage";
import Createpost from "./pages/Createpost";
import Editpost from "./pages/Editpost";


function App() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>} />
                  <Route path="/blog" element={<Blog/>} />
                  <Route path="/blog/new" element={<Createpost />} />
                  <Route path="/blog/:id" element={<Singlepage />}/>
                  <Route path="/blog/:id/edit" element={<Editpost />} />
                  <Route path="/about" element={<About/>}/>
                  <Route path="/*" element={<Notfound />} />
              </Route>
          </Routes>
      </div>
  );
}

export default App;
