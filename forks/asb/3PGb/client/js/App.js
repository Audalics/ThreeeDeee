function App()
{
    this.global = new Global();
}

// Initialize
App.prototype.init = function()
{
    this.previousState = null;
    this.isRendererReady = false;
    this.ready = false;
    this.storage = new Storage();
    this.storage.init();
    // this.watchNameInputInterval == setInterval(func, ms)
    // this.playButton.domElement = ??
    // this.play.domElement = ??
} // End init

// Set up game
App.prototype.setGame = function(game)
{
    this.game = game;
    this.isMobile = this.game.renderer.mobile;
    this.isTablet = this.game.renderer.tablet;
    this.isDesktop = !(this.isMobile || this.isTablet);
    this.supportsWorkers = !!window.Worker;
    this.ready = true;
} // End setGame

// See if game can start
App.prototype.canStartGame = function()
{
    if(this.isDesktop)
    {
        return (this.game && this.game.map && this.game.map.isLoaded);
    }
    else
    {
        return this.game;
    }
} // End canStartGame

// Attempt to start game
App.prototype.tryToStartGame = function()
{
    var self = this;

    if(this.username !== "")
    {
        if(!this.ready || !this.canStartGame())
        {
            // unbind click event from play.domElement
            var watchCanStart = setInterval(function()
            {
                console.log("~! App: waiting...");
                if(self.canStartGame())
                {
                    setTimeout(function()
                    {
                        if(!self.isMobile)
                        {
                            // Remove loading screen
                        }
                    }, 1500);
                    clearInterval(watchCanStart);
                    self.startGame(username, starting_callback);
                }
            }, 100);
        }
        else
        {
            // unbind click from play.domElement
            this.startGame(username, starting_callback)
        }
    }
} // End tryToStartGame

// Start Game
App.prototype.startGame = function(username, starting_callback)
{
    var self = this;

    if(starting_callback)
    {
        starting_callback();
    }
    this.hideIntro(function()
    {
        if(!self.isDesktop)
        {
            // Load map after play click for mobile users
            self.game.loadMap();
        }
        self.start(username);
    });
} // End startGame

// Start
App.prototype.start = function(username)
{
    var self = this;
    var firstTimePlaying = !self.storage.hasAlreadyPlayed();

    if(username && !this.game.started)
    {
        var optionsSet = false;
        var config = this.config;

        if(config.local)
        {
            console.log("~! App: Starting Game with local config");
            this.game.setServerOptions(config.local.host, config.local.port, username);
        }
        else
        {
            log.debug("~! App: Starting Game with default dev config");
            this.game.setServerOptions(config.dev.host, config.dev.port, username);
        }
        optionsSet = true;

        if(!optionsSet)
        {
            console.log("~! App: Starting Game with build config");
            this.game.setServerOptions(config.build.host, config.build.port, username);
        }

        this.game.run();
    }
} // End start

// Set mouse position
App.prototype.setMousePosition = function(event)
{
    var gamePos = this.global.getOffset();
    var scale = this.game.renderer.getScaleFactor();
    var width = this.game.renderer.getWidth();
    var height = this.game.renderer.getHeight();
    var mouse = this.game.mouse;

    mouse.x = event.pageX - gamePos.left - (this.isMobile ? 0 : 5 * scale);
    mouse.y = event.pageY - gamePos.top - (this.isMobile ? 0 : 7 * scale);

    if(mouse.x <= 0)
    {
        mouse.x = 0;
    }
    else if(mouse.x >= width)
    {
        mouse.x = width - 1;
    }

    if(mouse.y <= 0)
    {
        mouse.y = 0;
    }
    else if(mouse.y >= height)
    {
        mouse.y = height - 1;
    }
} // End setMousePosition

// Initialize the GUI
App.prototype.initGUI = function()
{
    var self = this;

    this.global.init();

    window.onresize = function(event){self.resize(event);};
} // End initGUI

App.prototype.initEventListener = function()
{

}

App.prototype.showChat = function()
{

}

App.prototype.hideChat = function()
{

}

App.prototype.showAchievementNotification = function(id, name)
{

}

App.prototype.displayUnlockedAchievement = function(id)
{

}

App.prototype.unlockAchievement = function(id, name)
{
    this.showAchievementNotification(id, name);
    this.displayUnlockedAchievement(id);
}

App.prototype.initAchievementList = function(achievements)
{
    var self = this;
    // Do some weird shit... idk check the other file
}

App.prototype.initUnlockedAchievements = function(ids)
{
    var self = this;
    for(var i = 0; i < ids.length; i++)
    {
        self.displayUnlockedAchievement(ids[i]);
    }
}

App.prototype.setAchievementData = function(element, name, desc)
{

}

App.prototype.resize = function(event)
{
    if(this.game)
    {
        if(this.game.started)
        {
            this.global.resize();
        }
    }
}

// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Placeholder
App.prototype.placeholder = function()
{
    // placeholder
} // End Placeholder

// // // // // // // // // // // // //
// // // // // // // // // // // // //
