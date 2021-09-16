import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * 보증장 발행, 회수 관리 (보증장관리) Component
 *
 * @extends AbstractCommonList
 * @exports Cl3900Component
 */
@Component({
  selector: "app-cl3900",
  templateUrl: "./cl3900.component.html",
  styleUrls: ["./cl3900.component.scss"],
})
export class Cl3900Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3900 component (보증장 발행, 회수 관리 (보증장관리)).
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
