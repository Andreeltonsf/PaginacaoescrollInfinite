import { useCallback, useEffect, useState } from 'react';



export function usePagination(initialPage = 1 ,perPage:number) {
  const [currentPage, setCurrentPage] = useState(() =>{
    const searchParams = new URLSearchParams(window.location.search);

    const page = searchParams.get('page');

    if(!page){
      return initialPage;
    }
    return Number(page);

  });
  const [totalItems, setTotalItems] = useState(0);



  const totalPages = Math.ceil(totalItems / perPage);
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;


  useEffect(()=>{

    const urlParams = new URL(window.location.href);

    urlParams.searchParams.set('page', String(currentPage));

    const newUrl = urlParams.origin + urlParams.pathname + urlParams.search.toString();
    window.history.replaceState({}, '', newUrl);


  },[currentPage]);


  const handleNextPage = useCallback(() =>{
    setCurrentPage((prevState) => prevState + 1);
  },[]);

  const handlePreviousPage= useCallback(()=>{
    setCurrentPage((prevState) => prevState - 1);
  },[]);


  const handleSetPage = useCallback((page:number)=>{
    setCurrentPage(page);
  },[]);



  return{
    currentPage,
    handleNextPage,
    handlePreviousPage,
    handleSetPage,
    totalPages,
    hasPreviousPage,
    hasNextPage,
    setTotalItems,


  };
}
