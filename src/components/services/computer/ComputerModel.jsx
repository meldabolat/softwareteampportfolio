import { useGLTF } from "@react-three/drei";

export function ComputerModel(props) {
  const { nodes, materials, error } = useGLTF("/computerModel.glb");

  if (error) {
    console.error("Error loading GLTF:", error);
    return <div>Error loading model</div>; // You can display a loading/error message here
  }

  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.MacBookPro}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.MacBookPro}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.MacBookPro}
      />
    </group>
  );
}

useGLTF.preload("/computerModel.glb");
