
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './store'; 

import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
