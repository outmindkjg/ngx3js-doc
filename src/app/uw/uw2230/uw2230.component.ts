import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

/**
 * 변경설계(CLI) Component
 *
 * @extends AbstractCommonList
 * @exports Uw2230Component
 */
@Component({
  selector: "app-uw2230",
  templateUrl: "./uw2230.component.html",
  styleUrls: ["./uw2230.component.scss"],
})
export class Uw2230Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2230 component (변경설계(CLI)).
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
