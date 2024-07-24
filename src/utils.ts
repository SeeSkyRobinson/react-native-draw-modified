import simplifySvgPath from '@luncheon/simplify-svg-path';
import type { PathDataType } from './types';

export const createSVGPath = (
  points: PathDataType,
  tolerance: number,
  roundPoints: boolean
) => {

  
  // console.log('createSVGPath - points, tolerance, roundPoints', points, tolerance, roundPoints)


  if (points.length > 1) {
    try {
      const simpleSvgPath = simplifySvgPath(points, {
        precision: roundPoints ? 0 : 5,
        tolerance,
        closed: false,
      });


      // console.log('createSVGPath - simpleSvgPath', simpleSvgPath)
      return simpleSvgPath;
    } catch (error) {
      console.log('createSVGPath - error', error);
    }
  } else if (points.length === 1) {
    return `M${points[0][0]},${points[0][1]} L${points[0][0]},${points[0][1]}`;
  }

  // console.log('createSVGPath - returning with an empty string')
  return '';
};
