function GLOBAL()
{
    // Keep track of window size; update in this.windowResize()
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;

    // For easy color reference GLOBAL/this.<color>
    this.WHITE = new COLOR(0xff, 0xff, 0xff);
    this.LIGHT_GREY = new COLOR(0xc3, 0xc3, 0xc3);
    this.DARK_GREY = new COLOR(0x3c, 0x3c, 0x3c);
    this.YELLOW = new COLOR(0xbc, 0xcf, 0x02);
    this.GREEN = new COLOR(0x5b, 0xb1, 0x2f);
    this.PURPLE = new COLOR(0x9b, 0x53, 0x9c);
    this.PINK = new COLOR(0xeb, 0x65, 0xa0);
    this.BLUE = new COLOR(0x73, 0xc5, 0xe1);

    // These act as my constants
    this.STD =
    {
        COLOR:
        {
            TEXT:
            {
                DEFAULT:this.DARK_GREY,
                WHITE:this.WHITE,
                LIGHT_GREY:this.LIGHT_GREY,
                DARK_GREY:this.DARK_GREY,
                YELLOW:this.YELLOW,
                GREEN:this.GREEN,
                PURPLE:this.PURPLE,
                PINK:this.PINK,
                BLUE:this.BLUE
            },
            BACKGROUND:
            {
                DEFAULT:this.WHITE,
                WHITE:this.WHITE,
                LIGHT_GREY:this.LIGHT_GREY,
                DARK_GREY:this.DARK_GREY,
                YELLOW:this.YELLOW,
                GREEN:this.GREEN,
                PURPLE:this.PURPLE,
                PINK:this.PINK,
                BLUE:this.BLUE
            }
        },
        SIZE:
        {
            // true values are 100%
            // so it should be calculated
            // in the function that needs dimensions
            NAVIGATION:
            {
                width:true,
                height:75
            },
            CONTEXT_MENU:
            {
                width:200,
                height:true
            },
            VIEWPORT:
            {
                width:true,
                height:true
            }
        }
    }

    this.NAVIGATION = new NAVIGATION();
    this.CONTEXT_MENU = new CONTEXT_MENU();
    this.VIEWPORT = new VIEWPORT();
    this.VIEWPORT.setGlobal(this);

    this.GRID = {};
    this.GEO_CONTROL = {};
    this.GEO_CONTROL.setGlobal(this);

    this.setGrid = function(g)
    {
        this.GRID = g;
        this.GRID.setGlobal(this);
        if(this.GEO_CONTROL())
        {
            this.GRID.setGEO_CONTROL()
        }
    }

    this.getGrid = function()
    {
        return this.GRID;
    }

    this.setGeoControl = function(GEO_CONTROL)
    {
        this.VIEWPORT.setGeoControl(GEO_CONTROL);
        this.GEO_CONTROL = GEO_CONTROL;
    }

    this.getGeoControl = function()
    {
        return this.GEO_CONTROL;
    }

    this.init = function()
    {
        // So I want to set up the UI
        // There will be a top navigation, a left-side context menu, and a right-side viewport

        // Set up nav bar
        var navigation = document.createElement("div");
            navigation.id = "_NAVIGATION";
            navigation.style.background = this.STD.COLOR.BACKGROUND.GREEN.toString();
            navigation.style.width = this.WIDTH;
            navigation.style.height = this.STD.SIZE.NAVIGATION.height;
            navigation.style.position = "absolute";
            navigation.style.left = 0;
            navigation.style.top = 0;
        this.setNavigation(navigation);

        // Set up context menu
        var contextMenu = document.createElement("div");
            contextMenu.id = "_CONTEXT_MENU";
            contextMenu.style.background = this.STD.COLOR.BACKGROUND.BLUE.toString();
            contextMenu.style.width = this.STD.SIZE.CONTEXT_MENU.width;
            contextMenu.style.height = this.HEIGHT - navigation.offsetHeight;
            contextMenu.style.position = "absolute";
            contextMenu.style.left = 0;
            contextMenu.style.top = navigation.offsetHeight;
        this.setContextMenu(contextMenu);

        // Set up viewport
        var viewport = document.createElement("div");
            viewport.id = "_VIEWPORT";
            viewport.style.background = this.STD.COLOR.BACKGROUND.PINK.toString();
            viewport.style.width = this.WIDTH - contextMenu.offsetWidth;
            viewport.style.height = this.HEIGHT - navigation.offsetHeight;
            viewport.style.position = "absolute";
            viewport.style.left = contextMenu.offsetWidth;
            viewport.style.top = navigation.offsetHeight;
        this.setViewport(viewport);

    }

    this.setNavigation = function(element)
    {
        this.NAVIGATION.element = element;
        document.body.appendChild(this.NAVIGATION.element);
    }

    this.setContextMenu = function(element)
    {
        this.CONTEXT_MENU.element = element;
        document.body.appendChild(this.CONTEXT_MENU.element);
    }

    this.setViewport = function(element)
    {
        this.VIEWPORT.element = element;
        document.body.appendChild(this.VIEWPORT.element);
    }

    this.getViewport = function()
    {
        return this.VIEWPORT;
    }

    this.windowResize = function(event)
    {

        /*
        FOR THE RESIZE

        navigation.style.width = G.WIDTH;
        navigation.style.height = 75;

        contextMenu.style.width = 200;
        contextMenu.style.height = G.HEIGHT - navigation.offsetHeight;

        viewport.style.width = G.WIDTH - contextMenu.offsetWidth;
        viewport.style.height = G.HEIGHT - navigation.offsetHeight;
        */

        this.WIDTH = window.innerWidth;
        this.HEIGHT = window.innerHeight;


        this.NAVIGATION.resize(this.WIDTH, 75);
        this.CONTEXT_MENU.resize(200, this.HEIGHT - parseInt(this.NAVIGATION.element.offsetHeight, 10));
        this.VIEWPORT.resize(this.WIDTH - parseInt(this.CONTEXT_MENU.element.offsetWidth, 10), this.HEIGHT - parseInt(this.NAVIGATION.element.offsetHeight, 10));
    }

    this.shiftFlag = false;
    this.altFlag = false;
    this.ctrlFlag = false;

    this.keys = []; // INTs for all keys down

    this.keyEvent = function(event)
    {
        // Check for special keys
        if(event.shiftKey || event.altKey || event.ctrlKey)
        {
            if(!this.shiftFlag && event.shiftKey)
            {
                this.shiftFlag = true;
                this.keys[this.keys.length] = "SHIFT";
            }
            else if(this.shiftFlag && !event.shiftKey)
            {
                this.shiftFlag = false;
                for(var i = 0; i < this.keys.length; i++)
                {
                    this.shiftFlag = false;
                    if(this.keys[i] == "SHIFT")
                    {
                        this.keys.splice(i, 1);
                    }
                }
            }

            if(!this.altFlag && event.altKey)
            {
                this.altFlag = true;
                this.keys[this.keys.length] = "ALT";
            }
            else if(this.altFlag && !event.altKey)
            {
                this.altFlag = false;
                for(var i = 0; i < this.keys.length; i++)
                {
                    if(this.keys[i] == "ALT")
                    {
                        this.keys.splice(i, 1);
                    }
                }
            }

            if(!this.ctrlFlag && event.ctrlKey)
            {
                this.ctrlFlag = true;
                this.keys[this.keys.length] = "CTRL";
            }
            else if(this.ctrlFlag && !event.ctrlKey)
            {
                this.ctrlFlag = false;
                for(var i = 0; i < this.keys.length; i++)
                {
                    if(this.keys[i] == "CTRL")
                    {
                        this.keys.splice(i, 1);
                    }
                }
            }
        }
        else // No special keys were pressed, process normally
        {
            var key = event.which || event.keyCode;
            var index = this.keys.indexOf(key)
            if(index == -1 && event.type == "keydown")
            {
                this.keys[this.keys.length] = key;
            }
            else if(event.type == "keyup")
            {
                this.keys.splice(index, 1);
            }
        }

        this.keyProcess()
    }

    this.keyCombos =
    [
        {
            name:"copy",
            keys:["CTRL", "c"],
            sensitive:false,
            func:function()
            {
                console.log("COPIED");
            }
        },
        {
            name:"paste",
            keys:["CTRL", "v"],
            sensitive:false,
            func:function()
            {
                console.log("PASTED");
            }
        }
    ]

    this.keyProcess = function()
    {
        for(var i = 0; i < this.keyCombos.length; i++)
        {
            var keysThatNeedToBePressed = [];
            for(var j = 0; j < this.keyCombos[i].keys.length; j++)
            {
                keysThatNeedToBePressed[keysThatNeedToBePressed.length] = this.keyCombos[i].keys[j];
            }
            var str = "";
            for(var o = 0; o < this.keys.length; o++)
            {
                if(this.keys[o] == "SHIFT")
                    str += "SHIFT";
                else if(this.keys[o] == "ALT")
                    str += "ALT";
                else if(this.keys[o] == "CTRL")
                    str += "CTRL";
                else
                    str += String.fromCharCode(this.keys[o]);
            }
            console.log(str);
            for(var k = 0; k < this.keyCombos[i].keys.length; k++)
            {
                switch(this.keyCombos[i].keys[k])
                {
                    case "SHIFT":
                        if(!shiftFlag)
                        {
                            break;
                        }
                        else // Shift is down
                        {
                            continue;
                        }
                    case "ALT":
                        if(!altFlag)
                        {
                            break;
                        }
                        else // Alt is down
                        {
                            continue;
                        }
                    case "17":
                        if(!ctrlFlag)
                        {
                            break;
                        }
                        else // Ctrl is down
                        {
                            continue;
                        }
                }
                if(this.keys.indexOf(this.keyCombos[i].keys[k]) == -1)
                {
                    break;
                }

                // Successful combo

                // ...
            }
        }
    }

    this.display = function(geometry)
    {
        this.VIEWPORT.addToScene(geometry);
    }

    this.init();
}
