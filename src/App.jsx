import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import Home from './pages/Home';
import Grade1 from './pages/Grade1';
import Grade2 from './pages/Grade2';
import Grade3 from './pages/Grade3';
import Grade4 from './pages/Grade4';
import Grade5 from './pages/Grade5';

function App() {
  return (
    <Router>
      <Container className="py-4">
        <h1 className="text-center mb-4">Pravoslavni kviz</h1>

        <div className="d-flex justify-content-center mb-4">
          <ButtonGroup>
            <Link to="/grade1"><Button variant="dark">1. razred</Button></Link>
            <Link to="/grade2"><Button variant="dark">2. razred</Button></Link>
            <Link to="/grade3"><Button variant="dark">3. razred</Button></Link>
            <Link to="/grade4"><Button variant="dark">4. razred</Button></Link>
            <Link to="/grade5"><Button variant="dark">5. razred</Button></Link>
          </ButtonGroup>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grade1" element={<Grade1 />} />
          <Route path="/grade2" element={<Grade2 />} />
          <Route path="/grade3" element={<Grade3 />} />
          <Route path="/grade4" element={<Grade4 />} />
          <Route path="/grade5" element={<Grade5 />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

