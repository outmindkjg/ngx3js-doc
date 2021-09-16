import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 손해율조회 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2310Component
 */
@Component({
  selector: "app-uw2310",
  templateUrl: "./uw2310.component.html",
  styleUrls: ["./uw2310.component.scss"],
})
export class Uw2310Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2310 component (손해율조회).
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
