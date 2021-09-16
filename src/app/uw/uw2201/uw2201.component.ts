import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 계약변경이력 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2201Component
 */
@Component({
  selector: "app-uw2201",
  templateUrl: "./uw2201.component.html",
  styleUrls: ["./uw2201.component.scss"],
})
export class Uw2201Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2201 component (계약변경이력).
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
