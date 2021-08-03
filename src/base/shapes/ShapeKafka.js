import * as THREE from 'three';
import ShapesFactory from 'vizceral/src/base/ShapesFactory';
import ShapeParent from 'vizceral/src/base/shapes/ShapeParent';

class ShapeKafka extends ShapeParent {
  _createInnerGeometry (radius, curveSegments) {
    console.log('_createInnerGeometry');
    const rawPolyString = '37.65 16.09 36.83 18.08 35.67 19.91 34.21 21.51 19.08 36.38 17.16 37.38 15.11 38.03 12.96 38.32 10.8 38.23 8.69 37.77 6.69 36.95 4.87 35.79 3.27 34.34 1.95 32.63 0.94 30.71 0.29 28.65 0 26.51 0.09 24.35 0.55 22.24 1.37 20.24 2.53 18.41 17.41 3.27 19.12 1.95 21.03 0.94 23.09 0.29 25.23 0 27.39 0.09 29.51 0.55 31.51 1.37 33.33 2.53 34.93 3.98 36.25 5.7 37.25 7.61 37.91 9.67 38.2 11.81 38.11 13.97 37.65 16.09';
    // X-offset: -19.1, Y-offset: -19.16 puts the center of the shape at (0,0)
    const polyShape = ShapesFactory.getShapeFromPolyPoints(rawPolyString, ' ', -19.1, -19.16);

    return new THREE.ShapeGeometry(polyShape, curveSegments);
  }
}
console.log('ShapeKafka');

ShapesFactory.registerShape('kafka', ShapeKafka);

export default ShapeKafka;
