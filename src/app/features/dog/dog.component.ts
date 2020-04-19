import {Component} from '@angular/core';
import {DogService} from "../../service/dog.service";
import {DogResponse} from "../../model/dog-response";

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
        this.dogService.fetchDogImage().subscribe((response: DogResponse) => {
            this.dogImageUrl = response.message;
        })
    }
}
