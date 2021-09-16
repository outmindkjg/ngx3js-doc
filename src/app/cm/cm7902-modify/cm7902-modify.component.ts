import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AbstractCommonWrite } from "../../shared/abstract.common";
import { FSType, TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

@Component({
  selector: "app-cm7902-modify",
  templateUrl: "./cm7902-modify.component.html",
  styleUrls: ["./cm7902-modify.component.scss"],
})
export class Cm7902ModifyComponent extends AbstractCommonWrite<TestSchema> {
  constructor(
    commonService: CommonService,
    route: ActivatedRoute,
    formBuilder: FormBuilder
  ) {
    super(
      commonService,
      "sample/exuser",
      route,
      formBuilder,
      {
        codeGrp: [],
        grpName: [FSType.R, FSType.MINL5],
        abbrName: [FSType.R],
        codeLeng: [FSType.INT],
        codeDtm: [],
        auth: [FSType.INT, FSType.DEF0],
      },
      {},
      "codeGrp"
    );
  }
}
