import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 계약목록조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2301Component
 */
@Component({
  selector: "app-uw2301",
  templateUrl: "./uw2301.component.html",
  styleUrls: ["./uw2301.component.scss"],
})
export class Uw2301Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2301 component (계약목록조회).
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
