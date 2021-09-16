import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 통합문서관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2420Component
 */
@Component({
  selector: "app-uw2420",
  templateUrl: "./uw2420.component.html",
  styleUrls: ["./uw2420.component.scss"],
})
export class Uw2420Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2420 component (통합문서관리).
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
