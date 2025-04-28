import axios, { AxiosInstance } from 'axios';

export class HttpService {
    private _http: AxiosInstance | null = null;

    constructor(public baseUrl: string) {
        this.baseUrl = baseUrl;

        this.http = axios.create({
            baseURL: <string>baseUrl
        });
    }

    async get(url: string): Promise<any | { error: string }> {
        const response = await this.http?.get(url);
        return response?.data || { error: 'No se pudo obtener la data' };
    }

    async post(url: string, data: unknown): Promise<unknown | { error: string }> {
        const response = await this.http?.post(url, data);
        return response?.data || { error: 'No se pudo obtener la data' };
    }

    async put(url: string, data: unknown): Promise<unknown | { error: string }> {
        const response = await this.http?.put(url, data);
        return response?.data || { error: 'No se pudo obtener la data' };
    }

    async delete(url: string): Promise<unknown | { error: string }> {
        const response = await this.http?.delete(url);
        return response?.data || { error: 'No se pudo obtener la data' };
    }

    get http() {
        return this._http;
    }

    set http(value: AxiosInstance | null) {
        this._http = value;
    }
    
}

