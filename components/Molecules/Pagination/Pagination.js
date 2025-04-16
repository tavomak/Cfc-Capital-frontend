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
          <Link
            href={`${basePath}/${currentPage - 1}`}
            className="px-3 py-2 ml-2 text-sm text-center transition-all border rounded-full shadow-sm border-slate-300 hover:shadow-lg text-medium-purple hover:text-white hover:bg-medium-purple hover:border-medium-purple disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <button type="button" className="block w-full h-full">
              Prev
            </button>
          </Link>
        )}
        {pageNumbers.map((number) =>
          currentPage === number ? (
            <button
              key={number}
              type="button"
              disabled
              className="min-w-9 rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm shadow-sm bg-medium-purple text-white border-medium-purple pointer-events-none opacity-50 ml-2"
            >
              {number}
            </button>
          ) : (
            <Link
              key={number}
              href={`${basePath}/${number}`}
              className="min-w-9 hover:border-medium-purple rounded-full border border-slate-300 py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:bg-medium-purple hover:text-white hover:shadow-lg text-medium-purple ml-2"
            >
              {number}
            </Link>
          )
        )}

        {currentPage < totalPages && (
          <Link
            href={`${basePath}/${currentPage + 1}`}
            className="px-3 py-2 ml-2 text-sm text-center transition-all border rounded-full shadow-sm border-slate-300 hover:shadow-lg text-medium-purple hover:text-white hover:bg-medium-purple hover:border-medium-purple disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <button type="button" className="block w-full h-full">
              Next
            </button>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
