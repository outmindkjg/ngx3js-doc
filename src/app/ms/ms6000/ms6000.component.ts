import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 지출결의 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6000Component
 */
@Component({
  selector: "app-ms6000",
  templateUrl: "./ms6000.component.html",
  styleUrls: ["./ms6000.component.scss"],
})
export class Ms6000Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6000 component (지출결의 관리).
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
