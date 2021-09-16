import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 카드매입내역관리 Component
 *
 * @extends AbstractCommonList
 * @exports Ms6003Component
 */
@Component({
  selector: "app-ms6003",
  templateUrl: "./ms6003.component.html",
  styleUrls: ["./ms6003.component.scss"],
})
export class Ms6003Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of ms6003 component (카드매입내역관리).
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
