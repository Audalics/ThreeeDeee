function Main()
{
    var app, game;

    var player;

    var initApp = function()
    {
        app = new App();
        app.init();
//        app.initEventListener();

        var data = app.storage.data;
        console.log(data)
        if(data.hasAlreadyplayed)
        {
            if(data.player.name && data.player.name != null)
            {
                player = data.player;
            }
        }

        // Bind click to play button and run this:
//        app.tryToStartGame();

        initGame();
    }

    var initGame = function()
    {
        game = new Game(app);
        game.setup(app.global.viewport.domElement, app.global.chatInput.domElement);
        game.setStorage(app.storage);
        app.setGame(game);

        if(app.isDesktop && app.supportsWorkers)
        {
            game.loadMap();
        }

        
    }
}
