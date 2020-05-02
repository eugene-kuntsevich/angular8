import {Component} from '@angular/core';
import {HumanService} from "../../service/human/human.service";
import {HumanModel} from "../../model/human-model";

@Component({
    selector: 'app-human',
    templateUrl: './human.component.html',
    styleUrls: ['./human.component.scss']
})
export class HumanComponent {

    humans: HumanModel[];
    humanName: String = '';

    constructor(private humanService: HumanService) {
    }

    loadHumanInfo(): void {
        this.humanService.fetchHumanInfo().subscribe(response => {
            this.humans = response;
        })
    }

    loadHumanName(): void {
        this.humanService.fetchHuman().subscribe((response: HumanModel) => {
            this.humanName = response.name;
        })
    }
}