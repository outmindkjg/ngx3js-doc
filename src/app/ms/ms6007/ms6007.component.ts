import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 보험미수금 충당금 설정 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6007Component
 */
@Component({
  selector: "app-ms6007",
  templateUrl: "./ms6007.component.html",
  styleUrls: ["./ms6007.component.scss"],
})
export class Ms6007Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6007 component (보험미수금 충당금 설정).
   * 
   * @param commonService 
   * @param formBuilder 
   */
  constructor(commonService: CommonService, formBuilder: FormBuilder) {
    super(
      commonService,
      "sample/exuser",
      formBuilder,
      {
        cmnGrpCd: [FSType.R],
      },
      null,
      { limit: 30 },
      "codeGrp"
    );
  }
}
