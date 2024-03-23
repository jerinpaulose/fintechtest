// App.tsx
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Test1 from './Test1'; 
import Test2 from './Test2'; 
import Test3 from './Test3'; 
import Test4 from './Test4'; 
import Test5 from './Test5'; 
import TestApi from './TestApi';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <h1>Index Page</h1>
        <nav>
          <ul>
            <li>
              <Link to="/test1">Test 1</Link>
            </li>
            <li>
              <Link to="/test2">Test 2</Link>
            </li>
            <li>
              <Link to="/test3">Test 3 - SaaS Application</Link>
            </li>
            <li>
              <Link to="/test4">Test 3 - GUID Advantages And Drawbacks</Link>
            </li>
            <li>
              <Link to="/test5">Test 3 - Possible Bug</Link>
            </li>
            <li>
              <Link to="/TestApi">Test Api</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/test4" element={<Test4 />} />
          <Route path="/test5" element={<Test5 />} />
          <Route path="/TestApi" element={<TestApi />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
