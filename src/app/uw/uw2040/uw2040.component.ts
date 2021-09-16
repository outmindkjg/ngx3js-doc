import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 선박관리 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2040Component
 */
@Component({
  selector: "app-uw2040",
  templateUrl: "./uw2040.component.html",
  styleUrls: ["./uw2040.component.scss"],
})
export class Uw2040Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2040 component (선박관리).
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
