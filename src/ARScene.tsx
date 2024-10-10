import React, { useEffect, useRef } from 'react';
import { GLView } from 'expo-gl';
import { Renderer } from 'expo-three';
import { THREE } from 'three';

export default function ARScene() {
    const glRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, cube;

        const setupScene = async () => {
            const gl = glRef.current;

            // Créer une scène
            scene = new THREE.Scene();

            // Configurer la caméra
            camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
            camera.position.z = 5;

            // Créer un renderer avec expo-three
            renderer = new Renderer({ gl });
            renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

            // Ajouter un cube (vous pouvez remplacer cela par une image plane)
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            const animate = () => {
                requestAnimationFrame(animate);

                // Animer le cube (ou l'image)
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);

                gl.endFrameEXP();
            };

            animate();
        };

        setupScene();
    }, []);

    return (
        <GLView
            style={{ flex: 1 }}
            ref={glRef}
            onContextCreate={(gl) => {
                glRef.current = gl;
            }}
        />
    );
}
