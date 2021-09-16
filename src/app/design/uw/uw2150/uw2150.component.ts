import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 갱신가입설계 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2150Component
 */
@Component({
  selector: "app-uw2150",
  templateUrl: "./uw2150.component.html",
  styleUrls: ["./uw2150.component.scss"],
})
export class Uw2150Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2150 component (갱신가입설계).
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
