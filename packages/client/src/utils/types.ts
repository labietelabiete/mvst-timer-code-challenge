/**
 * State type
 */

export interface State {
  isLight: boolean;
  totalTime: number | boolean;
}

/**
 * Reducer type
 */

export interface Reducer {
  type: string;
  payload: boolean | number;
}

/**
 * Boolean theme interface
 */
export interface ThemeProp {
  isLight: boolean;
}

/**
 * Void function type
 */
export type VoidFunction = () => void;

/**
 * Void function interface
 */
export interface VoidFunctionProp {
  handleTheme: VoidFunction;
}

/**
 * Header prop types
 *
 * handleTheme - changes the current theme (light/dark)
 * isLight - boolean to filter theme
 */

export interface HeaderProps extends ThemeProp {
  handleTheme: () => void;
}

/**
 * Timer button prop types
 *
 * loadTotalTime - refreshes total time in main view
 * isLight - boolean to filter theme
 */

export interface TimerButtonProps extends ThemeProp {
  loadTotalTime: () => void;
}

/**
 * Time type - state for TimerButton
 */

export interface TimeType {
  start: number;
  stop: number;
  current: number;
}

/**
 * Request body object
 *
 * Used in time-api to either increment or clear total time
 */

export interface RequestBody {
  [key: string]: number;
}
