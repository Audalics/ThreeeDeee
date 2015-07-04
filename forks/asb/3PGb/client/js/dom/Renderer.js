function Renderer(g)
{
    this.global = g;
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    this.geoControl = null;

    this.tileSize = null;

//    this.rescale(this.getScaleFactor());

    this.timeOld = new Date();
    this.timeFresh = null;
    this.isDebugInfoVisible = false;

    this.animatedTileCount = 0;
    this.highTileCount = 0;

    if(this.global.width() > 640) {
        if((navigator.userAgent.indexOf("Android") != -1 && navigator.userAgent.indexOf("Firefox") != -1)
        || navigator.userAgent.indexOf("Mobile") != -1) {
            this.tablet = true;
        }

    }
    this.tablet = false;

    this.mobile = false;
}

Renderer.prototype.init = function()
{
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(90, this.global.width() / this.global.height(), 1, 10000);
    this.camera.position.z = this.global.zVal.camera.dev;

    this.renderer = new THREE.WebGLRenderer({antialis:true});
    this.renderer.setSize(this.global.width(), this.global.height());
    this.renderer.setClearColor(this.global.color.black.rgba);

    this.geoControl = new Geo_Control();

}

Renderer.prototype.animate = function()
{
    var self = this;
    requestAnimationFrame( self.animate );
}

Renderer.prototype.setTileset = function(tileset)
{
    this.tileset = tileset;
}

Renderer.prototype.getScaleFactor = function()
{
    var w = this.global.width();
    var h = this.global.height();
    var scale;

    this.mobile = false;

    if(w <= 1000)
    {
        scale = 2;
        this.mobile = true;
    }
    else if(w <= 1500 || h <= 870)
    {
        scale = 2;
    }
    else
    {
        scale = 3;
    }

    return scale;
}

Renderer.prototype.resize = function(factor)
{
//    this.scale = this.getScaleFactor();

    this.camera.aspect = this.global.width() / this.global.height();
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.global.width(),
    this.global.height());
}
