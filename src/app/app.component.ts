import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reverse-phrase';
  text = '';
  reversedText = '';

  onInputText(event: Event) {
    this.text = (<HTMLInputElement>event.target).value;
  }

  onClickReverse() {
    this.reversedText = this.text.split('').reverse().join('');
  }

  disableButton(): boolean {
    return !this.text.length;
  }
}
