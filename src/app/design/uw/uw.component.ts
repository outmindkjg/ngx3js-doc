import { Component } from '@angular/core';
import { AbstractRedirectComponent } from '../../shared/abstract.common';
import { CommonService } from '../../shared/services';

@Component({
  selector: 'app-uw',
  templateUrl: './uw.component.html',
  styleUrls: ['./uw.component.scss']
})
export class UwComponent extends AbstractRedirectComponent {

  constructor(commonService : CommonService) {
    super(commonService, 'uw'); 
  }

}
