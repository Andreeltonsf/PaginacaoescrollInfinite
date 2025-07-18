import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function generateEllipsisPagination(currentPage:number,totalPages:number,surroundingPages = 2): number[] {
  const pages:number[] = [];

  for(let i = 1; i <= totalPages; i++){
    const isFirstPage = i === 1;

    const isLastPage = i === totalPages;

    const isWithinLowerBound = i>=(currentPage - surroundingPages);
    const isWithinUpperBound = i<=(currentPage + surroundingPages);

    const isEllipsisPosition = i === currentPage - surroundingPages - 1 || i ===currentPage + surroundingPages + 1;

    if((isFirstPage || isLastPage) || (isWithinLowerBound && isWithinUpperBound)) {
      pages.push(i);

    }

    if(isEllipsisPosition){
      pages.push('...');
    }

  }

  return pages;
}
