function COLOR(r, g, b)
{
    this.red = r;
    this.green = g;
    this.blue = b;

    this.toString = function()
    {
        return "#" + r.toString(16) + g.toString(16) + b.toString(16);
    }
}
