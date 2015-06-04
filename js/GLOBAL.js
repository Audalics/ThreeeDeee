function GLOBAL()
{
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;

    this.WHITE = new COLOR(0xff, 0xff, 0xff);
    this.LIGHT_GREY = new COLOR(0xc3, 0xc3, 0xc3);
    this.DARK_GREY = new COLOR(0x3c, 0x3c, 0x3c);
    this.YELLOW = new COLOR(0xbc, 0xcf, 0x02);
    this.GREEN = new COLOR(0x5b, 0xb1, 0x2f);
    this.PURPLE = new COLOR(0x9b, 0x53, 0x9c);
    this.PINK = new COLOR(0xeb, 0x65, 0xa0);
    this.BLUE = new COLOR(0x73, 0xc5, 0xe1);

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

    this.init = function()
    {
        // So I want to set up the UI
        // There will be a top navigation, a left-side context menu, and a right-side viewport
        //

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

        // Now that the UI is in place and functions well,
        // I want to set up a Grid in the Viewport.
        this.GRID = new GRID();

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

        this.VIEWPORT.resize(this.STD.VIEWPORT.WIDTH(), this.STD.VIEWPORT.HEIGHT());
        this.CONTEXT_MENU.resize(this.STD.CONTEXT_MENU.WIDTH(), this.STD.CONTEXT_MENU.HEIGHT());
        this.NAVIGATION.resize(this.STD.NAVIGATION.WIDTH(), this.STD.NAVIGATION.HEIGHT());
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
            if(index == -1)
            {
                this.keys[this.keys.length] = key;
            }
            else
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
            for(var k = 0; k < this.keyCombos[i].keys.length; k++)
            {
                console.log(this.keyCombos[i].name + ": " + this.keyCombos[i].keys[k]);
                switch(this.keyCombos[i].keys[k])
                {
                    case 16: // SHIFT
                        if(!shiftFlag)
                        {
                            // NO GOOD
                        }
                        break;
                    case 18: // ALT
                        if(!altFlag)
                        {
                            // NO GOOD
                        }
                        break;
                    case 17: // CTRL
                        if(!ctrlFlag)
                        {
                            // NO GOOD
                        }
                        break;
                }
                if(this.keys.indexOf(this.keyCombos[i].keys[k]) == -1)
                {
                    continue;
                }

                // Successful combo

                // ...
            }
        }
    }

    this.init();
}
