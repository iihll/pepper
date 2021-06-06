import { PepperComponent } from './component'

/** Link type */
export type LinkType = 'yellow' | 'green' | 'red' | 'blue' | 'gray' | 'pepper'

/** Link Component */
export declare class PLink extends PepperComponent {
  /** Link type */
  type: LinkType

  /** Link Jump Connection */
  href: String

  /** Link Jump Methods: self or blank */
  target: string

  /** Disable the link */
  disabled: boolean

  /** underline of link */
  underline: boolean
}
