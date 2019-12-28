
import { AbstactRequestSender } from './AbstractRequestSender';
import { OptionsType } from '../types/OptionType';
import { Methods } from '../types/Methods';
import { errorHandler } from '../error/ErrorHandler';
import { ErrorFactory } from '../error/ErrorFactory';
const request = require('request-promise');


export abstract class RequestSender implements AbstactRequestSender {


    public async get(options: OptionsType): Promise<any> {
        options.method = Methods.Get;
        return await this.sendRequest(options);
    }

    public async post(options: OptionsType): Promise<any> {
        options.method = Methods.Post;
        return await this.sendRequest(options);
    }
    public async put(options: OptionsType): Promise<any> {
        options.method = Methods.Put;
        return await this.sendRequest(options);
    }
    public async delete(options: OptionsType): Promise<any> {
        options.method = Methods.Delete;
        return await this.sendRequest(options);
    }


    protected async sendRequest(options: OptionsType): Promise<any> {
        try {
            return await request(options)
        }
        catch (e) {
            throw new ErrorFactory(e);
        }
    }
}