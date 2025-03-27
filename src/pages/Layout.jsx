import React from 'react';
import { Link, Outlet } from 'react-router-dom';

/**
 * Layout 컴포넌트는 React Router의 Outlet을 사용하여 중첩된 라우트를 렌더링하는 레이아웃 컴포넌트입니다.
 *
 * 주요 특징:
 * - 절대 경로로 작성된 Link 컴포넌트를 사용하여 어드민 대시보드의 주요 페이지로 이동할 수 있습니다.
 * - `to` 속성에 절대 경로(`/admin`, `/admin/users`, `/admin/settings` 등)를 지정하여 라우팅을 명확히 정의합니다.
 * - `Outlet` 컴포넌트를 통해 중첩된 라우트의 콘텐츠가 렌더링됩니다.
 *
 * 구조:
 * - `header`: 어드민 대시보드의 제목과 로고를 표시합니다.
 * - `sidebar`: 주요 네비게이션 링크를 포함합니다.
 * - `main-content`: 중첩된 라우트의 콘텐츠를 렌더링합니다.
 *
 *
 */
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
          <Link to="/admin/*">잘못된 페이지</Link>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
