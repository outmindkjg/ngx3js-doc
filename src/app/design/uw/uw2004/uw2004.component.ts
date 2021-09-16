import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 항구코드관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2004Component
 */
@Component({
  selector: "app-uw2004",
  templateUrl: "./uw2004.component.html",
  styleUrls: ["./uw2004.component.scss"],
})
export class Uw2004Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2004 component (항구코드관리).
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
