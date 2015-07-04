function Geo_Control()
{
    this.all = []; // Objects
    this.idDump = []; // Object Ids for ALL objects

    this.visible = []; // Object IDs
    this.hidden = []; // Object IDs

    this.dev = []; // Object IDs

    // Object IDs
    // Not ready to conquer this just yet...
    this.collide =
    {
        a:[],
        b:[],
        c:[],
        d:[],
        water:[],
        air:[],
        dev:[]
    }
}

Geo_Control.prototype.addObject = function(obj, isVisible)
{
    var id = obj.id;
    if(this.idDump.indexOf(id) == -1)
    {
        var isValid = true; // Check geometry... eventually
        var physProps = null;
        if(isValid)
        {
            this.all[id] = obj;
            if(isVisible)
            {
                if(!this.all[id].isVisible)
                {
                    this.all[id].isVisible = true;
                }
                this.visible.push(id);
            }
            else
            {
                if(this.all[id].isVisible)
                {
                    this.all[id].isVisible = false;
                }
                this.hidden.push(id);
            }

            return 0; // All is good
        }
        else
        {
            return 1; // Geometry not valid
        }
    }
    else
    {
        return -1; // Object is already in this geoControl
    }
}

Geo_Control.prototype.hide = function(id)
{
    var idIndex = this.idDump.indexOf(id);
    if(idIndex != -1)
    {
        var visibleIndex = this.visible.indexOf(id);
        if(visibleIndex != -1)
        {
            this.hidden.push(this.visible.splice(visibleIndex, 1));
            return 0; // All is good
        }
        else
        {
            return 1; // Object not visible
        }
    }
    else
    {
        return -1; // Object not found
    }
}

Geo_Control.prototype.show = function(id)
{
    var idIndex = this.idDump.indexOf(id);
    if(idIndex != -1)
    {
        var hiddenIndex = this.hidden.indexOf(id);
        if(hiddenIndex != -1)
        {
            this.visible.push(this.hidden.splice(hiddenIndex, 1));
            return 0; // All is good
        }
        else
        {
            return 1; // Object not hidden
        }
    }
    else
    {
        return -1; // Object not found
    }
}
