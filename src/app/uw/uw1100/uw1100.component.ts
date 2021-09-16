import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 거래처목록조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw1100Component
 */
@Component({
  selector: "app-uw1100",
  templateUrl: "./uw1100.component.html",
  styleUrls: ["./uw1100.component.scss"],
})
export class Uw1100Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw1100 component (거래처목록조회).
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
