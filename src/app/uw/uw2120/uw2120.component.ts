import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 상품가입설계(SOL) Component
 *
 * @extends AbstractCommonList
 * @exports Uw2120Component
 */
@Component({
  selector: "app-uw2120",
  templateUrl: "./uw2120.component.html",
  styleUrls: ["./uw2120.component.scss"],
})
export class Uw2120Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2120 component (상품가입설계(SOL)).
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
