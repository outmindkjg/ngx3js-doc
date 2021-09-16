import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 통합발행관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2410Component
 */
@Component({
  selector: "app-uw2410",
  templateUrl: "./uw2410.component.html",
  styleUrls: ["./uw2410.component.scss"],
})
export class Uw2410Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2410 component (통합발행관리).
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
