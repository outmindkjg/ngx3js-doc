import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AbstractCommonWrite } from '../../shared/abstract.common';
import { FSType } from '../../shared/common.interface';
import { CommonService } from '../../shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AbstractCommonWrite<any> {

  constructor(commonService : CommonService, formBuilder : FormBuilder) { 
    super(commonService, 'login', null, formBuilder, {
      userId : [FSType.R, FSType.ID],
      pw : [FSType.R ]
    }, { userId : 'User Name', pw : 'User Password'})
    this.setFormValue({ userId : 'admin', pw : '1'})
  }

  goLogin() {
    this.getPostView(this.apiUrl, this.getFormValue()).then(result => {
      if (result.accessToken) {
        this.commonService.setSessToken(result.accessToken).then(() => {
          this.commonService.openNotify('MGS_LOGIN_SUCCESS','success', 1000, { name : this.commonService.getUser().userNm }, true);
          this.commonService.goHome();
        });
      }
    }).catch(() => {
      this.openAlert('MSG_LOGIN_ERROR');
    })
  }
}
