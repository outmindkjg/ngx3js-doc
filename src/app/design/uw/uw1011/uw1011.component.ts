import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 통합고객관리_선사 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1011Component
 */
@Component({
  selector: "app-uw1011",
  templateUrl: "./uw1011.component.html",
  styleUrls: ["./uw1011.component.scss"],
})
export class Uw1011Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1011 component (통합고객관리_선사).
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
