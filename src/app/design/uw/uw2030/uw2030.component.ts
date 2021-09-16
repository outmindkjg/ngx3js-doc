import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 선박목록조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2030Component
 */
@Component({
  selector: "app-uw2030",
  templateUrl: "./uw2030.component.html",
  styleUrls: ["./uw2030.component.scss"],
})
export class Uw2030Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2030 component (선박목록조회).
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
