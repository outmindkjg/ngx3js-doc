import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AbstractCommonList, AbstractCommonWrite } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { ModalAlertComponent, ModalConfirmComponent } from "../../shared/modals";
import { CommonService } from "../../shared/services";

@Component({
  selector: 'app-cm7903',
  templateUrl: './cm7903.component.html',
  styleUrls: ['./cm7903.component.scss']
})
export class Cm7903Component extends AbstractCommonWrite<TestSchema> {
  constructor(
    commonService: CommonService,
    route: ActivatedRoute,
    formBuilder: FormBuilder
  ) {
    super(
      commonService,
      "sample/exuser",
      route,
      formBuilder,
      {
        codeGrp: [FSType.R],
        grpName: [FSType.R, FSType.MINL5]
      },
      {},
      "codeGrp"
    );
  }
}
