<template>
  <div ref="container">
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, Ref } from "vue";
import * as THREE from "three";
import {
  OimoPhysics,
  OimoPhysicsMete,
} from "three/examples/jsm/physics/OimoPhysics";
import { Size } from "../../model/model";
import { Util } from "../../model/utils";

const size = Size.getInstance();
size.setOffsite(180, 40);
const scene = new THREE.Scene();
const camera = Util.initCamera(size);
let renderer = Util.initRenderer(size);
const control = Util.initControl(camera, renderer);
let boxes: THREE.InstancedMesh;
let spheres: THREE.InstancedMesh;
let light: THREE.DirectionalLight;
let floor: THREE.Mesh;
let physics: OimoPhysicsMete;
const position = new THREE.Vector3();

const container: Ref<HTMLDivElement | null> = ref(null);
onMounted(async () => {
  if (container.value) {
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "20px";
    renderer.domElement.style.left = "160px";

    container.value.appendChild(renderer.domElement);
    init();
    addMesh();
    addLight();
    addShadow();
    await addPhysics();
    render();
  }
});

onUnmounted(()=>{
  document.body.removeChild(renderer.domElement)
})

function init() {
  scene.background = new THREE.Color(0x888888);
  camera.position.set(4, 4, 4);
  scene.add(camera);
  renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild(renderer.domElement);
  size.onResize(() => {
    Util.onResize(size, camera, renderer);
  });
}

function addMesh() {
  const material = new THREE.MeshLambertMaterial();
  boxes = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.1, 0.1, 0.1),
    material,
    100
  );
  spheres = new THREE.InstancedMesh(
    new THREE.SphereGeometry(0.075),
    material,
    100
  );
  const matrix = new THREE.Matrix4();
  const color = new THREE.Color();
  for (let i = 0; i < boxes.count; i++) {
    matrix.setPosition(
      Math.random() - 0.5,
      Math.random() * 2,
      Math.random() - 0.5
    );
    boxes.setMatrixAt(i, matrix);
    boxes.setColorAt(i, color.setHex(Math.random() * 0xffffff));
  }
  for (let i = 0; i < spheres.count; i++) {
    matrix.setPosition(
      Math.random() - 0.5,
      Math.random() * 2,
      Math.random() - 0.5
    );
    spheres.setMatrixAt(i, matrix);
    spheres.setColorAt(i, color.setHex(Math.random() * 0xffffff));
  }
  scene.add(boxes, spheres);

  floor = new THREE.Mesh(
    new THREE.BoxGeometry(10, 1, 10),
    new THREE.ShadowMaterial({ color: 0x111111 })
  );
  floor.position.set(0, -1, 0);
  scene.add(floor);
}

function addLight() {
  const envLight = new THREE.HemisphereLight();
  envLight.intensity = 0.3;
  scene.add(envLight);

  light = new THREE.DirectionalLight(0xffffff, 1.0);
  light.position.set(5, 5, -5);
  scene.add(light);
}

function addShadow() {
  renderer.shadowMap.enabled = true;
  light.castShadow = true;
  boxes.castShadow = true;
  spheres.castShadow = true;
  floor.receiveShadow = true;
}

async function addPhysics() {
  physics = await OimoPhysics();
  physics.addMesh(floor, 0);
  physics.addMesh(boxes, 0.5);
  physics.addMesh(spheres, 0.5);
}

function render() {
  renderer.render(scene, camera);
  control.update();
  let index = Math.floor(Math.random() * boxes.count);
  position.set(0, Math.random() + 1, 0);
  physics.setMeshPosition(boxes, position, index);
  index = Math.floor(Math.random() * spheres.count);
  position.set(0, Math.random() + 1, 0);
  physics.setMeshPosition(spheres, position, index);
  requestAnimationFrame(render);
}
</script>

<style scoped>
.canvas{
  position: absolute;
  top: 20px;
  left: 140px;
}
</style>