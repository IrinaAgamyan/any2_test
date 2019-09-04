import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  public sendDemoForm(data: DemoForm) {
    console.log('demo form data is sent!', data);
  }
}
