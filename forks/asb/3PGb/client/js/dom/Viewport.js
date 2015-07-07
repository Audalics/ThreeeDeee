function Viewport(g)
{
    this.global = g;

    this.domElement = null;

    this.guiElements = [];
    for(var name in this.global.domElements.inGame)
    {
        this.guiElements.push(name);
    }

    this.healthOrb = null;
        this.healthOrbFill = 100;

    this.manaOrb = null;
        this.manaOrbFill = 100;

    this.expBar = null;
        this.expBarFill = 100;

    this.staminaBar = null;
        this.staminaBarFill = 100;

    this.potionBar = null;
        this.aPotionSlot = null;
        this.bPotionSlot = null;
        this.cPotionSlot = null;
        this.dPotionSlot = null;

        this.potionBarFocused = false;

    this.skillButtons = null;
        this.aSkillButton = null;
            this.aSkillButtonFocused = false;
            this.aSkillButtonDisabled = false;
        this.bSkillButton = null;
            this.bSkillButtonFocused = false;
            this.bSkillButtonDisabled = false;

    this.hotkeyPanel = null;
        this.aHotkey = null;
        this.bHotkey = null;
        this.cHotkey = null;
        this.dHotkey = null;
        this.eHotkey = null;
        this.fHotkey = null;
        this.gHotkey = null;
        this.hHotkey = null;

    this.renderer = new Renderer(this.global);
}

Viewport.prototype.getGradBG = function(color, percent, horizontalFlag)
{
    var transparent = "rgb(0,0,0)";
    if(horizontalFlag)
    {
        direction = "left"
    }
    else
    { // Vertical
        direction = "bottom";
    }

    var string = "-webkit-linear-gradient(";
    string += direction;
    string += ",";

    string += color;
    string += ",";

    string += color;
    string += " ";
    string += percent;
    string += "%";
    string += ",";

    string += transparent;
    string += " ";
    string += percent;
    string += "%";
    string += ")"

    return string;
}

// Initialize viewport
Viewport.prototype.init = function()
{
    var self = this;

    this.domElement = document.createElement("div");
    this.domElement.id = this.global.domElements.main.viewport.id;
    this.domElement.style.width = this.global.width();
    this.domElement.style.height = this.global.height();
    this.domElement.style.background = this.global.domElements.main.viewport.color.string;

    document.body.appendChild(this.domElement);

    window.onmousedown = function(event){self.mousedown(event)};

    window.onmouseup = function(event){self.mouseup(event)};

    window.onmousemove = function(event){self.mousemove(event)};

    window.oncontextmenu = function(){return false;};

    for(var i = 0; i < this.guiElements.length; i++)
    {
        var elem = document.createElement("div");
        var elemInfo = this.global.domElements.inGame[this.guiElements[i]];


        elem.id = elemInfo.id;

        elem.style.outline = "1px solid #000000"

        elem.style.width = elemInfo.width;
        elem.style.height = elemInfo.height;
        switch(this.guiElements[i])
        {
            case "healthOrb":
                elem.style.background = this.getGradBG(elemInfo.color.string, this.healthOrbFill, false)
                break;
            case "manaOrb":
                elem.style.background = this.getGradBG(elemInfo.color.string, this.manaOrbFill, false)
                break;
            case "expBar":
                elem.style.background = this.getGradBG(elemInfo.color.string, this.expBarFill, true)
                break;
            case "staminaBar":
                elem.style.background = this.getGradBG(elemInfo.color.string, this.expBarFill, true)
                break;
            default:
                elem.style.background = elemInfo.color.string;
        }
        elem.style.position = elemInfo.position;
        if(elemInfo.top != null)
        {
            elem.style.top = elemInfo.top;
        }
        if(elemInfo.left != null)
        {
            elem.style.left = elemInfo.left;
        }
        if(elemInfo.bottom != null)
        {
            elem.style.bottom = elemInfo.bottom;
        }
        if(elemInfo.right != null)
        {
            elem.style.right = elemInfo.right;
        }
        this.domElement.appendChild(elem);
    }

    var elem = document.createElement("div");
    var elemInfo = this.global.domElements.chat.input;

    elem.id = elemInfo.id;

    elem.style.outline = "1px solid #000000";

    elem.style.width = elemInfo.width;
    elem.style.height = elemInfo.height;
    elem.style.background = elemInfo.color.string;

    elem.style.position = elemInfo.position;
    elem.style.bottom = elemInfo.bottom;
    elem.style.left = elemInfo.left;

    var input = document.createElement("input");
    input.id = elemInfo.id + "INPUT_";
    input.type = "text";
    input.style.width = "100%";
    input.style.height = "100%";
    elem.appendChild(input);

    this.domElement.appendChild(elem);

    this.updateIntervalMs = 100;
    this.setUpdateInterval(this.updateIntervalMs);
} // End init

Viewport.prototype.guiUpdate = function()
{
    for(var i = 0; i < this.guiElements.length; i++)
    {
        var elemInfo = this.global.domElements.inGame[this.guiElements[i]];
        var elem = document.getElementById(elemInfo.id);

        elem.id = elemInfo.id;

        elem.style.outline = "1px solid #000000"

        elem.style.width = elemInfo.width;
        elem.style.height = elemInfo.height;
        switch(this.guiElements[i])
        {
            case "healthOrb":
                elem.style.background = this.getGradBG(elemInfo.color.string, this.healthOrbFill, false)
                break;
            case "manaOrb":
                elem.style.background = this.getGradBG(elemInfo.color.string, this.manaOrbFill, false)
                break;
            case "expBar":
                elem.style.background = this.getGradBG(elemInfo.color.string, this.expBarFill, true)
                break;
            case "staminaBar":
                elem.style.background = this.getGradBG(elemInfo.color.string, this.expBarFill, true)
                break;
            default:
                elem.style.background = elemInfo.color.string;
        }
        elem.style.position = elemInfo.position;
        if(elemInfo.top != null)
        {
            elem.style.top = elemInfo.top;
        }
        if(elemInfo.left != null)
        {
            elem.style.left = elemInfo.left;
        }
        if(elemInfo.bottom != null)
        {
            elem.style.bottom = elemInfo.bottom;
        }
        if(elemInfo.right != null)
        {
            elem.style.right = elemInfo.right;
        }
        this.domElement.appendChild(elem);
    }
}

Viewport.prototype.mousedown = function(event)
{
    event.preventDefault();
    switch(event.which)
    {
        case 1: // mouse l
            console.log("l");
            this.lMouseFlag = true;
            break;

        case 2: // mouse m
            console.log("m");
            this.mMouseFlag = true;
            break;

        case 3: // mouse r
            console.log("r");
            this.rMouseFlag = true;
            break;

    }
}

Viewport.prototype.mouseup = function(event)
{
    event.preventDefault();
    switch(event.which)
    {
        case 1: // mouse l
            console.log("-l");
            this.lMouseFlag = false;
            switch(event.target.id)
            {
                case "_HEALTH_ORB_DOM_":
                    this.healthOrbFill -= 1;
                    break;
            }
            break;

        case 2: // mouse m
            console.log("-m");
            this.mMouseFlag = false;
            break;

        case 3: // mouse r
            console.log("-r");
            this.rMouseFlag = false;
            console.log(event.target.id)
            switch(event.target.id)
            {
                case "_HEALTH_ORB_DOM_":
                    this.healthOrbFill += 1;
                    break;
            }
            break;
console.log(this.healthOrbFill)
    }
}

Viewport.prototype.mousemove = function(event)
{

}

Viewport.prototype.setUpdateInterval = function(ms)
{
    var self = this;
    this.updateInterval = setInterval(function(){self.guiUpdate()}, ms)
}

Viewport.prototype.resize = function()
{
    this.domElement.style.width = this.global.width();
    this.domElement.style.height = this.global.height();
    this.renderer.resize();
}
