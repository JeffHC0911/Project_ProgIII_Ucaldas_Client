import * as React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import routes from './config/routes';

export default function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index)=>(
          <Route
            key={index}
            path={route.path}
            element={
                <route.layout>
                  <route.component></route.component>
                </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

// function AdminSubRoutesViews(route){
//   console.log(route);
//   return true
// }
