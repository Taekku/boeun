import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    // RouterModule.forRoot([
    //   {path: '', component: CompanyListComponent},
    //   {path: 'products/:productId', component: CompanyDetailComponents}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
