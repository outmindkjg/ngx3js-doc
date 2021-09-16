import { Component } from '@angular/core';
import { AbstractRedirectComponent } from '../../shared/abstract.common';
import { CommonService } from '../../shared/services';

@Component({
  selector: 'app-cm',
  templateUrl: './cm.component.html',
  styleUrls: ['./cm.component.scss']
})
export class CmComponent extends AbstractRedirectComponent {

  constructor(commonService : CommonService) {
    super(commonService, 'cm'); 
  }

}
