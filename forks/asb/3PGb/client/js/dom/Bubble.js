function Bubble(id, element, time)
{
    this.global = g;

    this.timeout = 5000;

    this.id = this.global.domElements.inGame.bubble.id + id;
    this.domElement = element;
    this.timer = new Timer(this.timeout, time);
}

Bubble.prototype.isOver = function(time)
{
    if(this.timer.isOver(time))
    {
        return true;
    }
    return false;
}

Bubble.prototype.destroy = function()
{
    this.domElement.parentNode.removeChild(this.domElement);
}

Bubble.prototype.reset = function(time)
{
    this.timer.lastTime = time;
}
