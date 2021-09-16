import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 연락처관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1130Component
 */
@Component({
  selector: "app-uw1130",
  templateUrl: "./uw1130.component.html",
  styleUrls: ["./uw1130.component.scss"],
})
export class Uw1130Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1130 component (연락처관리).
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
