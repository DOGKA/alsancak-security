import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import s from './Layout.module.css';

export default function Layout() {
  return (
    <div className={s.layout}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
