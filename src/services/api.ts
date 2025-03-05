import axios from 'axios';
import { User } from '../types/User';

const API_URL = 'http://localhost:3000/employees';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return [];
  }
};