import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DogComponent} from "./dog.component";

@NgModule({
    declarations: [DogComponent],
    imports: [
        CommonModule
    ],
    exports: [DogComponent]
})
export class DogModule {}
