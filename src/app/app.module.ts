import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WallComponent } from './wall/wall.component';
import { StatusComponent } from './status/status.component';
import { TopComponent } from './top/top.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service'
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    { path: '', component: WallComponent },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent,
	WallComponent,
	StatusComponent,
	TopComponent,
	PostComponent
    ],
    imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
	BrowserAnimationsModule,
	FormsModule
    ],
    providers: [
	PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
