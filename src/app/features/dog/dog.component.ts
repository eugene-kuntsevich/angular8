import {Component} from '@angular/core';
import {DogService} from "../../service/dog/dog.service";
import {DogModel} from "../../model/dog-model";

@Component({
    selector: 'app-dog',
    templateUrl: './dog.component.html',
    styleUrls: ['./dog.component.scss']
})
export class DogComponent {

    dogImageUrl: String = '';

    constructor(private dogService: DogService) {
    }

    loadDogImageUrl(): void {
        this.dogService.fetchDogImage().subscribe((response: DogModel) => {
            this.dogImageUrl = response.message;
        })
    }
}
