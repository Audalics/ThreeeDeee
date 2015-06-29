function Global()
{
    this.app = null;
    this.game = null;

    this.viewport = null;

    this.color =
    {
        white:0xffffff,
        dark_grey:0xc3c3c3,
        light_grey:0x3c3c3c,
        yellow:0xe8f007,
        green:0x5bb12f,
        purple:0x9b539c,
        pink:0xeb65a0,
        blue:0x73c5e1
    }

    this.prefix =
    {
        bubble:"_BUBBLE_"
    }

    this.position =
    {
        camera:
        {
            initial:new THREE.Vector3(0, 0, 1000)
        }
    }
}

Global.prototype.setApp = function(app)
{
    this.app = app;
}

Global.prototype.setGame = function(game)
{
    this.game = game;
}

Global.prototype.setViewport = function(viewport)
{
    this.viewport = viewport;
}

Global.prototype.getRenderer = function()
{
    return this.viewport.renderer;
}
