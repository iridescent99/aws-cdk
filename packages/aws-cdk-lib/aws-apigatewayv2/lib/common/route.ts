import { IResource } from '../../../core';

/**
 * Represents a route.
 */
export interface IRoute extends IResource {
  /**
   * Id of the Route
   * @attribute
   */
  readonly routeId: string;
}
