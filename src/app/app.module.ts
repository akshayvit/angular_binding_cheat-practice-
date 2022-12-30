import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplacerPipe } from './replacer.pipe';
import { Router, RouterModule } from '@angular/router';
import { NameformComponent } from './nameform/nameform.component';

const routes=[
  {path:'nameform',component:NameformComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ReplacerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
