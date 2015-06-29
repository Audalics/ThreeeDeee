function Global()
{

    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ff0105+0,ff0004+60,ff0105+60,ff0004+60,ff0105+60,ff0004+60,ff0004+60,ff0004+60&amp;0+59,1+60,1+60 */
//    background: -moz-linear-gradient(top,  rgba(255,1,5,0) 0%, rgba(255,0,4,0) 59%, rgba(255,0,4,1) 60%); /* FF3.6+ */
//    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,1,5,0)), color-stop(59%,rgba(255,0,4,0)), color-stop(60%,rgba(255,0,4,1))); /* Chrome,Safari4+ */
//    background: -webkit-linear-gradient(top,  rgba(255,1,5,0) 0%,rgba(255,0,4,0) 59%,rgba(255,0,4,1) 60%); /* Chrome10+,Safari5.1+ */
//    background: -o-linear-gradient(top,  rgba(255,1,5,0) 0%,rgba(255,0,4,0) 59%,rgba(255,0,4,1) 60%); /* Opera 11.10+ */
//    background: -ms-linear-gradient(top,  rgba(255,1,5,0) 0%,rgba(255,0,4,0) 59%,rgba(255,0,4,1) 60%); /* IE10+ */
//    background: linear-gradient(to bottom,  rgba(255,1,5,0) 0%,rgba(255,0,4,0) 59%,rgba(255,0,4,1) 60%); /* W3C */
//    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ff0105', endColorstr='#ff0004',GradientType=0 ); /* IE6-9 */

    this.color =
    {
        white:
        {
            hex:0xffffff,
            rgb:
            {
                r:255,
                g:255,
                b:255
            },
            string:"#ffffff"
        },
        black:
        {
            hex:0x000000,
            rgb:
            {
                r:0,
                g:0,
                b:0
            },
            string:"#000000"
        },
        red:
        {
            hex:0xff0000,
            rgb:
            {
                r:255,
                g:0,
                b:0
            },
            string:"#ff0000"
        },
        green:
        {
            hex:0x00ff00,
            rgb:
            {
                r:0,
                g:255,
                b:0
            },
            string:"#000000"
        },
        blue:
        {
            hex:0x0000ff,
            rgb:
            {
                r:0,
                g:0,
                b:255
            },
            string:"#ff0000"
        },
        gold:
        {
            hex:0xffd700,
            rgb:
            {
                r:255,
                g:215,
                b:0
            },
            string:"#ffd700"
        },
        grey:
        {
            hex:0xcccccc,
            rgb:
            {
                r:204,
                g:204,
                b:204
            },
            string:"#cccccc"
        }
    }

    this.domElements =
    {
        name:
        {
            navigation:"_NAVIGATION_DOM_",
            sidebar:"_SIDEBAR_DOM_",
            viewport:"_VIEWPORT_DOM_",

            healthOrb:"_HEALTH_ORB_DOM_",
            manaOrb:"_MANA_ORB_DOM_",
            expBar:"_EXP_BAR_DOM_",
            staminaBar:"_STAMIN_BAR_DOM_",
            skillButtons:"_SKILL_BUTTONS_DOM_",
            skillButton:
            [
                "_SKILL_BUTTON_A_DOM_",
                "_SKILL_BUTTON_B_DOM_"
            ],
            potionBar:"_POTION_BAR_DOM_",
            potionSlot:
            {
                a:"_POTION_SLOT_A_DOM_",
                b:"_POTION_SLOT_B_DOM_",
                c:"_POTION_SLOT_C_DOM_",
                d:"_POTION_SLOT_D_DOM_",
            },
            hotkeyPanel:"_HOTKEY_PANEL_DOM_",
            hotkeyButton:
            {
                a:"_HOTKEY_BUTTON_A_DOM_",
                b:"_HOTKEY_BUTTON_B_DOM_",
                c:"_HOTKEY_BUTTON_C_DOM_",
                d:"_HOTKEY_BUTTON_D_DOM_",
                e:"_HOTKEY_BUTTON_E_DOM_",
                f:"_HOTKEY_BUTTON_F_DOM_",
                g:"_HOTKEY_BUTTON_G_DOM_",
                h:"_HOTKEY_BUTTON_H_DOM_",
            },
        },
        width:
        {
            viewport:"100%",

            healthOrb:200,
            manaOrb:200,
            expBar:200,
            staminaBar:200,
            skillButton:50,
            potionBar:100,
            hotkeyPanel:100
        },
        height:
        {
            viewport:"100%",

            healthOrb:200,
            manaOrb:200,
            expBar:10,
            staminaBar:2,
            skillButton:50,
            potionBar:25,
            hotkeyPanel:20
        },
        position:
        {
            healthOrb:
            {
                isAbsolute:true,
                //top:,
                left:0,
                bottom:0,
                //right:
            },
            manaOrb:
            {
                isAbsolute:true,
                //top:,
                //left:,
                bottom:0,
                right:0
            },
            expBar:
            {
                isAbsolute:true,
                //top:,
                left:200,
                bottom:10,
                //right:
            },
            staminaBar:
            {
                isAbsolute:true,
                //top:,
                left:200,
                bottom:2,
                //right:
            },
            skillButton:
            [
                {
                    isAbsolute:true,
                    //top:,
                    left:200,
                    bottom:150,
                    //right:
                },
                {
                    isAbsolute:true,
                    //top:,
                    //left:,
                    bottom:150,
                    right:400
                }
            ],
            potionBar:
            {
                isAbsolute:true,
                //top:,
                left:200,
                bottom:150,
                //right:
            },
            hotkeyPanel:
            {
                isAbsolute:true,
                //top:,
                left:200,
                bottom:100,
                //right:
            },
        },
        color:
        {
            viewport:this.color.gold,

            healthOrb:this.color.red,
            manaOrb:this.color.blue,
            expBar:this.color.gold,
            staminaBar:this.color.white,
            skillButton:this.color.red,
            potionBar:this.color.green,
            hotkeyPanel:this.color.green,
        }
    }

    this.viewport = new Viewport(this);
}

// Initialize
Global.prototype.init = function()
{
    this.viewport.init();
} // End init

// Return viewport object
Global.prototype.getViewport = function()
{
    return this.viewport;
} // End getViewport

// Return players health
Global.prototype.getPlayerhealth = function()
{
    return this.viewport;
} // End getViewport
