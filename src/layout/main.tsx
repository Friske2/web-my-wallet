import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container layout-container'>
      { children }
    </div>
  );
}

export default MainLayout;
