import { Size } from "./model";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls"

export namespace Util {
  export function onResize(
    size: Size,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
  ) {
    camera.aspect = size.aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
  }

  export function initRenderer(size: Size): THREE.WebGLRenderer {
    console.log(size);
    
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(size.pixelRatio);
    // document.body.appendChild(renderer.domElement)
    return renderer;
  }

  export function initCamera(
    size: Size,
    fov: number = 50,
    far: number = 1000,
  ): THREE.PerspectiveCamera {
    return new THREE.PerspectiveCamera(fov, size.aspect, 0.1, far);
  }

  export function addAxesHelper(
    scene: THREE.Scene,
    size: number = 1
  ): THREE.AxesHelper {
    const helper = new THREE.AxesHelper(size);
    scene.add(helper);
    return helper;
  }

  export function initControl(
    camera: THREE.Camera,
    renderer: THREE.WebGLRenderer
  ): OrbitControls {
    const control =  new OrbitControls(camera, renderer.domElement);
    control.enableDamping = true;
    return control
  }

  export function initTrackBallControl(
    camera: THREE.Camera,
    renderer: THREE.WebGLRenderer
  ): TrackballControls {
    const control =  new TrackballControls(camera, renderer.domElement);
    control.handleResize();
    return control
  }
}
