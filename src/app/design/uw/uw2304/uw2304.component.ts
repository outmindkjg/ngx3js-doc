import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 보험료관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2304Component
 */
@Component({
  selector: "app-uw2304",
  templateUrl: "./uw2304.component.html",
  styleUrls: ["./uw2304.component.scss"],
})
export class Uw2304Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2304 component (보험료관리).
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
