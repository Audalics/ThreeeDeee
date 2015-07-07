function Entity(g, name, scale, gridLocation)
{
    this.global = g;

    this.name = name;
    this.scale = scale;
    this.gridLocation = gridLocation;

    this.isLoaded = false;
    this.offset = new THREE.Vector2();
    this.loadJSON(this.global.entities)
}
