import { ClientsService } from '@/services/ClientsService';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useClients(perPage = 20) {

  const { data, isLoading,fetchNextPage } = useInfiniteQuery({
    queryKey: ['clients'],
    initialPageParam: 1,
    queryFn: ({pageParam}) =>  ClientsService.getAll(pageParam,perPage),
    getNextPageParam: (_lastPage,_allPages,lastPageParam) =>{
      return lastPageParam + 1 ;
    },

  });

  // Criando um array com outro array de clientes
  const clients = data?.pages.flatMap(page => page.data) ;


  return {
    clients: clients ?? [],
    isLoading,
    nextPage: fetchNextPage,
  };
}

