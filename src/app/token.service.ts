import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenData } from './tokendata';
import { UserData } from './userdata';

@Injectable()
export class TokenService {

    constructor(private http: HttpClient) {  }

    getToken(userData: UserData) {
        const getTokenUrl = 'http://localhost:8080/oauth/token';

        const getTokenParams: HttpParams = new HttpParams()
        .append('grant_type','password')
        .append('username',userData.username)
        .append('password', userData.password);

        const getTokenHeaders: HttpHeaders = new HttpHeaders()
        .append('Authorization', 'Basic ' + btoa('client:secret'));
        return this.http.post<TokenData>(
            getTokenUrl,

            {withCredentials: true},

            {headers: getTokenHeaders,
             params: getTokenParams}
              
              );



    }

}