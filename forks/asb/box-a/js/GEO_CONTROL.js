function GEO_CONTROL(GLOBAL)
{
    this.GLOBAL = {}

    this.visible = [];
    this.hidden = [];
    this.viewport = GLOBAL.getViewport();

    this.idDump = [];

    this.add = function(name, geo, phys_mods)
    {
        if(this.idDump.indexOf(name) == -1)
        {
            this.visible[name] =
            {
                id:name,
                geometry:geo,
                physMods:phys_mods;
            };
            this.idDump.add(name);
        }
        else
        {
            // This name is already in use
            // Idk what to do...
        }
    }

    this.request = function(name)
    {
        var index = this.idDump.indexOf(name)
        if(index != -1)
        {
            return this.visible[name];
        }
        else
        {
            return -1;
        }
    }

    this.remove = function(name)
    {
        var index = this.idDump.indexOf(name)
        if(index != -1)
        {
            this.visible[name] = {};
            this.idDump.splice(index, 1);
        }
    }

    this.requestVisible = function()
    {
        return this.visible;
    }

    this.setGlobal = function(g)
    {
        this.GLOBAL = g;
    }
}
