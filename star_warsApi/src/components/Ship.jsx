/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ship.gltf 
Author: Daniel (https://sketchfab.com/DanielAndersson)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-wars-imperial-ii-star-destroyer-b8bd2d35f7604670ab85242c06c6d280
Title: Star Wars: Imperial II Star Destroyer
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/ship.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.LightYellowGlow} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Dark} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.ReflectiveGlass} />
      <group position={[0, 2.478, 324.824]}>
        <mesh geometry={nodes.Object_25.geometry} material={materials.Base} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.LightYellowGlow} />
      </group>
      <mesh geometry={nodes.Object_10.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Hullplates} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.BlueEngineGlow} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.Base} rotation={[0, Math.PI / 4, 0]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.LightYellowGlow} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.Hullplates} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.LightYellowGlow} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.LightYellowGlow} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.Base} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.LightYellowGlow} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.WhiteLight} />
      <mesh geometry={nodes.Object_42.geometry} material={materials.Base} />
    </group>
  )
}

useGLTF.preload('/ship.gltf')
