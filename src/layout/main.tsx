import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container'>
      { children }
    </div>
  );
}

export default MainLayout;
