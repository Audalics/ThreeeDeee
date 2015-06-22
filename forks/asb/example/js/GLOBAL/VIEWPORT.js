function VIEWPORT(ele)
{
    this.element = ele || document.createElement("div");
    this.visible = true;
    this.GEO_CONTROL = {};
    this.GLOBAL = {};

    this.testFlag = false;

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

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, (parseInt(this.element.offsetWidth, 10) / parseInt(this.element.offsetHeight, 10)), 1, 10000);
        this.camera.position.z = 1000;


        this.addToScene(new THREE.AmbientLight(0x404040));

        this.renderer = new THREE.WebGLRenderer({antialias:true});
        this.renderer.setSize(this.element.offsetWidth, this.element.offsetHeight);

        this.element.appendChild(this.renderer.domElement);


        if(this.testFlag)
        {
            this.test();
        }





    }

    this.render = function()
    {
        this.camera.updateMatrixWorld();
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


    this.camMouseOldPosition = {x:undefined,y:undefined};
    this.camDragFlag = false;
    this.camZOffset = 100;
    this.camZOffsetIncrement = 25;
    this.camRotationalOffsetMS = 0;
    this.camRotationalOffsetIncrementMS = 0.25;
    this.camRadius = 250;
    this.camRadiusIncrement = 5;
    this.camRadiusMin = 50;
    this.camRadiusMax = 5000;
    this.camSpeedConstant = 0.1;
    this.addToScene = function(obj)
    {
        var validGeometry = true;
        if(validGeometry) // Check for good geometry
        {
            //console.log("~! VIEWPORT: Attempting to display object (id:" + obj.id + ")")
            if(obj.id == this.GLOBAL.getGridID())
            {
                this.GRID = obj;
                //console.log("~!~! GRID displaying");
            }
            this.scene.add(obj);
            console.log("~! VIEWPORT: Added object (id:" + obj.id + ",name:" + this.GEO_CONTROL.request(obj.id).name + ") to scene")
            this.animateCamera(obj);
        }
    }
}

VIEWPORT.prototype.getWidth = function()
{
    return parseInt(this.element.offsetWidth, 10);
}

VIEWPORT.prototype.getHeight = function()
{
    return parseInt(this.element.offsetHeight, 10);
}

VIEWPORT.prototype.animateCamera = function(obj)
{
    this.camOldPosition = this.camera.position;
    this.camera.position.x = obj.position.x + this.camRadius * Math.cos(this.camSpeedConstant * (this.camRotationalOffsetMS));
    this.camera.position.z = obj.position.z + this.camRadius * Math.sin(this.camSpeedConstant * (this.camRotationalOffsetMS));
    this.camera.position.y = obj.position.y + this.camZOffset;
    this.camera.lookAt(obj.position);
}

VIEWPORT.prototype.camScroll = function(direction)
{
    switch(direction)
    {
        case this.GLOBAL.STD.DIRECTION.UP:
            if(this.camRadius - this.camRadiusIncrement >= this.camRadiusMin)
            {
                this.camRadius -= this.camRadiusIncrement;
            }
            else
            {
                this.camRadius = this.camRadiusMin;
            }
            break;
        case this.GLOBAL.STD.DIRECTION.DOWN:
            if(this.camRadius + this.camRadiusIncrement <= this.camRadiusMax)
            {
                this.camRadius += this.camRadiusIncrement;
            }
            else
            {
                this.camRadius = this.camRadiusMax;
            }
            break;
    }
}

VIEWPORT.prototype.getScene = function()
{
    return this.scene;
}

VIEWPORT.prototype.getCamera = function()
{
    return this.camera;
}

VIEWPORT.prototype.camIsDragging = function()
{
    return this.camDragFlag;
}

VIEWPORT.prototype.camDragStart = function()
{
    //console.log("~! VIEWPORT: CAM DRAG start");
    this.camDragFlag = true;
}

VIEWPORT.prototype.camDragStop = function()
{
    //console.log("~! VIEWPORT: CAM DRAG stop");
    this.camDragFlag = false;
}

VIEWPORT.prototype.camDrag = function(direction)
{
    if(this.camDragFlag)
        switch(direction)
        {
            case this.GLOBAL.STD.DIRECTION.UP:
                this.camZOffset += this.camZOffsetIncrement;
                break;
            case this.GLOBAL.STD.DIRECTION.DOWN:
                this.camZOffset -= this.camZOffsetIncrement;
                break;
            case this.GLOBAL.STD.DIRECTION.LEFT:
                this.camRotationalOffsetMS -= this.camRotationalOffsetIncrementMS;
                break;
            case this.GLOBAL.STD.DIRECTION.RIGHT:
                this.camRotationalOffsetMS += this.camRotationalOffsetIncrementMS;
                break;
        }
}

VIEWPORT.prototype.animateTest = function()
{
    this.mesh.position.x += 0.5;
    this.mesh.rotation.y -= 0.05;
}

VIEWPORT.prototype.test = function()
{

    var geometry, material, mesh;
    geometry = new THREE.BoxGeometry(5, 5, 5);

    var xRange = this.element.offsetWidth * 2;
    var yRange = this.element.offsetHeight * 2;
    var zRange = this.element.offsetWidth * 2;

    for(var i = 0; i < 2500; i++){
        var cubes = new THREE.Object3D();
        var grayness = Math.random() * 0.5 + 0.25;
        material = new THREE.MeshBasicMaterial();
        var cube = new THREE.Mesh(geometry, material);
        material.color.setRGB(grayness, grayness, grayness);
        cube.position.set(xRange * (0.5 - Math.random()), yRange * (0.5 - Math.random()), zRange * (0.5 - Math.random()));
        cube.rotation.set(Math.random(), Math.random(), Math.random());
        cube.grayness = grayness;
        cubes.add(cube);
        this.GLOBAL.display("_TEST_CUBE_" + i + "_", cubes, undefined);
    }
}
