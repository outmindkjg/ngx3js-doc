import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AbstractCommonView } from "../../shared/abstract.common";
import { TestSchema } from "../../shared/common.interface";
import { CommonService } from "../../shared/services";

@Component({
  selector: 'app-cm7902-view',
  templateUrl: './cm7902-view.component.html',
  styleUrls: ['./cm7902-view.component.scss']
})
export class Cm7902ViewComponent extends AbstractCommonView<TestSchema> {
    constructor(commonService: CommonService, route: ActivatedRoute) {
      super(commonService, "sample/exuser", route, 'id');
    }

  }
