import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



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

//add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 2, 1);
scene.add(directionalLight);



//add a cube (backside of house)
const side1Geometry = new THREE.BoxGeometry( 4, 5, 0.1 );
const side1Material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const side1 = new THREE.Mesh( side1Geometry, side1Material );
scene.add( side1 );
side1.position.z = -2;
//add a trinalge (back side of house)
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array( [
	-2, 2.5,  0,
	 2, 2.5,  0,
	 0, 3.9, 0,
] );
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material );
mesh.position.z = -2;
scene.add( mesh );


//add a cube (leftside of house)
const side2Geometry = new THREE.BoxGeometry( 0.1, 5, 4 );
const side2Material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const side2 = new THREE.Mesh( side2Geometry, side2Material );
scene.add( side2 );
side2.position.x = -2;
//add a cube (rightside of house)
const side3Geometry = new THREE.BoxGeometry( 0.1, 5, 4 );
const side3Material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const side3 = new THREE.Mesh( side3Geometry, side3Material );
scene.add( side3 );
side3.position.x = 2;

//add a cube (left roof of house)
const roof1Geometry = new THREE.BoxGeometry( 0.1, 4.5, 4 );
const roof1Material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const roof1 = new THREE.Mesh( roof1Geometry, roof1Material );
scene.add( roof1 );
roof1.position.x = -1.8;
roof1.position.y = 2.65;
roof1.rotation.z = 2.19;
//add a cube (leftside of house)
const roof2Geometry = new THREE.BoxGeometry( 0.1, 4.5, 4 );
const roof2Material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const roof2 = new THREE.Mesh( roof2Geometry, roof2Material );
scene.add( roof2 );
roof2.position.x = 1.8;
roof2.position.y = 2.65;
roof2.rotation.z = -2.19;

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );

  renderer.render( scene, camera );
};

animate();