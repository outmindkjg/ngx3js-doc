import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * LP Notice 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Lp4040Component
 */
@Component({
  selector: "app-lp4040",
  templateUrl: "./lp4040.component.html",
  styleUrls: ["./lp4040.component.scss"],
})
export class Lp4040Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of lp4040 component (LP Notice 관리).
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
