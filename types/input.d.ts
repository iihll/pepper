import { PepperComponent } from './component'

/** Input Component */
export declare class PInput extends PepperComponent {
  /** Textarea type, default input */
  textArea: boolean

  /** Determine whether it's readonly */
  readonly: boolean

  /** Determine whether it's disabled */
  disabled: boolean

  /** Determines whether height adaptation is on */
  autoSize: boolean

  /** Input prompt placeholder */
  placeholder: string
}
