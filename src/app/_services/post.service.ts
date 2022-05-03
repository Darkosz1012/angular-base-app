import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Post } from '@app/_models/post';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Post[]>(`${environment.apiUrl}/api/post/all`);
    }

    add(content:string){
       return this.http.post<any>(`${environment.apiUrl}/api/post/add`, { content })
    }
}