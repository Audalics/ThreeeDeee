function Game(app)
{
    this.app = app;

    this.global = app.global;

    this.infoManager = null;
    this.map = null;
    this.animation = null;
    this.sprite = null;
    this.animatedTile = null;
    this.hero = null;
    this.gameClient = null;
    this.transition = null;
    this.item = null;
    this.mob = null;
    this.npc = null;
    this.player = null;
    this.character = null;
    this.chest = null;
    this.mobs = null;
    this.exceptions = null;
    this.config = null;
}

Game.prototype.init = function(app, config)
{
    this.app = app;
    this.app.config = config;
    this.ready = false;
    this.started = false;
    this.hasNeverStarted = true;

    this.renderer = null;
    this.updater = null;
    this.pathfinder = null;
    this.chatinput = null;
    this.bubbleManager = null;
    this.audioManager = null;

    this.player = new Hero("player", "");

    this.entities = {};
    this.deathPositions = {};
    this.entityGrid = null;
    this.pathinggrid = null;
    this.renderingGrid = null;
    this.itemGrid = null;
    this.currentCursor = null;
    this.mouse = new THREE.Vector2();
    this.zoningQueue = [];
    this.previousClickPosition = new THREE.Vector2();

    this.selectedCell = new THREE.Vector2();
    this.SelectedCellVisible = false;
    this.targetCellColor = this.global.color.white.rgbaHalf;
    this.targetCellVisible = true;
    this.hoveringTarget = false;
    this.hoveringMob = false;
    this.hoveringItem = false;
    this.hoveringCollidingTile = false;

    this.infoManager = new InfoManager(this);

    this.currentZoning = null;

    this.cursors = {};
    this.entities = {};
    this.animatedTiles = null;
    this.debugpathing = true;

    this.entityNames = this.global.getEntityTypes();


}

Game.prototype.setup = function(bubbleContainer, input)
{
    this.setBubbleManager(new Bubblemanager(bubbleContainer, this.global, this));
    this.setRenderer(new Viewport(this.global));
    this.setChatInput(input);
}

Game.prototype.setBubbleManager = function(bMan)
{
    this.bubbleManager = bMan;
    this.global.setBubbleManager(bMan);
}

Game.prototype.setStorage = function(storage)
{
    this.storage = storage;
}

Game.prototype.setRenderer = function(viewport)
{
    this.renderer = renderer;
}

Game.prototype.setUpdater = function(updater)
{
    this.updater = updater;
}

Game.prototype.setPathfinder = function(pathfinder)
{
    this.pathfinder = pathfinder;
}

Game.prototype.setChatInput = function(element)
{
    this.chatinput = element;
}

Game.prototype.loadMap = function(element)
{
    var self = this;

    this.map = new Map(this.global, this);

    this.map.ready()
}

Game.prototype.initPlayer = function()
{
    if(this.storage.hasAlreadyplayed())
    {
        this.player.setCharacter(this.storage.data.player.character);
        this.player.setInventory(this.storage.data.player.inventory);
        this.player.setSkills(this.storage.data.player.skills);
    }

    this.player.setCharacterObject(this.objects[this.player.getObjectId()]);
    this.player.idle();
}

//Game.prototype.initShadows = function(){}

//Game.prototype.initCursors = function(){}

//Game.prototype.initAnimations = function(){}

//Game.prototype.initAchievements = function(){}

//Game.prototype.getAchievementById = function(id){}

Game.prototype.loadEntity = function(name, scale)
{

    this.entities.push(new Entity(this.global, name, scale))
}
