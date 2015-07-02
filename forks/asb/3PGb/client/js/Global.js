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
            string:"#0000ff"
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
                /*
                "staminaBar",
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
                width:null,
                height:null,
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
                width:250,
                height:250,
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
                width:250,
                height:250,
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
                width:400,
                height:5,
                color:this.color.gold,
                position:"absolute",
                top:null,
                left:250,
                bottom:5,
                right:null
            },

            /*
            staminaBar:
            {},
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
