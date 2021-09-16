import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 소액현금관리 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6005Component
 */
@Component({
  selector: "app-ms6005",
  templateUrl: "./ms6005.component.html",
  styleUrls: ["./ms6005.component.scss"],
})
export class Ms6005Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6005 component (소액현금관리).
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
