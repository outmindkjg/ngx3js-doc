import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 메뉴관리 Component
 *
 * @extends AbstractCommonList
 * @exports Cm7800Component
 */
@Component({
  selector: "app-cm7800",
  templateUrl: "./cm7800.component.html",
  styleUrls: ["./cm7800.component.scss"],
})
export class Cm7800Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cm7800 component (메뉴관리).
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
