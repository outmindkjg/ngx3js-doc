import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 입/출금처리 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6100Component
 */
@Component({
  selector: "app-ms6100",
  templateUrl: "./ms6100.component.html",
  styleUrls: ["./ms6100.component.scss"],
})
export class Ms6100Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6100 component (입/출금처리).
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
