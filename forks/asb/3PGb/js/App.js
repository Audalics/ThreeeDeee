function App(g)
{
    this.global = g;

    this.init = function()
    {
        this.global.app = this;
    }

    this.focus = function()
    {
        // Make sure the viewport is focused
    }
}
