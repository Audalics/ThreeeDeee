function GRID(size, step)
{
    this.GLOBAL = {};
    this.GEO_CONTROL = {}

    // So I want to make a grid that someone can use to make things
    // Need a geom to show rollOver
    // Need objects that someone *could place
    // Need grid
    //   for i = -size to +size
    //     push vertex([+-]size, 0, i)
    //     push vertex(i, 0, [+-]size)
    //
    this.size = size;
    this.step = step;

    this.geometry = new THREE.Geometry();

    this.material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2, transparent: true } );

    this.init = function()
    {
        for (var i = -this.size; i <= this.size; i += this.step) {

            this.geometry.vertices.push(new THREE.Vector3(-this.size, 0, i));
            this.geometry.vertices.push(new THREE.Vector3(this.size, 0, i));


            /*gX1T4aK2gd*/
            this.geometry.vertices.push(new THREE.Vector3(i, 0, -this.size));
            this.geometry.vertices.push(new THREE.Vector3(i, 0, this.size));

        }

        var line = new THREE.Line( this.geometry, this.material, THREE.LinePieces );
        GEO_CONTROL.add("_GRID_", line, null);
    }

    this.setGlobal = function(g)
    {
        this.GLOBAL = g;
    }

    this.setGeoControl = function(gc)
    {
        this.geoControl = gc;
    }

    this.init();
}
