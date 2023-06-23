import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route,Link, Outlet,Navigate,useParams,useNavigate } from 'react-router-dom';

  export function AppLayout() {

  
    return (
      <>
        <nav style={{ margin: 10 }}>
            <Link to="/homel" style={{ padding: 5 }}>  Home  </Link>

            <Link to="/posts" style={{ padding: 5 }}>  Posts </Link>

            <Link to="/aboutl" style={{ padding: 5 }}> About  </Link>

           

        </nav>

       
      </>
    );
  }
  

