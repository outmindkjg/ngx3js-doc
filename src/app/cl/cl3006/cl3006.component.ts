import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Claim Component
 *
 * @extends AbstractCommonList
 * @exports Cl3006Component
 */
@Component({
  selector: "app-cl3006",
  templateUrl: "./cl3006.component.html",
  styleUrls: ["./cl3006.component.scss"],
})
export class Cl3006Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of cl3006 component (Claim).
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
