function Lookup(){}

Lookup.prototype.get = function(term)
{
  var self = this;

  if(self.has(term))
  {
    return self[term]();
  }
  else
  {
    return false;
  }
};

Lookup.prototype.exists = function(value)
{
  var self = this;

  for(var term in self)
  {
    console.log("#debug# " + term + " term type: " + typeof(term))
    if(self[term]() === value)
    {
      return true;
    }
  }
  return false;
}

Lookup.prototype.add = function(term, value)
{
  var self = this;

  switch(typeof(value))
  {
    case "object":
      if(value === null)
        break;
      else
      {
        var constructor = value.constructor;
        switch(constructor)
        {
          case Object:
            self[term] = function()
            {
              return value;
            };
            self[term].get = Lookup.prototype.get;
            self[term].exists = Lookup.prototype.exists;
            self[term].add = Lookup.prototype.add;
            self[term].change = Lookup.prototype.change;
            self[term].has = Lookup.prototype.has;
            self[term].delete = Lookup.prototype.delete;
            self[term].clone = Lookup.prototype.clone;
            return true;
          default:
            //console.log("@info@(self::" + self.constructor + "::" + term + "::value::constructor) " + constructor);
            break;
        }
      }
      return true;
    case "string":
      self[term] = function()
      {
        return value;
      };
      return true;
    case "number":
      self[term] = function()
      {
        return value;
      };
      return true;
    case "boolean":
      self[term] = function()
      {
        return value;
      };
      return true;
    default:
      break;
  }
  return false;
};


Lookup.prototype.change = function(term, value)
{
  var self = this;

  if(self.has(term))
  {
    switch(typeof(value))
    {
      case "object":
        if(value === null)
          break;
        else
        {
          var constructor = value.constructor;
          switch(constructor)
          {
            case Object:
              self[term] = function()
              {
                return value;
              };
              self[term].get = Lookup.prototype.get;
              self[term].exists = Lookup.prototype.exists;
              self[term].add = Lookup.prototype.add;
              self[term].change = Lookup.prototype.change;
              self[term].has = Lookup.prototype.has;
              self[term].delete = Lookup.prototype.delete;
              self[term].clone = Lookup.prototype.clone;
              return true;
            default:
              //console.log("@info@(self::" + self.constructor + "::" + term + "::value::constructor) " + constructor);
              break;
          }
        }
        return true;
      case "string":
        self[term] = function()
        {
          return value;
        };
        return true;
      case "number":
        self[term] = function()
        {
          return value;
        };
        return true;
      case "boolean":
        self[term] = function()
        {
          return value;
        };
        return true;
      default:
        break;
      }
  }
  else
  {
    return false;
  }
};

Lookup.prototype.has = function(term)
{
  var self = this;

  if(self[term])
  {
    return true;
  }
  else
  {
    return false;
  }
};

Lookup.prototype.delete = function(term)
{
  var sefl = this;

  if(self.has(term))
  {
    self[term] = undefined;
    return true;
  }
  else
  {
    return false;
  }
};

Lookup.prototype.clone = function(term)
{
  var self = this;

  var clone;

  if(self.has(term))
  {
    var value = self[term]();
    switch(typeof(value))
    {
      case "object":
        if(value === null)
          break;
        else
        {
          var constructor = value.constructor;
          switch(constructor)
          {
            case Object:
              clone = {};

              for(var attr in value)
              {
                clone[attr] = value.clone(attr);
              }
              clone.get = self.prototype.get;
              clone.exists = self.prototype.exists;
              clone.add = self.prototype.add;
              clone.change = self.prototype.change;
              clone.has = self.prototype.has;
              clone.delete = self.prototype.delete;
              clone.clone = self.prototype.clone;
              return clone;
            default:
              //console.log("@info@(self::" + self.constructor + "::" + term + "::value::constructor) " + constructor);
              break;
          }
        }
        break;
      case "string":
        clone = self[term]();
        return clone;
      case "number":
        clone = self[term]();
        return clone;
      case "boolean":
        clone = self[term]();
        return clone;
      default:
        break;
      }
  }
  else
  {
    return undefined;
  }
}
