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
            rgba:"rgb(255,255,255,1)",
            string:"#ffffff"
        },
        black:
        {
            hex:0x000000,
            rgba:"rgb(0,0,0,1)",
            string:"#000000"
        },
        red:
        {
            hex:0xff0000,
            rgba:"rgb(255,0,0,1)",
            string:"#ff0000"
        },
        green:
        {
            hex:0x00ff00,
            rgba:"rgb(0,255,0,1)",
            string:"#00ff00"
        },
        blue:
        {
            hex:0x0000ff,
            rgba:"rgb(0,0,255,1)",
            string:"#0000ff"
        },
        gold:
        {
            hex:0xffd700,
            rgba:"rgb(255,215,0,1)",
            string:"#ffd700"
        },
        grey:
        {
            hex:0xcccccc,
            rgba:"rgb(204,204,204,1)",
            string:"#cccccc"
        },
        gray:
        {
            // Will be the same as grey outside of this block VVVVVVV
            //                                                 VVVVV
            //                                                  VVV
            //                                                   V
        }
    }
    this.color.gray = this.color.grey;
    //background: -webkit-linear-gradient(top,  rgba(255,1,5,0) 0%,rgba(255,0,4,0) 59%,rgba(255,0,4,1) 60%); /* Chrome10+,Safari5.1+ */
    this.orbScale = 0.15;
    this.orbSize = function()
    {
        return (this.width() * this.orbScale);
    };

    this.expBarSize = function()
    {
        return (this.width() - (2 * this.orbSize()));
    };
    var self = this;
    this.domElements =
    {
        list:
        {
            ofLists:
            {
                main:"main",
                inGame:"inGame"
            },
            main:
            [
                "viewport"
                /*
                "navigation",
                "submenu"
                */
            ],
            inGame:
            [
                "healthOrb",
                "manaOrb",
                "expBar",
                "staminaBar",
                "consumablesBar",
                "skillA"
                /*
                "skillButtons",
                "potionBar",
                "hotkeyPanel"
                */
            ]
        },
        main:
        {
            viewport:
            {
                id:"_VIEWPORT_DOM_",
                width:self.width(),
                height:self.height(),
                color:this.color.grey,
                position:null,
                top:null,
                left:null,
                bottom:null,
                right:null
            }
            /*
            navigation:
            {},
            submenu:
            {}
            */
        },
        inGame:
        {
            healthOrb:
            {
                id:"_HEALTH_ORB_DOM_",
                width:self.orbSize(),
                height:self.orbSize(),
                color:this.color.red,
                position:"absolute",
                top:null,
                left:0,
                bottom:0,
                right:null
            },
            manaOrb:
            {
                id:"_MANA_ORB_DOM_",
                width:self.orbSize(),
                height:self.orbSize(),
                color:this.color.blue,
                position:"absolute",
                top:null,
                left:null,
                bottom:0,
                right:0
            },
            expBar:
            {
                id:"_EXP_BAR_DOM_",
                width:self.expBarSize(),
                height:self.orbSize() * .15,
                color:this.color.gold,
                position:"absolute",
                top:null,
                left:self.orbSize(),
                bottom:0,
                right:null
            },
            staminaBar:
            {
                id:"_STAMINA_BAR_DOM_",
                width:self.expBarSize(),
                height:(self.orbSize() * .025) > 0 ? self.orbSize() * .025 : 5,
                color:this.color.white,
                position:"absolute",
                top:null,
                left:self.orbSize(),
                bottom:self.orbSize() * .15,
                right:null
            },
            consumablesBar:
            {
                id:"_CONSUMABLES_BAR_DOM_",
                width:self.expBarSize(),
                height:self.orbSize() * .2,
                color:this.color.grey,
                position:"absolute",
                top:null,
                left:self.orbSize(),
                bottom:self.orbSize() * .175,
                right:null
            },
            skillA:
            {
                id:"_SKILL_A_DOM_",
                width:self.orbSize() * .4,
                height:self.orbSize() * .4,
                color:this.color.green,
                position:"absolute",
                top:null,
                left:self.orbSize(),
                bottom:self.orbSize() * .375,
                right:null
            },
            skillB:
            {
                id:"_SKILL_B_DOM_",
                width:self.orbSize() * .4,
                height:self.orbSize() * .4,
                color:this.color.green,
                position:"absolute",
                top:null,
                left:null,
                bottom:self.orbSize() * .375,
                right:self.orbSize()
            },
            hotkeyBar:
            {
                id:"_HOTKEY_BAR_DOM_",
                width:self.expBarSize() - (2 * (self.orbSize() * .4)),
                height:(self.orbSize() * .4) * .66,
                color:this.color.red,
                position:"absolute",
                top:null,
                left:self.orbSize() + (self.orbSize() * .4),
                bottom:self.orbSize() * .375,
                right:null
            }
            /*
            skillButtons:
            {},
            potionBar:
            {},
            hotkeyPanel:
            {}

            //  Template for these styles (plz update all dem niggs if chng thx)
                id:null,
                width:null,
                height:null,
                color:null,
                position:null,
                top:null,
                left:null,
                bottom:null,
                right:null
            //

            */
        }
    }

    this.viewport = new Viewport(this);
}

Global.prototype.width = function()
{
    return window.innerWidth;
};
Global.prototype.height = function()
{
    return window.innerHeight;
};

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
