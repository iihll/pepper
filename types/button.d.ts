import { PepperUIComponent, PepperUIComponentSize } from './components'

/** Button type */
export type ButtonType = 'yellow' | 'green' | 'red' | 'blue' | 'gray' | 'pepper'

/** Button Component */
export declare class PButton extends PepperUIComponent {
  /** Button size */
  size: PepperUIComponentSize

  /** Button type */
  type: ButtonType

  /** Determine whether it's a round button */
  circle: boolean

  /** Determine whether it's loading */
  loading: boolean

  /** Disable the button */
  disabled: boolean

  /** Text type the button */
  test: boolean
}
