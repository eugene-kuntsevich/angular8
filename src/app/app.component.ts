import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title';
  inputValue = '';

  // img = 'https://dev-gang.ru/static/storage/24808028622541768947383165896446886988.png';
  constructor() {
    /*setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png';
    }, 5000);*/
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onClick() {
    console.log('Click');
  }

  onBlur(str: string) {
    this.inputValue = str;
  }
}
