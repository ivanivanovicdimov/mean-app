import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { EditFighterComponent } from './edit-fighter/edit-fighter.component';
import { NewFighterComponent } from './new-fighter/new-fighter.component';
import { ViewFighterComponent } from './view-fighter/view-fighter.component';
import { ArenaComponent } from './arena/arena.component';

@NgModule({
  declarations: [
    AppComponent,
    EditFighterComponent,
    NewFighterComponent,
    ViewFighterComponent,
    ArenaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
