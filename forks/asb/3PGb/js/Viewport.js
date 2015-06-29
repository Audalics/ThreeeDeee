function Viewport(g)
{
    this.global = g;

    this.domElement = null;
    this.visible = false;

    this.scene;
    this.camera;
    this.renderer;
}

Viewport.prototype.init = function()
{
    // Set Global's viewport to this
    this.global.setViewport() = this;

    // Get element ready
    this.domElement = document.createElement("div");

    // Display element
    this.global.show(this.domElement);

    // Set up Three.js stuff
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, this.getWidth() / this.getHeight(), 1, 10000);
    this.camera.position.z = this.global.position.camera.initial.z;

    this.renderer = new THREE.WebGLRenderer({antialias:true});
    this.renderer.setSize(this.getWidth(), this.getHeight());
    this.renderer.setClearColor(this.global.color.dark_grey);

    this.domElement.appendChild(this.renderer.domElement)
}

Viewport.prototype.getWidth = function()
{
    return parseInt(this.domElement.offsetWidth, 10);
}

Viewport.prototype.getWidth = function()
{
    return parseInt(this.domElement.offsetHeight, 10);
}
