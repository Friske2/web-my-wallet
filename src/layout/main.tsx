import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container layout-container'>
      <div className='position-relative h-full'>
        { children }
      </div>
    </div>
  );
}

export default MainLayout;
