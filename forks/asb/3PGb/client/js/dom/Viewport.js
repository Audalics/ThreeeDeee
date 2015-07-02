function Viewport(g)
{
    this.global = g;

    this.domElement = null;

    this.domElements = [];
    for(var name in this.global.domElements.list.inGame)
    {
        this.domElements.push(this.global.domElements.inGame[name]);
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
    this.domElement.id = this.global.domElements.main.viewport.id;
    this.domElement.style.width = this.global.domElements.main.viewport.width;
    this.domElement.style.height = this.global.domElements.main.viewport.height;
    this.domElement.style.background = this.global.domElements.main.viewport.color;
    document.body.appendChild(this.domElement);

    for(var i = 0; i < this.domElements.length; i++)
    {
        var id, width, height, position, top, left, bottom, right, color;



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
