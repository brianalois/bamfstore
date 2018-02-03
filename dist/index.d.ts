export declare class Model {
    static model_name: string;
    static all_data: Array<object>;
    static SCHEMA: Object;
    constructor();
    getModelName(): any;
    static describe(): Array<string>;
    static setlocalStorage(name: string, data: Object): void;
    static getlocalStorage(name: string): Object;
    static removeLocalStorage(name: string): void;
    static getModelName(): string;
    static removeAllData(): void;
    static setAllData(data: Array<Object>): void;
    static getAllData(): any;
    static getPrimaryKey(): string;
    static getSchema(): any;
    static schemaValidate(data: any): any;
    static instantiateObject(obj_data: any): Model;
    static create(data: any): Model;
    static remove(search: object): void;
    static update(search: object, new_data?: any): null | undefined;
    static updateOne(search: object, new_data: any): Model | null;
    static findOne(search?: object): Model;
    static findOneAndUpdate(search: object, data?: any, options?: any): any;
    static findById(id: string): Model;
}
