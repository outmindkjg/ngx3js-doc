import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * Endorsement(배서)_계약조건 변경시 발행 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2438Component
 */
@Component({
  selector: "app-uw2438",
  templateUrl: "./uw2438.component.html",
  styleUrls: ["./uw2438.component.scss"],
})
export class Uw2438Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2438 component (Endorsement(배서)_계약조건 변경시 발행).
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
