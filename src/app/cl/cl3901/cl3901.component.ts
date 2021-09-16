import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 공문관리 화면 (공문관리) Component
 *
 * @extends AbstractCommonList
 * @exports Cl3901Component
 */
@Component({
  selector: "app-cl3901",
  templateUrl: "./cl3901.component.html",
  styleUrls: ["./cl3901.component.scss"],
})
export class Cl3901Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3901 component (공문관리 화면 (공문관리)).
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
