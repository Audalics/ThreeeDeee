function Gui()
{
  var _ID_PREFIX = "_GUI"

  var staticGuiObjects = [];

  for(var i = 0; i < _.gui.static.count(); i++)
  {
    var id = _.gui.static.idPrefix();
    for(var object in _.gui.static)
    {
      var attributes = {};
      for(var attr in object)
      {
        if(attr)
        attributes[attr] = object[attr];
      }
    }

    staticGuiObjects.push(id)
  }
