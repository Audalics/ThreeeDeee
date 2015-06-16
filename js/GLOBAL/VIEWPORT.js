function VIEWPORT(ele)
{
    this.element = ele || document.createElement("div");
    this.visible = true;
    this.GEO_CONTROL = {};
    this.GLOBAL = {};

    this.isVisible = function()
    {
        return this.visible;
    }

    this.resize = function(nWidth, nHeight)
    {
        this.element.style.width = nWidth;
        this.element.style.height = nHeight;

        var xOld, yOld, zOld;
        xOld = this.camera.position.x;
        yOld = this.camera.position.y;
        zOld = this.camera.position.z;

        this.camera = new THREE.PerspectiveCamera(75, (parseInt(this.element.offsetWidth, 10) / parseInt(this.element.offsetHeight, 10)), 1, 10000);
        this.camera.position.x = xOld;
        this.camera.position.y = yOld;
        this.camera.position.z = zOld;

        this.renderer.setSize(this.element.offsetWidth, this.element.offsetHeight);
    }

    this.scene;
    this.camera;
    this.renderer;


    this.init = function()
    {
        var geometry, material, mesh;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, (parseInt(this.element.offsetWidth, 10) / parseInt(this.element.offsetHeight, 10)), 1, 10000);
        this.camera.position.z = 1000;

        geometry = new THREE.CubeGeometry(5, 5, 5);

        var cubes = new THREE.Object3D();
        this.addToScene(cubes);

        var xRange = this.element.offsetWidth * 2;
        var yRange = this.element.offsetHeight * 2;
        var zRange = 500;

        for(var i = 0; i < 2500; i++){
            var grayness = Math.random() * 0.5 + 0.25;
            material = new THREE.MeshBasicMaterial();
            var cube = new THREE.Mesh(geometry, material);
            material.color.setRGB(grayness, grayness, grayness);
            cube.position.set(xRange * (0.5 - Math.random()), yRange * (0.5 - Math.random()), zRange * (0.5 - Math.random()));
            cube.rotation.set(Math.random(), Math.random(), Math.random());
            cube.grayness = grayness;
            cubes.add(cube);
        }

        this.geometry = new THREE.BoxGeometry(10, 100, 100);
        this.material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: false});

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.addToScene(this.mesh);

        this.addToScene(new THREE.AmbientLight(0x404040));

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.element.offsetWidth, this.element.offsetHeight);

        this.element.appendChild(this.renderer.domElement);


    }

    this.animate = function()
    {
        var objectsToDisplay =
        this.mesh.position.x += 0.5;
        this.mesh.rotation.y -= 0.05;

        this.renderer.render(this.scene, this.camera);
    }

    this.setGeoControl = function(gc)
    {
        this.GEO_CONTROL = gc;
    }

    this.setGlobal = function(g)
    {
        this.GLOBAL = g;
    }

    this.getScene = function()
    {
        return this.scene;
    }

    this.addToScene = function(geometry)
    {
        var validGeometry = true;
        if(validGeometry) // Check for good geometry
        {
            this.scene.add(geometry);
        }
    }
}
