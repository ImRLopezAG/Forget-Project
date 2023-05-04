"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericService = void 0;
class GenericService {
    constructor(model) {
        this.model = model;
    }
    async GetAll() {
        return await this.model.findAll();
    }
    async Get(id) {
        return await this.model.findByPk(id);
    }
    async Create(entity) {
        try {
            return await this.model.create(entity instanceof this.model ? entity.get() : entity);
        }
        catch (e) {
            throw new Error('Error while creating entity');
        }
    }
    async Update(id, entity) {
        const item = await this.model.findByPk(id);
        if (item != null) {
            await item.update(entity);
            return item;
        }
        throw new Error(`${this.model.name} not found`);
    }
    async Delete(id) {
        try {
            const entity = await this.model.findByPk(id);
            if (entity != null) {
                await entity.destroy();
                return;
            }
            throw new Error(`${this.model.name} not found`);
        }
        catch (error) {
            console.log(error);
            throw new Error('Internal server error');
        }
    }
    GetSchema() {
        const fields = this.model.rawAttributes;
        const schema = Object.keys(fields).map((field) => {
            const type = fields[field].field;
            return {
                field: type,
                allowNull: fields[field].allowNull
            };
        });
        return schema.filter(f => f.allowNull === false && f.field !== 'createdAt' && f.field !== 'updatedAt');
    }
}
exports.GenericService = GenericService;
