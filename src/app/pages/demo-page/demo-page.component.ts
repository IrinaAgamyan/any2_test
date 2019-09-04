import { Component } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent {
  constructor(private demoService: DemoService) { }

  public sendForm(data: DemoForm) {
    this.demoService.sendDemoForm(data);
  }

}
