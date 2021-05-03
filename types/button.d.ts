import { ElementUIComponent, ElementUIComponentSize } from './component'

/** Button type */
export type ButtonType = 'yellow' | 'green' | 'red' | 'blue' | 'purple'

// /** Same as native button's type */
// export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu'

export declare class ElButton extends ElementUIComponent {
  /** Button size */
  size: ElementUIComponentSize

  /** Button type */
  type: ButtonType

  /** Determine whether it's a plain button */
  plain: boolean

  /** Determine whether it's a round button */
  circle: boolean

  /** The presentation of elements */
  block: boolean

  /** Disable the button */
  disabled: boolean

  /** Button icon, accepts an icon name of Element icon component */
  icon: string

  /** Determine whether it's loading */
  loading: boolean
}