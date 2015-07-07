function Config(build)
{
    this.dev =
    {
        host:"localhost",
        port:8000,
        dispatcher:false
    }
    this.build = JSON.parse(build);
}

Config.prototype.init = function(local)
{
    try
    {
        config.local = JSON.parse(local);
    }
    catch(e)
    {
        // local doesnt exist
    }
}
