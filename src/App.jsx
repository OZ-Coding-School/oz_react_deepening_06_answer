/**
 * `App` 컴포넌트는 `react-router-dom`을 사용하여 애플리케이션의 라우팅을 설정합니다.
 * 상대 경로를 활용한 중첩 라우팅 구조를 정의하여 모듈성과 조직화를 향상시킵니다.
 *
 * 라우트:
 * - `/` : `Home` 컴포넌트를 렌더링합니다.
 * - `/admin` : 부모 라우트로서 `Layout` 컴포넌트를 렌더링합니다.
 *   - `/admin` (인덱스 라우트): `Dashboard` 컴포넌트를 렌더링합니다.
 *   - `/users` : `Users` 컴포넌트를 렌더링합니다.
 *   - `/users/:id` : 특정 사용자를 위한 `UserDetail` 컴포넌트를 렌더링합니다.
 *   - `/settings` : `Settings` 컴포넌트를 렌더링합니다.
 *   - `/*` : `/admin` 경로 하위에서 일치하지 않는 라우트에 대해 `NotFound` 컴포넌트를 렌더링합니다.
 *
 * 이 라우팅 구조는 `/admin` 경로 하위의 자식 라우트를 상대 경로로 정의하여
 * 애플리케이션 유지보수와 확장을 용이하게 만듭니다.
 */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/admin/Home';
import Layout from './pages/Layout';
import Dashboard from './pages/admin__dashboard/Dashboard';
import Users from './pages/admin__users/Users';
import UserDetail from './pages/admin__users/UserDetail';
import Settings from './pages/admin__settings/Settings';
import NotFound from './pages/admin__notfound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
