import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { APP_BASE_HREF } from '@angular/common';

describe('ContactComponent', () => {
  const routes: Routes = [
    {
    component: ContactComponent, path: 'contact'
  }];
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          BrowserModule,
          ReactiveFormsModule,
          RouterModule.forRoot(routes)
        ],
        declarations: [
          AppComponent,
          ContactComponent,
        ],
        providers: [{provide: APP_BASE_HREF, useValue: '/'}]
      })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance; // Contact component test intance
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`It should have as a text 'contact page'`, () => {
    expect(component.text).toEqual('Create Form');
  });

  it(`It should set submitted to true`, () => {
    component.submit();
    expect(component.submitted).toBeTruthy();
  });

  it(`should call submit method`, () => {
    fixture.detectChanges();
    spyOn(component, 'submit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
  });
  it(`form Should be invalid`, () => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.submitted).toBeFalsy();
  });
  it(`form Should be valid`, async(() => {
    component.contactForm.controls['email'].setValue('rajnish@hcl.com');
    component.contactForm.controls['name'].setValue('rajnish');
    component.contactForm.controls['text'].setValue('somthing');
    expect(component.contactForm.valid).toBeTruthy();
  }));
});
