import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 계약변경신청 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2200Component
 */
@Component({
  selector: "app-uw2200",
  templateUrl: "./uw2200.component.html",
  styleUrls: ["./uw2200.component.scss"],
})
export class Uw2200Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2200 component (계약변경신청).
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
