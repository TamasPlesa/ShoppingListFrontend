import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenData } from './tokendata';
import { UserData } from './userdata';
import { AdditemComponent } from './additem/additem.component';

@Injectable()
export class ShoppingService {

    shoppingList = [];

    constructor(private http: HttpClient) { this.load(); }

    load() {

    }

    addItem(item:string, token:string) {
this.shoppingList.unshift(item);

const getTokenUrl = 'http://localhost:8080/insertItem';

        const getTokenParams: HttpParams = new HttpParams()
        .append('item', item);
        const getTokenHeaders: HttpHeaders = new HttpHeaders()
        .append('Authorization','Bearer' + token)
        this.http.post(
            getTokenUrl,

            {withCredentials: true},

            {headers: getTokenHeaders,
             params: getTokenParams}
              
              ).subscribe((res) => {
                    console.log(res);
              });
    }
}
