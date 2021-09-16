import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * Issuing State Code Component
 *
 * @extends AbstractCommonList
 * @exports Uw2006Component
 */
@Component({
  selector: "app-uw2006",
  templateUrl: "./uw2006.component.html",
  styleUrls: ["./uw2006.component.scss"],
})
export class Uw2006Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2006 component (Issuing State Code).
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
