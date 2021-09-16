import { Component } from '@angular/core';
import { AbstractRedirectComponent } from '../shared/abstract.common';
import { CommonService } from '../shared/services';

@Component({
  selector: 'app-re',
  templateUrl: './re.component.html',
  styleUrls: ['./re.component.scss']
})
export class ReComponent extends AbstractRedirectComponent {

  constructor(commonService : CommonService) {
    super(commonService, 're'); 
  }

}

