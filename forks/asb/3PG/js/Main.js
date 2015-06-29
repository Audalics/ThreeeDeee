function Main()
{
    var global = new Global();

    var app = new App(global);
    var game = new Game(global);

    var viewport = new Viewport(global);

    this.initApp = function()
    {
        // Initialize the App
        app.init();
        app.focus();

        // Set up our event listeners
        // viewport mouse down/up/move
        // viewport key up/down
        // chat button mouse down/up
        // body mouse down/up
        // window resize
        // etc etc

        // Set up data
        var data = app.storage.data;
        if(data.hasAlreadyPlayed)
        {
            if(data.player.name && data.player.name != "")
            {
                // Set player name
                // Set player image
            }
        }

        log.info("~! Main: App initialized")
    }

    this.initGame = function()
    {
        var viewport = new Viewport(global);
        game.init(app);
        game.setup("")
    }
}
