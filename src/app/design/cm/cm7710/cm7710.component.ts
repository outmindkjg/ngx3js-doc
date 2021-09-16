import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 환율조회 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7710Component
 */
@Component({
  selector: "app-cm7710",
  templateUrl: "./cm7710.component.html",
  styleUrls: ["./cm7710.component.scss"],
})
export class Cm7710Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7710 component (환율조회).
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
