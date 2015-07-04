function Bubble_Manager(container, g, game)
{
    this.global = g;

    this.game = game;

    this.container = container;

    this.idDump = [];

    this.bubbles = [];
    this.bubbleChunk = 100;
    this.bubbleChunks = 1;
}

Bubble_Manager.prototype.initChunk = function()
{
    for(var i = this.bubbleChunk * (this.bubbleChunks - 1); i < this.bubbleChunk * this.bubbleChunks; i++)
    {
        this.bubbles[i] = null;
    }
}

Bubble_Manager.prototype.getBubbleById = function(id)
{
    if(this.bubbles[id] != null)
    {
        return this.bubbles[id];
    }
    return null;
}

Bubble_Manager.prototype.create = function(message, time, gridLocation)
{
    var id = this.getNewBubbleId();
    this.bubble[id] = new Bubble(id, message, time, gridLocation);
    this.bubble[id].element.innerHTML = message;
    if(this.game.playerCanSee(gridLocation))
    {
        this.container.appendChild(this.bubble[id].element);
    }
}

Bubble_Manager.prototype.update = function()
{
    var self = this;
    var bubblesToDelete = [];

    for(var i = 0; i < this.bubblesChunk * this.bubbleChunks; i++)
    {
        if(this.bubbles[i] != null)
        {
            if(this.bubbles[i].isOver(time))
            {
                this.bubbles[i].destroy();
                this.bubblesToDelete.push(i);
            }
        }
    }

    for(var i = 0; i < bubblesToDelete.length; i++)
    {
        this.bubbles[bubblesToDelete[i]] = null;
    }
}

Bubble_Manager.prototype.clean = function()
{
    var self = this;

    var bubblesToDelete = [];

    for(var i = 0; i < this.bubblesChunk * this.bubbleChunks; i++)
    {
        if(this.bubbles[i] != null)
        {
            this.bubbles[i].destroy();
            this.bubblesToDelete.push(i);
        }
    }

    for(var i = 0; i < bubblesToDelete.length; i++)
    {
        this.bubbles[bubblesToDelete[i]] = null;
    }
}

Bubble_Manager.prototype.destroyBubble = function(id)
{
    var bubble = this.getBubbleById(id);
    if(bubble != null)
    {
        bubble.destroy();
        this.bubbles[id] = null;
    }
}
