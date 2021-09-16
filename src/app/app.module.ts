import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LocalTranslateHttpLoader } from './shared/local-translate-http-loader';
import { COMMON_SERVICE } from './shared/services';
import { SharedModule } from './shared/shared.module';

/**
 * 번역 로드 팩토리
 *
 * @export
 * @param {HttpClient} http
 * @returns
 */
 export function HttpLoaderFactory(http: HttpClient) {
  /**
   * 번역 로드 팩토리
   *
   * @export
   * @param {HttpClient} http
   * @returns
   */
  return new LocalTranslateHttpLoader(http, "./assets/i18n/", ".json");
}

/**
 * App 모듈
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  exports : [
    TranslateModule,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })    
  ],
  providers : [...COMMON_SERVICE],
  bootstrap: [AppComponent]
})
export class AppModule { }
