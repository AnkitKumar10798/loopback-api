"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, roleRepositoryGetter, customerRepositoryGetter) {
        super(models_1.User, dataSource);
        this.roleRepositoryGetter = roleRepositoryGetter;
        this.customerRepositoryGetter = customerRepositoryGetter;
        this.customer = this.createBelongsToAccessorFor('customer', customerRepositoryGetter);
        this.registerInclusionResolver('customer', this.customer.inclusionResolver);
        this.role = this.createBelongsToAccessorFor('role', roleRepositoryGetter);
        this.registerInclusionResolver('role', this.role.inclusionResolver);
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.psql')), tslib_1.__param(1, repository_1.repository.getter('RoleRepository')), tslib_1.__param(2, repository_1.repository.getter('CustomerRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.PsqlDataSource, Function, Function])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map