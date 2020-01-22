import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Observable } from 'rxjs';
import { UserData } from './userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  }