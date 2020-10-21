export interface ICompany
{
    _id: string;
    name: string;
    aboutUs: string;
    videoPath: string;
    documentPath: string;
    createdAt: Date;
    updatedAt: Date;

}

export class Company implements ICompany
{
    _id: string;
    name: string;
    aboutUs: string;
    videoPath: string;
    documentPath: string;
    createdAt: Date;
    updatedAt: Date;
}