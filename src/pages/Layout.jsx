import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="admin-layout">
      <header>
        <div className="logo">어드민 대시보드</div>
        <h2>Admin Page Project</h2>
      </header>
      <div className="admin-content">
        <div className="sidebar">
          <Link to="/admin">대시보드</Link>
          <Link to="/admin/users">사용자</Link>
          <Link to="/admin/settings">설정</Link>
          <Link to="/admin/512952152">잘못된 페이지</Link>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
