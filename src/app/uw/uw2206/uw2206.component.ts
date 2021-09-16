import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 해제/해지 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2206Component
 */
@Component({
  selector: "app-uw2206",
  templateUrl: "./uw2206.component.html",
  styleUrls: ["./uw2206.component.scss"],
})
export class Uw2206Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2206 component (해제/해지).
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
