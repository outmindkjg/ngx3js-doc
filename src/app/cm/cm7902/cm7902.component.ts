import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { ModalAlertComponent, ModalConfirmComponent } from "../../shared/modals";
import { CommonService } from "../../shared/services";

@Component({
  selector: 'app-cm7902',
  templateUrl: './cm7902.component.html',
  styleUrls: ['./cm7902.component.scss']
})
export class Cm7902Component extends AbstractCommonList<TestSchema> {
  constructor(commonService: CommonService, formBuilder: FormBuilder) {
    super(commonService, "sample/exuser", formBuilder, {
      email: [FSType.EMAIL, FSType.R],
      assured: [FSType.EMPTY],
      in01: [FSType.EMPTY],
      in02: [FSType.EMPTY],
      nr: [FSType.EMPTY],
      entered: [FSType.EMPTY],
      insurance: [FSType.EMPTY],
      period: [FSType.EMPTY],
    }, null, { limit : 30, fixedSearch : { codeLeng : 20 }}, 'codeGrp');

  }

  goView = (e : any) => {
    const data = e.row.data;
    this.changeRouter('/cm/cm7902/' + data.codeGrp);
  }
}
