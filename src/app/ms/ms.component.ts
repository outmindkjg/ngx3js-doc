import { Component } from '@angular/core';
import { AbstractRedirectComponent } from '../shared/abstract.common';
import { CommonService } from '../shared/services';

@Component({
  selector: 'app-ms',
  templateUrl: './ms.component.html',
  styleUrls: ['./ms.component.scss']
})
export class MsComponent extends AbstractRedirectComponent {

  constructor(commonService : CommonService) {
    super(commonService, 'ms'); 
  }

}
