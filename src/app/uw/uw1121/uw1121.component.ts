import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 영업활동이력관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1121Component
 */
@Component({
  selector: "app-uw1121",
  templateUrl: "./uw1121.component.html",
  styleUrls: ["./uw1121.component.scss"],
})
export class Uw1121Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1121 component (영업활동이력관리).
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
