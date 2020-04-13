import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    id?: number;
    name: string;
    website: string;
    address: string;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export declare type CustomerWithRelations = Customer & CustomerRelations;
