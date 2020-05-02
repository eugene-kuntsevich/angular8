import {Injectable} from '@angular/core';
import {HttpService} from "../http/http.service";
import {Observable} from "rxjs";
import {HumanModel} from "../../model/human-model";

@Injectable({
    providedIn: 'root'
})
export class HumanService extends HttpService {

    private static readonly HUMAN_URL: string = 'https://edbff953-e290-46d8-816b-f943f45893a1.mock.pstmn.io/human-list';
    private static readonly SINGLE_HUMAN_URL: string = 'https://edbff953-e290-46d8-816b-f943f45893a1.mock.pstmn.io/human';

    public fetchHumanInfo(): Observable<HumanModel[]> {
        return this.get(HumanService.HUMAN_URL);
    }

    public fetchHuman(): Observable<HumanModel> {
        return this.get(HumanService.SINGLE_HUMAN_URL);
    }
}
