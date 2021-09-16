import { Component } from '@angular/core';
import { AbstractRedirectComponent } from '../shared/abstract.common';
import { CommonService } from '../shared/services';

@Component({
  selector: 'app-lp',
  templateUrl: './lp.component.html',
  styleUrls: ['./lp.component.scss']
})
export class LpComponent  extends AbstractRedirectComponent {

  constructor(commonService : CommonService) {
    super(commonService, 'lp'); 
  }

}
