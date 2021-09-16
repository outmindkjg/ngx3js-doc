import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Invoice(Annual Premium) - 단선 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2435Component
 */
@Component({
  selector: "app-uw2435",
  templateUrl: "./uw2435.component.html",
  styleUrls: ["./uw2435.component.scss"],
})
export class Uw2435Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2435 component (Invoice(Annual Premium) - 단선).
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
