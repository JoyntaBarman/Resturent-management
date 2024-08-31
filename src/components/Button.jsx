import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Button = ({ href, children, event, className }) => {
  const loaction = useLocation();

  const newClassName = twMerge('px-4 py-2', className);

  return (
    <div>
      {href ? (
        <Link
          to={`${href}`}
          state={{ path: loaction.pathname }}
          className={newClassName}
        >
          {children}
        </Link>
      ) : (
        <button onClick={event} className={newClassName}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
