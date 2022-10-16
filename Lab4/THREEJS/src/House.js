import * as THREE from 'three'

export default class House{
    constructor(){
        this.group = new THREE.Group();
        this.createHouse();
    }
    createHouse(){
        //backside
        const side1Geometry = new THREE.BoxGeometry( 4, 5, 0.1 );
        const side1Material = new THREE.MeshStandardMaterial( {
            color: 0xffffff,
            map: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Base_Color.jpg' ),
            aoMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_ambientOcclusion.jpg' ),
            normalMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Normal.jpg' ),
            roughnessMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Roughness.jpg' ),
            side: THREE.DoubleSide

        } );
        const side1 = new THREE.Mesh( side1Geometry, side1Material );
        this.group.add( side1 );
        side1.position.z = -2;
        


        //leftside
        const side2Geometry = new THREE.BoxGeometry( 0.1, 5, 4 );
        const side2Material = new THREE.MeshStandardMaterial( {
            color: 0xffffff,
            map: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Base_Color.jpg' ),
            aoMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_ambientOcclusion.jpg' ),
            normalMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Normal.jpg' ),
            roughnessMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Roughness.jpg' ),
            side: THREE.DoubleSide
        } );
        const side2 = new THREE.Mesh( side2Geometry, side2Material );
        this.group.add( side2 );
        side2.position.x = -2;
        //rightside
        const side3Geometry = new THREE.BoxGeometry( 0.1, 5, 4 );
        const side3Material = new THREE.MeshStandardMaterial( {
            color: 0xffffff,
            map: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Base_Color.jpg' ),
            aoMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_ambientOcclusion.jpg' ),
            normalMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Normal.jpg' ),
            roughnessMap: new THREE.TextureLoader().load( './public/assets/textures/Terracotta_Tiles_002_Roughness.jpg' ),
            side: THREE.DoubleSide
        } );
        const side3 = new THREE.Mesh( side3Geometry, side3Material );
        this.group.add( side3 );
        side3.position.x = 2;

        //left roof
        const roof1Geometry = new THREE.BoxGeometry( 0.1, 4.5, 4 );
        const roof1Material = new THREE.MeshLambertMaterial( { 
            color: 0x808080,
            map: new THREE.TextureLoader().load( './public/assets/textures/roof.webp' ),
        } );
        const roof1 = new THREE.Mesh( roof1Geometry, roof1Material );
        this.group.add( roof1 );
        roof1.position.x = -1.8;
        roof1.position.y = 2.65;
        roof1.rotation.z = 2.19;
        //leftside
        const roof2Geometry = new THREE.BoxGeometry( 0.1, 4.5, 4 );
        const roof2Material = new THREE.MeshLambertMaterial( { 
            color: 0x808080,
            map: new THREE.TextureLoader().load( './public/assets/textures/roof.webp' )
         } );
        const roof2 = new THREE.Mesh( roof2Geometry, roof2Material );
        this.group.add( roof2 );
        roof2.position.x = 1.8;
        roof2.position.y = 2.65;
        roof2.rotation.z = -2.19;
    }
}