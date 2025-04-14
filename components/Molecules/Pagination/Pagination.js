import Link from 'next/link';

const Pagination = ({ currentPage, totalPages, basePath }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center gap-1">
        {currentPage > 1 && (
          <li className="px-3 py-2 ml-2 text-sm text-center transition-all border rounded-full shadow-sm border-slate-300 hover:shadow-lg text-medium-purple hover:text-white hover:bg-medium-purple hover:border-medium-purple disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <Link href={`${basePath}/${currentPage - 1}`}>Prev</Link>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`min-w-9 hover:border-medium-purple rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm
              ${currentPage === number ? 'bg-medium-purple text-white border-medium-purple' : 'hover:bg-medium-purple hover:text-white'}
              hover:shadow-lg text-medium-purple  ml-2`}
          >
            {currentPage === number ? (
              <button type="button" disabled>
                {number}
              </button>
            ) : (
              <Link href={`${basePath}/${number}`}>{number}</Link>
            )}
          </li>
        ))}

        {currentPage < totalPages && (
          <li className="px-3 py-2 ml-2 text-sm text-center transition-all border rounded-full shadow-sm border-slate-300 hover:shadow-lg text-medium-purple hover:text-white hover:bg-medium-purple hover:border-medium-purple disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <Link href={`${basePath}/${currentPage + 1}`}>Next</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
