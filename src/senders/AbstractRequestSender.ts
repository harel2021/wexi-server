import { OptionsType } from "../types/OptionType";

export abstract class AbstactRequestSender {
    public abstract async get(options:OptionsType): Promise<any>
    public abstract async post(): Promise<any>
    public abstract async put(): Promise<any>
    public abstract async delete(): Promise<any>
}