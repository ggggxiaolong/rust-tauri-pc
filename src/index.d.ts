// import { Mesh, Matrix4 } from "@types/three";

declare module "three/examples/jsm/physics/OimoPhysics" {
  export async function OimoPhysics(): OimoPhysicsMete;

  export interface OimoPhysicsMete {
    addMesh(mesh: Mesh, mass: number = 0);
    setMeshPosition(mesh: Mesh, position: Vector3, index: number = 0);
  }
}
