import Vue from 'vue'

/** PepperUI component common definition */
export declare class PepperUIComponent extends Vue {
  /** Install component into Vue */
  static install(vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type PepperUIComponentSize = 's' | 'm' | 'l'
