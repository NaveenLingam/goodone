import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
  ],
  imports: [
  HttpClientModule,
AdminModule
],
  providers: [
  ],
  bootstrap: [
  ]
})
export class Module { }nslator/translator.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  AppComponent
],
  imports: [
  FooterModule,
TemplateModule,
HeaderModule,
TranslatorModule,
AppRoutingModule,
BrowserModule,
LoginModule,
SignupModule,
HomeModule,
UserModule,
HttpClientModule
],
  providers: [
  ],
  bootstrap: [
  AppComponent
]
})
export class AppModule { }