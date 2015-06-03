function GLOBAL()
{
  this.WIDTH = window.innerWidth;
  this.HEIGHT = window.innerHeight;

  this.WHITE = new COLOR(0xff, 0xff, 0xff);
  this.LIGHT_GREY = new COLOR(0xc3, 0xc3, 0xc3);
  this.DARK_GREY = new COLOR(0x3c, 0x3c, 0x3c);
  this.YELLOW = new COLOR(0xbc, 0xcf, 0x02);
  this.GREEN = new COLOR(0x5b, 0xb1, 0x2f);
  this.PURPLE = new COLOR(0x9b, 0x53, 0x9c);
  this.PINK = new COLOR(0xeb, 0x65, 0xa0);
  this.BLUE = new COLOR(0x73, 0xc5, 0xe1);

  this.STD =
  {
    COLOR:
    {
      TEXT:
      {
        DEFAULT:this.DARK_GREY,
        WHITE:this.WHITE,
        LIGHT_GREY:this.LIGHT_GREY,
        DARK_GREY:this.DARK_GREY,
        YELLOW:this.YELLOW,
        GREEN:this.GREEN,
        PURPLE:this.PURPLE,
        PINK:this.PINK,
        BLUE:this.BLUE
      },
      BACKGROUND:
      {
        DEFAULT:this.WHITE,
        WHITE:this.WHITE,
        LIGHT_GREY:this.LIGHT_GREY,
        DARK_GREY:this.DARK_GREY,
        YELLOW:this.YELLOW,
        GREEN:this.GREEN,
        PURPLE:this.PURPLE,
        PINK:this.PINK,
        BLUE:this.BLUE
      }
    }
  }


  this.NAVIGATION = new NAVIGATION();
  this.CONTEXT_MENU = new CONTEXT_MENU();
  this.VIEWPORT = new VIEWPORT();

  this.setNavigation = function(element)
  {
    this.NAVIGATION.element = element;
  }

  this.setContextMenu = function(element)
  {
    this.CONTEXT_MENU.element = element;
  }

  this.setViewport = function(element)
  {
    this.VIEWPORT.element = element;
  }

  /*
  FOR THE RESIZE

  navigation.style.width = G.WIDTH;
  navigation.style.height = 75;

  contextMenu.style.width = 200;
  contextMenu.style.height = G.HEIGHT - navigation.offsetHeight;

  viewport.style.width = G.WIDTH - contextMenu.offsetWidth;
  viewport.style.height = G.HEIGHT - navigation.offsetHeight;
  */

  this.windowResize = function(event)
  {
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;

    this.VIEWPORT.resize(this.STD.VIEWPORT.WIDTH(), this.STD.VIEWPORT.HEIGHT());
    this.CONTEXT_MENU.resize(this.STD.CONTEXT_MENU.WIDTH(), this.STD.CONTEXT_MENU.HEIGHT());
    this.NAVIGATION.resize(this.STD.NAVIGATION.WIDTH(), this.STD.NAVIGATION.HEIGHT());
  }
}
