function Game(g)
{
    this.global = g;

    this.infoManager = null;
    this.bubbleManager = null;
    this.renderer = null;
    this.map = null;
    this.animation = null;
    this.sprite = null;
    this.animatedTile = null;
    this.hero = null;
    this.gameClient = null;
    this.audioManager = null;
    this.updater = null;
    this.transition = null;
    this.pathFinder = null;
    this.item = null;
    this.mob = null;
    this.npc = null;
    this.player = null;
    this.character = null;
    this.chest = null;
    this.mobs = null;
    this.exceptions = null;

    this.config = null;

    this.init = function(app)
    {
        this.global.game = this;

        this.app = app;
        this.app.config = this.config;
        this.ready = false;
        this.started = false;
        this.hasNeverStarted = true;

        this.renderer = null;
        this.updater = null;
        this.pathFinder = null;
        this.chatInput = null;
        this.bubbleManager = null;
        this.audioManager = null;

        // Player
        this.player = new Hero("player", "");

        // Game state
        this.entities = {};
        this.deathPositions = {};
        this.entityGrid = null;
        this.pathGrid = null;
        this.renderGrid = null;
        this.itemGrid = null;
        this.currentCursor = null;
        this.mouse = new THREE.Vector2();
        this.zoningQueue = [];
        this.previousClickPosition = new THREE.Vector2();

        this.selected = new THREE.Vector2();
        this.selectedCellVisible = false;
        this.targetColor = this.global.color.white;
        this.targetCellVisible = true;
        this.hoverTarget = false;
        this.hoverMob = false;
        this.hoverItem = false;
        this.hoverCollidingTile = false;

        // Combat
        this.infoManager = new InfoManager(this);

        // Zoning
        this.currentZoning = null;

        this.cursors = {};
        this.sprites = {};

        //tile animation
        this.animatedTiles = null;

        // Debug
        this.debugPathing = false;

        this.spriteNames = [];
    }
    this.setup = function($bubbleContainer, viewport, input)
    {
        this.setBubbleManager(new BubbleManager($bubbleContainer));
        this.setRenderer(this.global.getRenderer())
    }
}
