import { PatientsData } from './patients-data';
export interface ApiResult<T> {
    description: string;
    code : number;
    data: T;
}
