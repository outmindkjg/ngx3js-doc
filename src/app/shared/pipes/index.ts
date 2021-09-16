import { CodeFindFilterPipe } from './code-find-filter.pipe';
import { CodeTranslatePipe } from './code-translate.pipe';
import { CodeValueLocalePipe } from './code-value-locale.pipe';
import { CodeValuePipe } from './code-value.pipe';
import { CodeVoPipe } from './code-vo.pipe';
import { CodePipe } from './code.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { FileSizePipe } from './file-size.pipe';
import { ItemValuePipe } from './item-value.pipe';
import { LimitByPipe } from './limit-by.pipe';
import { LinkPipe } from './link.pipe';
import { LongCutPipe } from './long-cut.pipe';
import { MaskingDataPipe } from './masking.pipe';
import { MeasurementPipe } from "./measurement.pipe";
import { Nl2brPipe } from './nl2br.pipe';
import { NumberFormatPipe } from './number-format.pipe';
import { PricePipe } from './price.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { TelShortPipe } from './tel-short.pipe';


export const COMMON_PIPES = [
  DateFormatPipe,
  CodeFindFilterPipe,
  CodeTranslatePipe,
  CodeValuePipe,
  CodeValueLocalePipe,
  DateFormatPipe,
  LinkPipe,
  PricePipe,
  Nl2brPipe,
  LongCutPipe,
  SafeHtmlPipe,
  CodeVoPipe,
  ItemValuePipe,
  FileSizePipe,
  NumberFormatPipe,
  PricePipe,
  LimitByPipe,
  TelShortPipe,
  MeasurementPipe,
  MaskingDataPipe,
  CodePipe
]

