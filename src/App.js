import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link, Outlet,Navigate,useParams,useNavigate } from 'react-router-dom';

import Home from './freecodecamp/homefc';
import About from './freecodecamp/aboutfc';
import Contact from './freecodecamp/contactfc';
import Nav from './freecodecamp2/Nav';
import Home2 from './freecodecamp2/Home2';
import About2 from './freecodecamp2/About2'
import Contact2 from './freecodecamp2/Contact2'
import Home3 from './webDevSimplified/Home3'
import Nav2 from './webDevSimplified/Nav2'
import BookList from './webDevSimplified/BookList';
import { Book } from './webDevSimplified/Book';
import NewBook from './webDevSimplified/NewBook';
import { NotFound } from './webDevSimplified/NotFound'
import { BooksLayout } from './webDevSimplified/BooksLayout';
import HomeL from './logrocket/HomeL'
import AboutL from './logrocket/AboutL';
import { Post, PostLists, Posts } from './logrocket/BlogPosts';
import  { AppLayout,} from './logrocket/NavL';


function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate("/");
  }


  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div>
        <Nav />
        <Routes>
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/contact2" element={<Contact2 />} />
        </Routes>
      </div>

      <div>
        <Nav2 />
        <Routes>
          <Route path="/home3" element={<Home3 />} />

          <Route path="/books" element={<BooksLayout />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>


          {/** <Route path='*' element={<NotFound />} />*/}
        </Routes>
      </div>


      <div>
        
      
        <Routes>
          <Route path="/homel" element={<HomeL />} />
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>
          <Route path="/aboutl" element={<AboutL />} />

          <Route path="/login" element={<Login onLogin={setUser}/>} />
          <Route path="/stats" element={<ProtectedRoute user={user}><Stats user={user}/></ProtectedRoute>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>




      <>
        <nav style={{ margin: 10 }}>
            <Link to="/homel" style={{ padding: 5 }}>  Home  </Link>

            <Link to="/posts" style={{ padding: 5 }}>  Posts </Link>

            <Link to="/aboutl" style={{ padding: 5 }}> About  </Link>

            <span> | </span>
            { user && <Link to="/stats" style={{ padding: 5 }}> Stats </Link> }

            { !user && <Link to="/login" style={{ padding: 5 }}>  Login </Link>  }

            { user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer' }}>Logout </span> }

        </nav>

       
      </>
    </div>
  );
}


function NoMatch() {
  return (
    <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

 function Stats({ user }) {
  const navigate = useNavigate();

  if(!user) {
    return (
      <Navigate to="/login" replace/>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Stats View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

  function ProtectedRoute({ user, children }) {
  const navigate = useNavigate();

  if(!user) {
    return (
      <Navigate to="/login" replace/>
    );
  }

  return children;
}

  function Login({ onLogin }) {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    // For demonstration purposes only. Never use these checks in production!
    // Use a proper authentication implementation
    if(creds.username === 'admin' && creds.password === '123') {
      onLogin && onLogin({username: creds.username});
      navigate('/stats');
    }
  }
  
  return (
    <div style={{ padding: 10 }}>
      <br/>
      <span>Username:</span><br/>
      <input
        type="text"
        onChange={(e) => setCreds({...creds, username: e.target.value})}/><br/>
      <span>Password:</span><br/>

      <input
        type="password"
        onChange={(e) => setCreds({...creds, password: e.target.value})}/><br/><br/>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}


export default App;
