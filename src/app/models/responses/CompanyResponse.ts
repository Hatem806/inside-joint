import { ICompany } from '../Company';

export interface ICompanyResponse
{
    success: boolean;
    message: string;
    company: ICompany;
}