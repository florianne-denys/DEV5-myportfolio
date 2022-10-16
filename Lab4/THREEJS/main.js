import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import House from './src/House';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls( camera, renderer.domElement );

//light 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
//add light in house
const addLight = (x, y, z) => {
	const light = new THREE.PointLight(0xffffff, 0.5);
	light.position.set(x, y, z);
	scene.add(light);
}
addLight(0, 5, 0);

//add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 2, 1);
scene.add(directionalLight);

// add house
const house = new House();
scene.add(house.group);

//add sphere 
const sphereGeometry = new THREE.SphereGeometry( 100, 32, 32 );
const sphereMaterial = new THREE.MeshLambertMaterial( {
	color: 0x808080,
	map: new THREE.TextureLoader().load( './public/assets/textures/sky.jpeg' ),
	side: THREE.BackSide,
} );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

function animate() {
  requestAnimationFrame( animate );

  renderer.render( scene, camera );
};

animate();