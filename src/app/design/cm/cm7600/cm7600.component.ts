import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 출력물양식관리 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7600Component
 */
@Component({
  selector: "app-cm7600",
  templateUrl: "./cm7600.component.html",
  styleUrls: ["./cm7600.component.scss"],
})
export class Cm7600Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7600 component (출력물양식관리).
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
