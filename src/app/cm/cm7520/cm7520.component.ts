import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 메뉴권한관리 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7520Component
 */
@Component({
  selector: "app-cm7520",
  templateUrl: "./cm7520.component.html",
  styleUrls: ["./cm7520.component.scss"],
})
export class Cm7520Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7520 component (메뉴권한관리).
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
