import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './containers/home/home.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {LoginComponent} from './containers/login/login.component';

import {MapComponent} from './shared-components/map/map.component';
import {MessageComponent} from './containers/home/container-components/message/message.component';
import {ChatComponent} from './containers/home/container-components/chat/chat.component';
import {ChatCreateComponent} from './containers/home/container-components/chat-create/chat-create.component';

import {routes} from './app.routes';

import {AuthService} from './services/auth.service';

import {AngularFireModule} from 'angularfire2';
import {RouterModule} from '@angular/router';

import {firebaseConfig} from './app.const';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        ChatComponent,
        ChatCreateComponent,
        MapComponent,
        HomeComponent,
        LayoutComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterModule.forRoot(routes)
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
