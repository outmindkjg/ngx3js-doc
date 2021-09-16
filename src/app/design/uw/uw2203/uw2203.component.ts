import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 선급담보유예변경 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2203Component
 */
@Component({
  selector: "app-uw2203",
  templateUrl: "./uw2203.component.html",
  styleUrls: ["./uw2203.component.scss"],
})
export class Uw2203Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2203 component (선급담보유예변경).
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
