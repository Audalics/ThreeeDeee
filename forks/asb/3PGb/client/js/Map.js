function Map(g, game)
{
    this.global = g;

    this.game = game;
}

Map.prototype.init = function()
{
    this.data = [];
    this.isLoaded = false;
    this.tilesetLoaded = false;
    this.mapLoaded = false;

    var useWorker = !(this.game.renderer.mobile || this.game.renderer.tablet);

    this.loadMap(useWorker);
    this.initTileset();
}

Map.prototype.checkReady = function()
{
    if(this.tilesetLoaded && this.mapLoaded)
    {
        this.isLoaded = true;
        if(this.readyFunc)
        {
            this.readyFunc();
        }
    }
}

Map.prototype.loadMap = function(useWorker)
{
    var self = this;
    var filepath = "maps/world_client.json";

    if(useWorker)
    {
        // Load map via web worker
    }
    else
    {
        // Load map via ajax

    }
}
