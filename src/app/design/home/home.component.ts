import { Component } from '@angular/core';
import { AbstractCommonComponent } from '../../shared/abstract.common';
import { CommonService } from '../../shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AbstractCommonComponent {

  constructor(commonService : CommonService) { 
    super(commonService);
  }

}
