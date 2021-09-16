import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Invoice(Annual Premium) - 2척 이상 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2436Component
 */
@Component({
  selector: "app-uw2436",
  templateUrl: "./uw2436.component.html",
  styleUrls: ["./uw2436.component.scss"],
})
export class Uw2436Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2436 component (Invoice(Annual Premium) - 2척 이상).
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
