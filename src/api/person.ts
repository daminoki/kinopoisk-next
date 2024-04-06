import apiHelper from '@/api/apiHelper';
import { IPerson } from '@/entities/persons';

// eslint-disable-next-line
export const getPerson = async (id: string): Promise<IPerson> => apiHelper('get', `v1.4/person/${id}`);
