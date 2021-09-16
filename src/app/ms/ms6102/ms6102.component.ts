import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 정산결과관리 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6102Component
 */
@Component({
  selector: "app-ms6102",
  templateUrl: "./ms6102.component.html",
  styleUrls: ["./ms6102.component.scss"],
})
export class Ms6102Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6102 component (정산결과관리).
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
