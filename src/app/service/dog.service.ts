import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {DogResponse} from "../model/dog-response";

@Injectable({
    providedIn: 'root'
})
export class DogService extends HttpService {
    private static readonly DOG_URL: string = 'https://dog.ceo/api/breeds/image/random';

    public fetchDogImage(): Observable<DogResponse> {
        return this.get(DogService.DOG_URL);
    }
}
