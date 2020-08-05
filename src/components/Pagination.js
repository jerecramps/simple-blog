import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination pagination-class'>
        {pageNumbers.map(number => (
          <li key={number} className={'page-item item-class ' + (currentPage === number ? 'active' : '')}>
            <div onClick={() => paginate(number)}  className='page-link'>
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
