import { Entity } from '@loopback/repository';
import { CustomerWithRelations } from './customer.model';
import { RoleWithRelations } from './role.model';
export declare class User extends Entity {
    id?: number;
    firstname: string;
    middlename?: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    roleId: number;
    customerId: number;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
    role: RoleWithRelations;
    customer: CustomerWithRelations;
}
export declare type UserWithRelations = User & UserRelations;
