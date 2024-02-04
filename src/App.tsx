import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router'
import MainLayout from './layout/main';
function App() {
  return (
    <div className="App">
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </div>
  );
}

export default App;
