import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * FAC재보험금 등록 Component
 *
 * @extends AbstractCommonList
 * @exports Re5180Component
 */
@Component({
  selector: "app-re5180",
  templateUrl: "./re5180.component.html",
  styleUrls: ["./re5180.component.scss"],
})
export class Re5180Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of re5180 component (FAC재보험금 등록).
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
