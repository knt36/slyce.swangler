import {Component, Input, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {NgModel} from '@angular/forms';


@Component({
  selector: 'auth-component',
  templateUrl : './authComponent.component.html',
  styleUrls: ['./authComponent.component.scss'],
  encapsulation: ViewEncapsulation.None

})



export class AuthComponent {
  Object = null;

  public inputFields = {};

  @Input('text') text = {
    header: 'AUTHENTICATION HEADERS:',
    applyButton: 'Apply'
  };
  // Contains the name of the security definition as the key
  @Input('securityDefinitions') securityDefinitions = {};

  constructor(public localStorageService: LocalStorageService) {
    this.Object = Object;
    this.localStorageService.securityDefinitions.subscribe(res => {
      this.securityDefinitions = res;
    });
  }
  public clickApplyButton() {
    for (const i in this.inputFields) {
      this.localStorageService.setStorageVar(i, this.inputFields[i]);
    }
  }

}
