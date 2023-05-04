"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericController = void 0;
class GenericController {
    constructor(service) {
        this.service = service;
        this.GetAll = this.GetAll.bind(this);
        this.Get = this.Get.bind(this);
        this.Create = this.Create.bind(this);
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
    }
    async GetAll(_req, res, next) {
        try {
            const entities = await this.service.GetAll();
            return res.status(200).json(entities);
        }
        catch (error) {
            if (error instanceof Error) {
                return next(error);
            }
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
    }
    async Get(req, res, next) {
        try {
            const id = req.params.id;
            id !== null && id !== void 0 ? id : res.status(400).json({ message: 'The id is required' });
            const entity = await this.service.Get(id);
            if (entity != null) {
                return res.status(200).json(entity);
            }
            else {
                return res.status(404).json({ message: `The entity with id ${req.params.id} does not exist` });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                return next(error);
            }
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
    }
    async Create(req, res, next) {
        try {
            const schema = this.service.GetSchema();
            for (const field of schema) {
                if (field.allowNull === false && req.body[field.field] === undefined) {
                    return res.status(400).json({ message: `The field ${field.field} is required` });
                }
            }
            const entity = req.body;
            const created = await this.service.Create(entity);
            return res.status(201).json({ created });
        }
        catch (error) {
            if (error instanceof Error) {
                return next(error);
            }
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
    }
    async Update(req, res, next) {
        try {
            const id = req.params.id;
            id !== null && id !== void 0 ? id : res.status(400).json({ message: 'The id is required' });
            const entity = await this.service.Get(id);
            if (entity != null) {
                const data = req.body;
                const updated = await this.service.Update(id, data);
                return res.status(200).json({ updated });
            }
            else {
                return res.status(404).json({ message: `The entity with id ${id} does not exist` });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                return next(error);
            }
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
    }
    async Delete(req, res, next) {
        try {
            const id = req.params.id;
            id !== null && id !== void 0 ? id : res.status(400).json({ message: 'The id is required' });
            const entity = await this.service.Get(id);
            if (entity != null) {
                await this.service.Delete(id);
                return res.sendStatus(204);
            }
            else {
                return res.status(404).json({ message: 'Not found' });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                return next(error);
            }
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
    }
}
exports.GenericController = GenericController;
