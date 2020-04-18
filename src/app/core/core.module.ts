import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CoreRoutingModule} from "./core-routing.module";
import {DogModule} from "../features/dog/dog.module";
import {LoginModule} from "../features/login/login.module";
import {HomeModule} from "../features/home/home.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,
        CoreRoutingModule,
        DogModule,
        LoginModule,
        HomeModule,
        HttpClientModule
    ],
    exports: [NavbarComponent]
})
export class CoreModule {}
