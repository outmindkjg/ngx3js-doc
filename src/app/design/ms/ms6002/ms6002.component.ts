import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 카드매입내역 목록 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6002Component
 */
@Component({
  selector: "app-ms6002",
  templateUrl: "./ms6002.component.html",
  styleUrls: ["./ms6002.component.scss"],
})
export class Ms6002Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6002 component (카드매입내역 목록).
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
