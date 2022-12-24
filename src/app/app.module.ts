import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameOneComponent } from './game-one/game-one.component';
import { GameTwoComponent } from './game-two/game-two.component';
import { MatchingGameComponent } from './matching-game/matching-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameOneComponent,
    GameTwoComponent,
    MatchingGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
