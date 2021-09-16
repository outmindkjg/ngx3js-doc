import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 상품가입설계(CLI) Component
 *
 * @extends AbstractCommonList
 * @exports Uw2130Component
 */
@Component({
  selector: "app-uw2130",
  templateUrl: "./uw2130.component.html",
  styleUrls: ["./uw2130.component.scss"],
})
export class Uw2130Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2130 component (상품가입설계(CLI)).
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
