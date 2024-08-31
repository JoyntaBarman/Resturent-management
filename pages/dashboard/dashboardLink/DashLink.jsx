import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DashLink = () => {
  return (
    <div className="flex flex-col gap-2">
      <NavLink
        to={'home'}
        className={({ isActive }) =>
          isActive
            ? 'bg-blue-500 text-white px-4 py-2 rounded'
            : 'text-black px-4 py-2'
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to={'users'}
        className={({ isActive }) =>
          isActive
            ? 'bg-blue-500 text-white px-4 py-2 rounded'
            : 'text-black px-4 py-2'
        }
      >
        Users
      </NavLink>
      <NavLink
        to={'add'}
        className={({ isActive }) =>
          isActive
            ? 'bg-blue-500 text-white px-4 py-2 rounded'
            : 'text-black px-4 py-2'
        }
      >
        Add Menu
      </NavLink>
    </div>
  );
};

export default DashLink;
