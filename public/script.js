// script.js
let scene, camera, renderer, fbxModel;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Black background

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('fbxContainer').appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0x404040); // Ambient light for soft illumination
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // FBX Loader
    const loader = new THREE.FBXLoader();
    loader.load('dude.fbx', function (object) {
        fbxModel = object;
        fbxModel.scale.set(0.5, 0.5, 0.5); // Scale model down
        scene.add(fbxModel);
    }, undefined, function (error) {
        console.error('Error loading FBX model:', error);
    });

    // Handle resizing of window
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate model if loaded
    if (fbxModel) {
        fbxModel.rotation.y += 0.01; // Rotate model for effect
    }

    // Render the scene
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Start Game Function
function startGame() {
    console.log('Adventure started!');
    // You can add your game start logic here, like changing scenes
}

document.getElementById("startButton").addEventListener("click", startGame);

// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', (event) => {
    init();
    animate();
});