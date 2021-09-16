import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 전자계산서지급처리 관리 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6004Component
 */
@Component({
  selector: "app-ms6004",
  templateUrl: "./ms6004.component.html",
  styleUrls: ["./ms6004.component.scss"],
})
export class Ms6004Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6004 component (전자계산서지급처리 관리).
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
