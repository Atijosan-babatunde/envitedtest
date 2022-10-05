import { MouseEvent } from 'react';

/**
 * Prevent event bubbling
 * @param {Object} eventObject
 */

const stopPropagation = (eventObject: MouseEvent<HTMLElement>) => {
  eventObject.stopPropagation();
};
export default stopPropagation;
