import { Entity } from '@loopback/repository';
export declare class Role extends Entity {
    id: number;
    name: string;
    description: string;
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export declare type RoleWithRelations = Role & RoleRelations;
