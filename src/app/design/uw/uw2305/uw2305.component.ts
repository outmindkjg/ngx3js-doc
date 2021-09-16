import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 중개사목록조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2305Component
 */
@Component({
  selector: "app-uw2305",
  templateUrl: "./uw2305.component.html",
  styleUrls: ["./uw2305.component.scss"],
})
export class Uw2305Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2305 component (중개사목록조회).
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
