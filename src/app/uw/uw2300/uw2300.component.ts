import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 설계목록조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2300Component
 */
@Component({
  selector: "app-uw2300",
  templateUrl: "./uw2300.component.html",
  styleUrls: ["./uw2300.component.scss"],
})
export class Uw2300Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2300 component (설계목록조회).
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
