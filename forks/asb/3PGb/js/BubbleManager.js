function BubbleManager(g)
{
    this.global = g;

    this.init = function(container)
    {
        this.container = container;
        this.bubbles = {};
    }

    this.getBubbleById = function(id)
    {
        if(id in this.bubbles)
        {
            return this.bubbles[id];
        }
        return null;
    }

    this.create = function(id, message, time)
    {
        if(this.bubbles[id])
        {
            this.bubbles[i].reset(time);
            this.global(this.global.prefix.bubble + id).innerHTML = message;
        }
        else
        {

        }
    }
}
