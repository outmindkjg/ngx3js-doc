import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DxDataGridComponent } from "devextreme-angular";
import ArrayStore from "devextreme/data/array_store";
import { AbstractCommonList } from "../../../shared/abstract.common";
import {
  CodeGroupVo,
  CodeItemVo,
  CudItemListVo,
  CudItemVo,
  FormControlInfos,
  FormSchema,
  FSType,
  GridConfigVo,
} from "../../../shared/common.interface";
import { CommonService } from "../../../shared/services";

@Component({
  selector: "app-cm7700",
  templateUrl: "./cm7700.component.html",
  styleUrls: ["./cm7700.component.scss"],
})
export class Cm7700Component extends AbstractCommonList<CodeGroupVo> {
  constructor(commonService: CommonService, formBuilder: FormBuilder) {
    super(
      commonService,
      "cm7710/group",
      formBuilder,
      {
        cmnGrpCd: [],
      },
      null,
      { limit: 1000 },
      "cmnGrpCd"
    );
    const formSchema: FormSchema = {
      cmnGrpCd: [FSType.R],
      cmnGrpCdNm: [FSType.R],
      jobStCd: [FSType.R],
      cdDesc: [FSType.R],
      useYn: [FSType.R],
    };
    this.modifyForm = this.getFormGroup(formBuilder, formSchema);
    this.modifyFormControls = this.getFormControlInfos(
      this.modifyForm,
      formSchema
    );
  }

  public focusedGroupCodeRowKey: string = null;

  public focusedRowChanged(event: any) {
    setTimeout(() => {
      const row = event.row;
      const data = row.data;
      const key = row.key;
      this.checkModifyForm(key).then(result => {
        if (result) {
          if (this.modifyKey !== key) {
            this.modifyKey = key;
            this.setFormValue(data, this.modifyForm);
            if (this.modifyDataGrid && this.modifyDataGrid.instance) {
              this.modifyDataGrid.instance.beginCustomLoading("Loading");
            }
            this.getList("cm7710/code/" + key, {}, 0, 1000).then((result) => {
              this.modifyItems = result;
              this.checkModifyGridList();
            });
          }
        } else {
          this.focusedGroupCodeRowKey = this.modifyKey;
        }
      })
    }, 100);
  }

  public checkModifyForm(key : string): Promise<boolean>  {
    if (!this.modifyForm.pristine && key !== this.modifyKey) {
      return this.openConfirm('수정중인 데이터가 있습니다. 작업을 취소하시겠습니까?');
    } else {
      return new Promise<boolean>((resolve) => {
        resolve(true);
      });
    }
  }

  public modifyItems: CodeItemVo[] = [];

  public modifyGridConfig: GridConfigVo = {
    hasUnsaved: false,
    paging: { enabled: false, pageIndex: 0, pageSize: 30 },
    allowAdding: false,
    editing: {
      mode: "cell",
      allowAdding: false,
      allowUpdating: true,
      allowDeleting: true,
      useIcons: true,
    },
  };

  protected modifyUnSavedData: { [key: string]: CudItemVo<CodeItemVo> } = {};

  public modifyDataSource: ArrayStore = null;

  @ViewChild("modifyDataGrid") modifyDataGrid: DxDataGridComponent = null;

  modifyKey: string = null;

  protected checkModifyGridList() {
    this.modifyDataSource = this.getDataSource(
      this.modifyItems,
      "cmnCd",
      this.modifyUnSavedData,
      this.modifyGridConfig,
      (key) => {
        return this.modifyDataGrid.instance.byKey(key);
      }
    );
    if (this.modifyDataGrid !== null) {
      setTimeout(() => {
        this.modifyDataGrid.instance.endCustomLoading();
      }, 500);
    }
  }

  verificationKey() {
    const cmnGrpCd = this.modifyFormControls.cmnGrpCd.control;
    if (cmnGrpCd.valid) {
      this.getView("cm7710/group/valid/" + cmnGrpCd.value).then((result) => {
        if (result) {
          this.openAlert("검증이 완료 되었습니다.");
        } else {
          this.openAlert("다른 코드를 입력해주세요.");
        }
      });
    }
  }

  newData() {
    this.checkModifyForm(null).then(result => {
      if (result) {
        this.modifyKey = null;
        this.setFormValue(
          {
            cmnGrpCd: "",
            cmnGrpCdNm: "",
            jobStCd: "",
            cdDesc: "",
            useYn: "Y",
          },
          this.modifyForm
        );
        this.modifyItems = [];
        this.checkModifyGridList();
      } else {
        this.focusedGroupCodeRowKey = this.modifyKey;
      }
    });
  }

  newRow() {
    if (this.modifyDataGrid !== null) {
      this.modifyDataGrid.instance.addRow();
    }
  }

  deleteSelectedItem() {
    if (this.modifyDataGrid !== null) {
      const selectedRowKeys = this.modifyDataGrid.instance.getSelectedRowKeys();
      if (selectedRowKeys.length > 0) {
        selectedRowKeys.forEach((key) => {
          const index = this.modifyDataGrid.instance.getRowIndexByKey(key);
          this.modifyDataGrid.instance.deleteRow(index);
        });
      } else {
        this.openAlert("MSG_GRID_NOSELECTED");
      }
    }
  }

  modifyData() {
    setTimeout(() => {
      if (this.modifyForm.valid) {
        const formValue = this.modifyForm.value;
        const formItemValue: CudItemListVo<CodeItemVo> = this.getGridUnSaved(
          this.modifyGridConfig,
          this.modifyUnSavedData
        );
        formValue.codes = formItemValue;
        this.getCreate("cm7710/group", {
          type: this.modifyKey ? "update" : "insert",
          item: formValue,
        }).then(() => {
          this.goSearch();
        });
      }
    }, 500);
  }

  /**
   * 폼 그룹
   *
   * @type {FormGroup}
   */
  public modifyForm: FormGroup;

  public modifyFormControls: FormControlInfos = {};
}
