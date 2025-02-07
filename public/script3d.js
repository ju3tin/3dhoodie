document.addEventListener("DOMContentLoaded", function() {
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
        renderer.setSize(window.innerWidth, window.innerHeight / 2); // Half of the viewport height for FBX container
        document.getElementById("fbxContainer").appendChild(renderer.domElement);

        // Lighting
        const light = new THREE.AmbientLight(0x404040); // Ambient light for soft illumination
        scene.add(light);

        // Load FBX Model
        const loader = new THREE.FBXLoader();
        loader.load('dude.fbx', function (object) {
            fbxModel = object;
            fbxModel.scale.set(0.5, 0.5, 0.5); // Scale model
            scene.add(fbxModel);
        });

        // Handle resizing of window
        window.addEventListener('resize', onWindowResize, false);
    }

    function animate() {
        requestAnimationFrame(animate);
        
        // Rotate model if loaded
        if (fbxModel) {
            fbxModel.rotation.x += 0.01;
            fbxModel.rotation.y += 0.01;
        }

        // Render the scene
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight / 2);
    }

    // The function that gets called on button click
    window.startGame = function() {
        console.log('Starting the adventure...');
    };

    init();
    animate();
});