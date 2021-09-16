import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 상계처리 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6101Component
 */
@Component({
  selector: "app-ms6101",
  templateUrl: "./ms6101.component.html",
  styleUrls: ["./ms6101.component.scss"],
})
export class Ms6101Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6101 component (상계처리).
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
