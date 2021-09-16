import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AbstractCommonList } from "../../../shared/abstract.common";
import { FSType, TestSchema } from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

/**
 * Certificate-가입증서 Component
 *
 * @extends AbstractCommonList
 * @exports Uw2434Component
 */
@Component({
  selector: "app-uw2434",
  templateUrl: "./uw2434.component.html",
  styleUrls: ["./uw2434.component.scss"],
})
export class Uw2434Component extends AbstractCommonList<TestSchema> {

  /**
   * Creates an instance of uw2434 component (Certificate-가입증서).
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
