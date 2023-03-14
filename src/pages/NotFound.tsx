import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <div>Not Found</div>
      <Link to="/">go home</Link>
    </div>
  );
}

export default NotFound;
