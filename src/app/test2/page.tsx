"use client"
import { useEffect } from 'react';
import './styles.css'; // Adjust the path if necessary
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Page() {
    useEffect(() => {
        const scene = new THREE.Scene()

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 2

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)

        window.addEventListener('resize', function () {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        })

        const fullscreenIcon = document.getElementById('fullscreenIcon')
        if (fullscreenIcon) {
            fullscreenIcon.addEventListener('pointerup', () => {
                if (renderer.domElement.requestFullscreen) {
                    renderer.domElement.requestFullscreen()
                } else if (renderer.domElement.webkitRequestFullscreen) {
                    /* Safari */
                    renderer.domElement.webkitRequestFullscreen()
                } else if (renderer.domElement.msRequestFullscreen) {
                    /* IE11 */
                    renderer.domElement.msRequestFullscreen()
                }
            })
        }

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true

        const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial({ wireframe: true }))
        scene.add(cube)

        const clock = new THREE.Clock()
        let delta

        function animate() {
            requestAnimationFrame(animate)

            delta = clock.getDelta()

            cube.rotation.x += delta
            cube.rotation.y += delta

            controls.update()

            renderer.render(scene, camera)
        }

        animate()

        // Cleanup on component unmount
        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []); // Empty dependency array to run once on mount

    return <div id="fullscreenIcon"></div>;
}