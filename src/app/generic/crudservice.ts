import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class CrudService<T, ID> {
    constructor(protected url:string, protected http:HttpClient) {
    }

    protected getUrl(): string{
        return this.url;
    }

    findAll():Observable<T[]>{
        const url = `${this.getUrl()}`;
        return this.http.get<T[]>(url);
    }


}