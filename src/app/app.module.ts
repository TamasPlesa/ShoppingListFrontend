import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TokenService } from './token.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { AdditemComponent } from './additem/additem.component';
import { ShoppingService } from './shoppinglist.service';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  {path:'login' ,component: LoginComponent},
  {path:'**' ,component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShoppinglistComponent,
    AdditemComponent,
    RegistrationComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [TokenService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
