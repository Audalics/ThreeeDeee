function Gui()
{
  var self = this;

  var _ID_PREFIX = "_GUI"

  self.staticGuiObjects = [];

  var activeGuiObjects = ["header", "control", "view"];

  var validCss = ["width", "height", "backgroundColor", "position", "top", "left", "bottom", "right", "border"]
  for(var i = 0; i < activeGuiObjects.length; i++)
  {
    var attributes = {};
    var object = _.gui.static[activeGuiObjects[i]];
    if(_.debug)
      console.log("#debug# object being added: " + object + " of type " + object.constructor);
    for(var attr in object)
    {
      if(_.debug)
      {
        console.log("#debug# attr being added: " + attr);
      }
      if(attr == "idPrefix")
      {
        attributes["id"] = _.gui.static.idPrefix() + object[attr];
      }
      else if(attr == "css")
      {
        attributes["css"] = {};
        for(var thing in object[attr])
        {
          if(validCss.indexOf(thing) != -1)
            attributes["css"][thing] = object[attr][thing];
        }
      }
      else if(attr == "on")
      {
        for(var event in object[attr])
        {
          attributes["on"][event] = object[attr][event];
        }
      }
      else
      {
        attributes[attr] = object[attr];
      }
    }

    var element = $("<div />", attributes);
    self.staticGuiObjects.push(element);
    $(body).append(element);
  }
}
