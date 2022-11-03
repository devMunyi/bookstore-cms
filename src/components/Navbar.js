import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {
  const location = useLocation()?.pathname;

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(location);
  }, [location]);

  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav
      style={{ backgroundColor: '#fff' }}
      className="d-flex justify-content-between align-items-center container-fluid"
    >
      <div style={{ width: '50%' }} className="nav-left-wrapper">
        <div className="display-6">
          <Link className="link-item brand mx-auto" to="/">
            Bookstore CMS
          </Link>
        </div>

        <ul
          style={{ width: '50%' }}
          className="nav d-flex justify-content-around fs-5"
        >
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className={`link-item ${currentPath === link.path && 'active'}`}
                to={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right-wrapper">
        <div
          className="faUser mx-3 d-flex justify-content-center align-items-center"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            boxShadow:
              'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
          }}
        >
          <FaUser className="text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
