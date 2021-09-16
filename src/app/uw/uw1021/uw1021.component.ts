import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 출자금목록조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1021Component
 */
@Component({
  selector: "app-uw1021",
  templateUrl: "./uw1021.component.html",
  styleUrls: ["./uw1021.component.scss"],
})
export class Uw1021Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1021 component (출자금목록조회).
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
