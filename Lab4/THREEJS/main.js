import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import House from './src/House';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls( camera, renderer.domElement );

//light 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
//add light in house
const light = new THREE.PointLight(0xffffff, 0.5);
light.position.set(3, 5, 3);
scene.add(light);
//add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(2, 2, 1);
scene.add(directionalLight);

// add house
const house = new House();
scene.add(house.group);

//add plane
const planeGeometry = new THREE.PlaneGeometry( 2.3, 2.5 );
const planeMaterial = new THREE.MeshStandardMaterial( { 
	color: 0xffffff,
	map: new THREE.TextureLoader().load( './public/assets/textures/me.jpg' ),
 } );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.position.set(0, 0, -1.8);
scene.add( plane );

//add sphere 
const sphereGeometry = new THREE.SphereGeometry( 100, 32, 32 );
const sphereMaterial = new THREE.MeshLambertMaterial( {
	color: 0x808080,
	map: new THREE.TextureLoader().load( './public/assets/textures/sky.jpeg' ),
	side: THREE.BackSide,
} );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

//stars
const gltfLoader = new GLTFLoader();
const addStar = (x, y, z, s) => {
	let star;
	gltfLoader.load('/assets/models/gold_star/scene.gltf', (gltf) => {
		star = gltf.scene;
		star.position.set(x, y, z);
		star.scale.set(s, s, s);
		scene.add(star);
	});
}
for(let i = 0; i < 200; i++) {
	let sign = Math.random() < 0.5 ? 1 : -1;
	let x = Math.random() * 100 * sign;
	sign = Math.random() < 0.5 ? 1 : -1;
	let y = Math.random() * 100 * sign;
	sign = Math.random() < 0.5 ? 1 : -1;
	let z = Math.random() * 100 * sign;
	let s = Math.random() * 5;
	addStar(x, y, z, s);
}
//garden
let garden;
gltfLoader.load('/assets/models/pond/scene.gltf', (gltf) => {
	garden = gltf.scene;
	garden.position.set(4, -2.5, 5);
	garden.rotateY(Math.PI / -1.5);
	garden.scale.set(0.01, 0.01, 0.01);
	scene.add(garden);
});

//duck
let cube;
const cubeGeometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.position.set(5.3, -3, 5.4);
scene.add( cube );
let duck;
gltfLoader.load('/assets/models/duck/scene.gltf', (gltf) => {
  duck = gltf.scene;
    duck.position.set(0.8, 0, 1);
	duck.rotateY(Math.PI / 1.5);
    cube.add(duck);
});

camera.position.z = 18;
camera.position.y = 2;
camera.position.x = 0;
camera.rotateY(-0.2);


function animate() {
  requestAnimationFrame( animate );

  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();