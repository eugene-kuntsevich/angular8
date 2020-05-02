import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {Observable} from "rxjs";
import {DogModel} from "../../model/dog-model";

@Injectable({
    providedIn: 'root'
})
export class DogService extends HttpService {
    private static readonly DOG_URL: string = 'https://dog.ceo/api/breeds/image/random';

    public fetchDogImage(): Observable<DogModel> {
        return this.get(DogService.DOG_URL);
    }
}
