import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AuthComponent } from './auth-component.controller';
import { LocalStorageService } from '../../services/local-storage.service';
import { NotificationsService } from 'angular2-notifications';
import { FormsModule } from '@angular/forms';
import { SwaggerService } from '../../services/swagger.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SecurityDefinition } from '../../models/auth/security-definition';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const securityDefinition = SecurityDefinition.MOCK_DATA;

class LocalStorageServiceStub {
  getStorageVar (varName) {
    return 'test';
  }
  // securityDefinitions: () => {
  //   return Observable.of(securityDefinition);
  // }
}

fdescribe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        { provide: LocalStorageService, useValue: LocalStorageServiceStub },
        NotificationsService
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.securityDefinitions = securityDefinition;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should loop trough imported security defenitions', () => {
  //   const inputs = fixture.debugElement.queryAll(By.css('.security-definition-input'));
  //   expect(inputs.length).toEqual(2);
  // });

  // it('should call clickApplyButton', fakeAsync(() => {
  //   spyOn(component, 'clickApplyButton');
  //   const button = fixture.debugElement.query(By.css('.apply-security-definitions')).nativeElement;

  //   button.click();
  //   expect(component.clickApplyButton).toHaveBeenCalled();
  // }));

  // fit('should call apply security definitions', fakeAsync(() => {
  //   spyOn(component.notify, 'success');

  //   const inputs = fixture.debugElement.queryAll(By.css('.security-definition-input'));

  //   for (const i in component.inputFields) {
  //     if (component.inputFields.hasOwnProperty(i)) {
  //       component.inputFields[i] = 'test';
  //     }
  //   }

  //   component.clickApplyButton();

  //   expect(component.notify.success).toHaveBeenCalled();
  //   expect(component.localStorageService.setStorageVar).toHaveBeenCalled();
  // }));

});


