function CONTEXT_MENU(ele)
{
    this.element = ele || document.createElement("div");
    this.visible = true;

    this.isVisible = function()
    {
        return this.visible;
    }

    this.resize = function(nWidth, nHeight)
    {
        this.element.style.width = nWidth;
        this.element.style.height = nHeight;
    }
}
