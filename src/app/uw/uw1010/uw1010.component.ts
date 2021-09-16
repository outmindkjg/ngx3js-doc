import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 통합고객관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1010Component
 */
@Component({
  selector: "app-uw1010",
  templateUrl: "./uw1010.component.html",
  styleUrls: ["./uw1010.component.scss"],
})
export class Uw1010Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1010 component (통합고객관리).
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
