import { httpClient } from './httpClient';
import { IpaginationResponse } from './types';

export interface IClient {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
  email: string;
  vehicleType: string;
  vehicleModel:  string;
  vehicleManufacturer: string;
}

export class ClientsService {
  static async getAll(page =1,perPage=10) {
    //await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    const { data } = await httpClient.get<IpaginationResponse<IClient[]>>('/clients',{
      params:{
        _page:page,
        _per_page: perPage, // Pagination parameters
      }
    });



    return data;
  }
}
