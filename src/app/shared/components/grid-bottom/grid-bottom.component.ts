import {
  AfterViewInit, Component, EventEmitter, Input,
  OnInit,
  Output
} from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { AbstractCommonComponent } from "../../abstract.common";
import { GridConfigVo } from "../../common.interface";
import { CommonService } from "../../services";

@Component({
  selector: "app-grid-bottom",
  templateUrl: "./grid-bottom.component.html",
  styleUrls: ["./grid-bottom.component.scss"],
})
export class GridBottomComponent extends AbstractCommonComponent implements OnInit, AfterViewInit {
  @Input() dataGrid: DxDataGridComponent = null;
  @Input() gridConfig: GridConfigVo = null;
  
  @Input() save: boolean = false;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(commonService : CommonService) {
    super(commonService);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  saveGrid() {
    this.onSave.emit();
  }
}
