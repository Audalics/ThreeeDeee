function Viewport(g)
{
    this.global = g;

    this.domElement = null;

    this.domElements = [];
    for(var name in this.global.domElements.name)
    {
        this.domElements.push(this.global.domElements.name[name]);
    }

    this.healthOrb = null;
        this.healthorbFill = 0;

    this.manaOrb = null;
        this.manaOrbFill = 0;

    this.expBar = null;
        this.expBarFill = 0;

    this.staminaBar = null;
        this.staminaBarFill = 0;

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
}

// Initialize viewport
Viewport.prototype.init = function()
{
    this.domElement = document.createElement("div");
    this.domElement.id = this.global.domElements.name.viewport;
    this.domElement.style.width = this.global.domElements.width.viewport;
    this.domElement.style.height = this.global.domElements.height.viewport;
    this.domElement.style.background = this.global.domElements.color.viewport;
    document.body.appendChild(this.domElement);

    for(var i = 0; i < this.domElements.length; i++)
    {
        var id, width, height, position, bottom, color;
        var directions =
        {
            top:"top",
            left:"left",
            bottom:"bottom",
            right:"right"
        }
        var directionValues =
        {
            top:null,
            left:null,
            bottom:null,
            right:null
        }
        switch(this.domElements[i])
        {
            case this.global.domElements.name.healthOrb:
                id = this.global.domElements.name.healthOrb;
                width = this.global.domElements.width.healthOrb;
                height = this.global.domElements.height.healthOrb;
                if(this.global.domElements.position.healthOrb.isAbsolute)
                {
                    position = "absolute";
                    for(var dir in directions)
                    {
                        if(this.global.domElements.position.healthOrb.hasOwnProperty(dir))
                        {
                            directionValues[dir] = this.global.domElements.position.healthOrb[dir];
                        }
                    }
                }
                else
                {
                    // do nothing
                }
                color = this.global.domElements.color.healthOrb.string;
                break;
            case this.global.domElements.name.manaOrb:
                id = this.global.domElements.name.manaOrb;
                width = this.global.domElements.width.manaOrb;
                height = this.global.domElements.height.manaOrb;
                if(this.global.domElements.position.manaOrb.isAbsolute)
                {
                    position = "absolute";
                    for(var dir in directions)
                    {
                        if(this.global.domElements.position.manaOrb.hasOwnProperty(dir))
                        {
                            directionValues[dir] = this.global.domElements.position.manaOrb[dir];
                        }
                    }
                }
                else
                {
                    // do nothing
                }
                color = this.global.domElements.color.manaOrb.string;
                break;
            case this.global.domElements.name.expBar:
                id = this.global.domElements.name.expBar;
                width = this.global.domElements.width.expBar;
                height = this.global.domElements.height.expBar;
                if(this.global.domElements.position.expBar.isAbsolute)
                {
                    position = "absolute";
                    for(var dir in directions)
                    {
                        if(this.global.domElements.position.expBar.hasOwnProperty(dir))
                        {
                            directionValues[dir] = this.global.domElements.position.expBar[dir];
                        }
                    }
                }
                else
                {
                    // do nothing
                }
                color = this.global.domElements.color.expBar.string;
                break;
            case this.global.domElements.name.staminaBar:
                id = this.global.domElements.name.staminaBar;
                width = this.global.domElements.width.staminaBar;
                height = this.global.domElements.height.staminaBar;
                if(this.global.domElements.position.staminaBar.isAbsolute)
                {
                    position = "absolute";
                    for(var dir in directions)
                    {
                        if(this.global.domElements.position.staminaBar.hasOwnProperty(dir))
                        {
                            directionValues[dir] = this.global.domElements.position.staminaBar[dir];
                        }
                    }
                }
                else
                {
                    // do nothing
                }
                color = this.global.domElements.color.staminaBar.string;
                break;
            case this.global.domElements.name.skillButtons:
                width = this.global.domElements.width.skillButton;
                height = this.global.domElements.height.skillButton;
                for(var j = 0; j < 2; j++)
                {
                    id = this.global.domElements.name.skillButton[j];
                    if(this.global.domElements.position.healthOrb.isAbsolute)
                    {
                        position = "absolute";
                        directionValues = [];
                        for(var dir in directions)
                        {
                            directionValues[j] =
                            {
                                top:null,
                                left:null,
                                bottom:null,
                                right:null
                            }
                            if(this.global.domElements.position.skillButton[j].hasOwnProperty(dir))
                            {
                                directionValues[j][dir] = this.global.domElements.position.skillButton[j][dir];
                            }
                        }
                    }
                    else
                    {
                        // do nothing
                    }
                }
                color = this.global.domElements.color.skillButton.string;
                break;
            case this.global.domElements.name.potionBar:
                id = this.global.domElements.name.potionBar;
                width = this.global.domElements.width.potionBar;
                height = this.global.domElements.height.potionBar;
                if(this.global.domElements.position.potionBar.isAbsolute)
                {
                    position = "absolute";
                    for(var dir in directions)
                    {
                        if(this.global.domElements.position.potionBar.hasOwnProperty(dir))
                        {
                            directionValues[dir] = this.global.domElements.position.potionBar[dir];
                        }
                    }
                }
                else
                {
                    // do nothing
                }
                color = this.global.domElements.color.potionBar.string;
                break;
            case this.global.domElements.name.hotkeyPanel:
                id = this.global.domElements.name.hotkeyPanel;
                width = this.global.domElements.width.hotkeyPanel;
                height = this.global.domElements.height.hotkeyPanel;
                if(this.global.domElements.position.hotkeyPanel.isAbsolute)
                {
                    position = "absolute";
                    for(var dir in directions)
                    {
                        if(this.global.domElements.position.hotkeyPanel.hasOwnProperty(dir))
                        {
                            directionValues[dir] = this.global.domElements.position.hotkeyPanel[dir];
                        }
                    }
                }
                else
                {
                    // do nothing
                }
                color = this.global.domElements.color.hotkeyPanel.string;
                break;
            default:

                break;
        }
        // we have all the info for the element
        console.log("id:" + id + " width:" + width + " height:" + height + " position:" + position);
        var element = document.createElement("div");
        element.style.width = width;
        element.style.height = height;
        element.style.position = position;
        if(directionValues.top && directionValues.left && directionValues.bottom && directionValues.right)
        {
            for(var dir in directionValues)
            {
                console.log(dir)
                if(dir != null)
                {
                    element.setAttribute(dir, directionValues[dir]);
                }
            }
        }
        element.style.background = color;
        this.domElement.appendChild(element);
    }
} // End init
