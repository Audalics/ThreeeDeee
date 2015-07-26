function Config(filepath)
{
  var self = this;

  if(filepath)
  {
    return false; // Not implemented
  }
  else
  {

    // Debug info
    console.log("@info@ Construct config with defaults")
    //

    if(!window["_"])
    {

      // Debug info
      console.log("@info@ Creating new REF")
      //

      window["_"] = new Lookup();
      _.add("debug", true);
    }

    var temp;
    var r, g, b;

    _.add("color", {});
    _.color.add("red", {});
    _.color.add("green", {});
    _.color.add("blue", {});
    _.color.add("white", {});
    _.color.add("black", {});
    _.color.add("ltGrey", {});
    _.color.add("grey", {});
    _.color.add("dkGrey", {});
    _.color.add("orange", {});
    _.color.add("purple", {});
    _.color.add("teal", {});
    _.color.add("brown", {});
    _.color.add("yellow", {});

    temp = _.color.red;
    r = 255;
    g = 0;
    b = 0;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.green;
    r = 0;
    g = 255;
    b = 0;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.blue;
    r = 0;
    g = 0;
    b = 255;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.white;
    r = 255;
    g = 255;
    b = 255;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.black;
    r = 0;
    g = 0;
    b = 0;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.ltGrey;
    r = 192;
    g = 192;
    b = 192;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.grey;
    r = 128;
    g = 128;
    b = 128;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.dkGrey;
    r = 64;
    g = 64;
    b = 64;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.orange;
    r = 255;
    g = 192;
    b = 0;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.purple;
    r = 255;
    g = 0;
    b = 255;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.teal;
    r = 0;
    g = 255;
    b = 255;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.brown;
    r = 160;
    g = 64;
    b = 32;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    temp = _.color.yellow;
    r = 255;
    g = 255;
    b = 0;

    temp.add("r", {});
    temp.r.add("dec", {});
    temp.r.add("hex", {});
    temp.r.dec.add("number", r);
    temp.r.dec.add("string", r.toString());
    temp.r.hex.add("number", parseInt(r, 16));
    temp.r.hex.add("string", parseInt(r, 16).toString(16));

    temp.add("g", {});
    temp.g.add("dec", {});
    temp.g.add("hex", {});
    temp.g.dec.add("number", g);
    temp.g.dec.add("string", g.toString());
    temp.g.hex.add("number", parseInt(g, 16));
    temp.g.hex.add("string", parseInt(g, 16).toString(16));

    temp.add("b", {});
    temp.b.add("dec", {});
    temp.b.add("hex", {});
    temp.b.dec.add("number", b);
    temp.b.dec.add("string", b.toString());
    temp.b.hex.add("number", parseInt(b, 16));
    temp.b.hex.add("string", parseInt(b, 16).toString(16));

    temp.add("hex", {});
    temp.hex.add("string", "#" + temp.r.hex.string() + temp.g.hex.string() + temp.b.hex.string());
    temp.add("rgb", "rgb(" + temp.r.dec.string() + ", " + temp.g.dec.string() + ", " + temp.b.dec.string() + ")");

    _.add("screen", {});
    _.screen.add("width", window.innerWidth);
    _.screen.add("height", window.innerHeight);

    _.add("gui", {});
    _.gui.add("static", {});
    _.gui.static.add("idPrefix", "_GUI_STATIC")
    _.gui.static.add("header", {});
    _.gui.static.header.add("idPrefix", "_HEADER");
    _.gui.static.header.add("css", {});
    _.gui.static.header.css.add("width", _.screen.width());
    _.gui.static.header.css.add("height", 200);
    _.gui.static.header.css.add("backgroundColor", _.color.yellow.rgb());
    _.gui.static.header.css.add("position", "absolute");
    _.gui.static.header.css.add("top", 0);
    _.gui.static.header.css.add("left", 0);
    console.log(_.gui.static.header.css.backgroundColor())
    _.gui.static.add("control", {});
    _.gui.static.control.add("idPrefix", "_CONTROL");
    _.gui.static.control.add("css", {});
    _.gui.static.control.css.add("width", 200);
    _.gui.static.control.css.add("height", _.screen.height() - _.gui.static.header.css.height());
    _.gui.static.control.css.add("backgroundColor", _.color.purple.rgb());
    _.gui.static.control.css.add("position", "absolute");
    _.gui.static.control.css.add("bottom", 0);
    _.gui.static.control.css.add("left", 0);
    console.log(_.gui.static.control.css.backgroundColor())
    _.gui.static.add("view", {});
    _.gui.static.view.add("idPrefix", "_VIEW");
    _.gui.static.view.add("css", {});
    _.gui.static.view.css.add("width", _.screen.width() - _.gui.static.control.css.width());
    _.gui.static.view.css.add("height", _.screen.height() - _.gui.static.header.css.height());
    _.gui.static.view.css.add("backgroundColor", _.color.orange.rgb());
    _.gui.static.view.css.add("position", "absolute");
    _.gui.static.view.css.add("bottom", 0);
    _.gui.static.view.css.add("right", 0);
    console.log(_.gui.static.view.css.backgroundColor())

    _.gui.static.add("count", _.gui.static.length);

    _.gui.add("map", {});
    _.gui.map.add("idPrefix", "_MAP")
    _.gui.map.add("width", 0);
    _.gui.map.add("height", 0);
    _.gui.map.add("tile", {});
    _.gui.map.tile.add("idPrefix", "_TILE");
    _.gui.map.tile.add("css", {});
    _.gui.map.tile.css.add("width", 0);
    _.gui.map.tile.css.add("height", 0);
    _.gui.map.tile.css.add("backgroundColor", _.color.white.rgb());
    console.log(_.gui.map.tile.css.backgroundColor())
  }
}
