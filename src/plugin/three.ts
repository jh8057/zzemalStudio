import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//control camera on Web
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { AxesHelper } from 'three';
// import backgroundImg from '../assets/space.jpeg';
import water from '../assets/water.jpeg';
export default class Experience {
    canvas: any;

    constructor(canvas: any) {
        this.canvas = canvas;

        //basic setting
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas as HTMLCanvasElement,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(100);
        camera.position.setY(0);
        camera.position.setX(0);

        renderer.shadowMap.enabled = true;

        renderer.render(scene, camera);

        //light
        const poinLight = new THREE.PointLight(0xae9366, 3, 20);
        poinLight.position.set(4.4, 6.8, 0.2);

        // const poinLight2 = new THREE.PointLight(0xffffff, 2, 30);
        // poinLight2.position.set(-1, 8, -18);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        // scene.add(poinLight, poinLight2);
        scene.add(poinLight, ambientLight);

        //camera controll
        // const controls = new OrbitControls(camera, renderer.domElement);

        //background
        scene.background = new THREE.Color(0xffffff);

        const textureLoader = new THREE.TextureLoader();
        // scene.background = textureLoader.load(backgroundImg);

        // // make torus
        const geometry = new THREE.TorusGeometry(28, 2, 55, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0xae9366 }); //light apply to standardMaterial
        const torus = new THREE.Mesh(geometry, material);
        // torus.castShadow = true;

        scene.add(torus);

        // // make Sphere
        const sphereGeometry = new THREE.SphereGeometry(4);
        const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: false, map: textureLoader.load(water) }); //light apply to standardMaterial
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(0, 10, -10);
        // torus.castShadow = true;

        //make plane
        const planeGeometry = new THREE.PlaneGeometry(30, 30);
        const splaneMaterial = new THREE.MeshStandardMaterial({ color: 0xae9366 }); //light apply to standardMaterial
        const plane = new THREE.Mesh(planeGeometry, splaneMaterial);
        plane.rotation.x = -0.5 * Math.PI;
        // plane.receiveShadow = true;

        scene.add(sphere, plane);
        // scene.background = new THREE.Color(0xffffff);

        // const sphereID = sphere.id;
        //mouse Click
        // const mousePosition = new THREE.Vector2();

        // window.addEventListener('mousemove', function (e) {
        //     mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
        //     mousePosition.y = (e.clientY / window.innerHeight) * 2 - 1;
        //     console.log(mousePosition.x, mousePosition.y);
        // });

        // const rayCaster = new THREE.Raycaster();

        // Instantiate a loader
        // const loader = new GLTFLoader();

        // let mixer: any;
        // Load a glTF resource
        // loader.load(
        //     // resource URL
        //     '/blender/robot.gltf',
        //     // called when the resource is loaded
        //     function (gltf) {
        //         const model = gltf.scene;
        //         scene.add(model);
        //         mixer = new THREE.AnimationMixer(model);
        //         const clips = gltf.animations;

        //         const clip = THREE.AnimationClip.findByName(clips, 'goFront');
        //         const action = mixer.clipAction(clip);
        //         action.play();

        //         const clock = new THREE.Clock();

        //         function animate() {
        //             requestAnimationFrame(animate);
        //             if (mixer) mixer.update(clock.getDelta());

        //             renderer.render(scene, camera);
        //         }

        //         animate();
        //     }
        // );

        const cursor = {
            x: 0,
            y: 0,
        };
        let cnt = 0;
        window.addEventListener('mousemove', (event) => {
            cnt++;
            cursor.x = event.clientX / window.innerWidth - 0.5;
            cursor.y = -(event.clientY / window.innerHeight - 0.5);
            // ThreeJS에서와 브라우저에서 y축을 음양의 방향이 서로 다르므로 -1을 곱해준다.

            if (cnt % 181 === 0) console.log('X:', cursor.x, 'Y:', cursor.y);
        });

        function animate() {
            requestAnimationFrame(animate);

            //animation
            // torus.rotation.x += 0.01;
            // torus.rotation.y += 0.01;

            //camera moving
            // camera.rotation.x += 0.01;
            // camera.rotation.y += 0.01;
            camera.rotation.z += 0.01;

            camera.position.x = cursor.x * 5;
            camera.position.y = cursor.y * 5;
            // camera.position.z = 100 + cursor.y * 10;
            // camera.lookAt();

            renderer.render(scene, camera);
        }

        animate();
    }
}
