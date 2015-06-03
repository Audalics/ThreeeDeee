function VIEWPORT(ele)
{
  this.element = ele || document.createElement("div");
  this.visible = true;

  this.isVisible = function()
  {
    return this.visible;
  }

  this.resize = function(nWidth, nHeight)
  {
    this.element.style.width = nWidth;
    this.element.style.height = nHeight;
  }

  this.scene;
  this.camera;
  this.renderer;


  this.init = function()
  {
    var geometry, material, mesh;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, this.element.offsetWidth / this.element.offsetHeight, 1, 10000);
    this.camera.position.z = 1000;

    geometry = new THREE.CubeGeometry( 5, 5, 5 );

    var cubes = new THREE.Object3D();
    this.scene.add( cubes );

    var xRange = this.element.offsetWidth * 2;
    var yRange = this.element.offsetHeight * 2;
    var zRange = 500;

    for(var i = 0; i < 2500; i++ ) {
      var grayness = Math.random() * 0.5 + 0.25;
      material = new THREE.MeshBasicMaterial();
      var cube = new THREE.Mesh( geometry, material );
      material.color.setRGB( grayness, grayness, grayness );
      cube.position.set(xRange * (0.5 - Math.random()), yRange * (0.5 - Math.random()), zRange * (0.5 - Math.random()));
      cube.rotation.set(Math.random(), Math.random(), Math.random());
      cube.grayness = grayness;
      cubes.add( cube );
    }

    this.geometry = new THREE.BoxGeometry(10, 100, 100);
    this.material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false});

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 0, 1 );
    this.scene.add( light );

    this.scene.add( new THREE.AmbientLight( 0x404040 ) );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.element.offsetWidth, this.element.offsetHeight);

    this.element.appendChild(this.renderer.domElement);

  }

  this.animate = function()
  {
    this.mesh.position.x += 0.5;
    this.mesh.rotation.y -= 0.05;

    this.renderer.render(this.scene, this.camera);
  }
}
