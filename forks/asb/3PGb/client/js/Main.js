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

        app.tryToStartGame();
    }

    initApp();
}
