import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 요율안내서_통합 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2430Component
 */
@Component({
  selector: "app-uw2430",
  templateUrl: "./uw2430.component.html",
  styleUrls: ["./uw2430.component.scss"],
})
export class Uw2430Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2430 component (요율안내서_통합).
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
