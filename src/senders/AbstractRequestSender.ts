import { OptionsType } from "../types/OptionType";

export abstract class AbstactRequestSender {
    public abstract async get(options: OptionsType): Promise<any>
    public abstract async post(options: OptionsType): Promise<any>
    public abstract async put(options: OptionsType): Promise<any>
    public abstract async delete(options: OptionsType): Promise<any>
}