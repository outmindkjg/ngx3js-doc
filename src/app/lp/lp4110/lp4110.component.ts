import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Survery 목록조회 Component
 *
 * @extends AbstractCommonList
 * @exports Lp4110Component
 */
@Component({
  selector: "app-lp4110",
  templateUrl: "./lp4110.component.html",
  styleUrls: ["./lp4110.component.scss"],
})
export class Lp4110Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of lp4110 component (Survery 목록조회).
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
