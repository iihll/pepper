import { ElementUIComponent, ElementUIComponentSize } from './component'


export declare class ElButton extends ElementUIComponent {
  /** Size of Input, works when type is not 'textarea' */
  size: ElementUIComponentSize

  /** input or textarea content tips */
  placeholder: String

  /** Whether textarea */
  textarea: boolean

  /** Number of rows of textarea, only works when type is 'textarea' */
  rows: [String, Number]

  /** Whether textarea has an adaptive height, only works when type is 'textarea' */
  autoHeight: boolean

  /** Same as readonly in native input */
  readonly: boolean

  /** Whether Input is disabled */
  disabled: boolean
}