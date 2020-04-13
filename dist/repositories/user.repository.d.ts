import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { User, UserRelations, Role, Customer } from '../models';
import { PsqlDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { RoleRepository } from './role.repository';
import { CustomerRepository } from './customer.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected roleRepositoryGetter: Getter<RoleRepository>;
    protected customerRepositoryGetter: Getter<CustomerRepository>;
    readonly role: BelongsToAccessor<Role, typeof User.prototype.id>;
    readonly customer: BelongsToAccessor<Customer, typeof User.prototype.id>;
    constructor(dataSource: PsqlDataSource, roleRepositoryGetter: Getter<RoleRepository>, customerRepositoryGetter: Getter<CustomerRepository>);
}
