import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { DxDataGridComponent } from "devextreme-angular";
import { AbstractCommonComponent } from "../../abstract.common";
import { GridConfigVo } from "../../common.interface";
import { CommonService } from "../../services";
import * as XLSX from "xlsx";

@Component({
  selector: "app-grid-control",
  templateUrl: "./grid-control.component.html",
  styleUrls: ["./grid-control.component.scss"],
})
export class GridControlComponent
  extends AbstractCommonComponent
  implements OnInit, AfterViewInit
{
  @Input() dataGrid: DxDataGridComponent = null;
  @Input() gridConfig: GridConfigVo = null;

  @Input() upload: boolean = false;
  @Input() download: boolean = false;
  @Input() add: boolean = false;
  @Input() delete: boolean = false;
  @Input() search: boolean = false;

  @Output() onUpload: EventEmitter<any> = new EventEmitter();

  query: string = "";

  constructor(commonService: CommonService) {
    super(commonService);
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  uploadFile(event: any) {
    let fileReader = new FileReader();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const arrayBuffer = fileReader.result as ArrayBuffer;
        const data = new Uint8Array(arrayBuffer);
        const arr = new Array();
        for (let i = 0; i != data.length; ++i) {
          arr[i] = String.fromCharCode(data[i]);
        }
        const workbook = XLSX.read(arr.join(""), { type: "binary" });
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        const jsonlist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
        if (jsonlist.length > 0) {
          this.openNotify("MSG_EXCEL_IMPORTED", "success", 5000, {
            rowCnt: jsonlist.length,
          });
          this.onUpload.emit(jsonlist);
        } else {
          this.openNotify("MSG_EXCEL_IMPORT_ERROR", "error", 5000, {
            fileName: file.name,
          });
        }
      };
    }
  }

  downloadFile(e: any) {
    if (this.dataGrid !== null) {
      switch (e.itemData.value) {
        case "all":
          this.dataGrid.instance.exportToExcel(false);
          break;
        case "selected":
          const selectedRowKeys = this.dataGrid.instance.getSelectedRowKeys();
          if (selectedRowKeys.length > 0) {
            this.dataGrid.instance.exportToExcel(true);
          } else {
            this.openAlert("MSG_GRID_NOSELECTED");
          }
          break;
      }
    }
  }

  addRow() {
    if (this.dataGrid !== null) {
      this.dataGrid.instance.addRow();
    }
  }

  deleteRow() {
    if (this.dataGrid !== null) {
      const selectedRowKeys = this.dataGrid.instance.getSelectedRowKeys();
      if (selectedRowKeys.length > 0) {
        selectedRowKeys.forEach((key) => {
          const index = this.dataGrid.instance.getRowIndexByKey(key);
          this.dataGrid.instance.deleteRow(index);
        });
      } else {
        this.openAlert("MSG_GRID_NOSELECTED");
      }
    }
  }

  queryChanged(event: any) {
    if (this.dataGrid !== null) {
      this.dataGrid.instance.searchByText(this.query);
    }
  }

  exceldownItems = [
    {
      text: "Export all data",
      icon: "xlsxfile",
      value: "all",
    },
    {
      text: "Export selected rows",
      icon: "exportselected",
      value: "selected",
    },
  ];
}
