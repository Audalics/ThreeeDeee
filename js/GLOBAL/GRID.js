function GRID(size, step)
{
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

    this.init = function()
    {
        for (var i = - size; i <= size; i += step) {
    
            this.geometry.vertices.push(new THREE.Vector3(-size, 0, i));
            this.geometry.vertices.push(new THREE.Vector3(size, 0, i));

            this.geometry.vertices.push(new THREE.Vector3(i, 0, -size));
            this.geometry.vertices.push(new THREE.Vector3(i, 0, size));

        }

        var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2, transparent: true } );

        var line = new THREE.Line( geometry, material, THREE.LinePieces );
        scene.add( line );
    }
}
