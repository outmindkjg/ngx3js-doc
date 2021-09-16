import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Survery Component
 *
 * @extends AbstractCommonList
 * @exports Lp4100Component
 */
@Component({
  selector: "app-lp4100",
  templateUrl: "./lp4100.component.html",
  styleUrls: ["./lp4100.component.scss"],
})
export class Lp4100Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of lp4100 component (Survery).
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
