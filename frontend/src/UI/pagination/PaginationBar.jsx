import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import getPagination from './getPagination'
import PageButton from './pageButton';
import { useState } from 'react';


export default function PaginationBar( {pageCount2, resoult, activePage2}) {
  const pageCount = 20;
  const [ activePage, setActivePage] = useState(1)
  const pages = getPagination(activePage, pageCount)

  console.log(pages);
  

  return (
    <div className="flex items-center justify-between  bg-white px-4 pt-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={()=>setActivePage((prev)=> prev > 1 ? prev-1 : prev)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={()=>setActivePage((prev)=> prev < pageCount ? prev+1 : prev)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              onClick={()=>setActivePage((prev)=> prev > 1 ? prev-1 : prev)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            
            {pages.map((page, index) => (
              <PageButton key={index} page={page} activePage={activePage} setActivePage={setActivePage}/>
            ))}
            <button
              onClick={()=>setActivePage((prev)=> prev < pageCount ? prev+1 : prev)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}