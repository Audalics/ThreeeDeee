function Storage()
{
    this.data = null;
}

Storage.prototype.init = function()
{
    if(this.hasLocalStorage() && localStorage.data)
    {
        this.data = JSON.parse(localStorage.data);
    }
    else
    {
        this.resetData();
    }
}

Storage.prototype.resetData = function()
{
    this.data =
    {
        hasAlreadyPlayed:false,
        player:
        {
            name:null, // String
            inventory:null,
            character:null,
            skills:null
        },
        achievements:
        {
            unlocked:[],
            killCount:0,
            damageCount:0,
            damageTaken:0,
            deathCount:0,
            greyItemCount:0, // Junk Tier: 0
            whiteItemCount:0, // Base Tier: 1-80
            lBlueItemCount:0, // Magic I Tier: 1-80
            blueitemCount:0, // Magic II Tier: 80-160
            greenItemCount:0, // Set Tier: 15-80
            yellowItemCount:0, // Rare I Tier: 20-80
            orangeItemCount:0, // Rare II Tier: 80-160
            lRedItemCount:0, // Exotic I Tier: 60-120
            pinkItemCount:0, // Exotic II Tier: 140-160
            amberItemCount:0, // Unique Tier
            redItemCount:0, // Masterpiece Tier
            cyanItemCount:0, // Quest Item
            lPurpleItemCount:0, // Special Item
            limeItemCount:0, // H4x0r Tier
            purpleItemCount:0, // Dev Tier
            rainbowItemCount:0 // Legendary Tier

        }
    }
}

Storage.prototype.hasLocalStorage = function()
{
    if(Storage !== void(0))
    {
        return true;
    }
    else
    {
        return false;
    }
}

Storage.prototype.save = function()
{
    if(this.hasLocalStorage())
    {
        localStorage.data = JSON.stringify(this.data);
    }
}

Storage.prototype.clear = function()
{
    if(this.hasLocalStorage())
    {
        localStorage.data = "";
        this.resetData();
    }
}

Storage.prototype.hasAlreadyPlayed = function()
{
    return this.data.hasAlreadyPlayed;
}

Storage.prototype.initPlayer = function(name)
{
    this.data.hasAlreadyplayed = true
    this.setPlayerName(name)
}

Storage.prototype.setPlayerName = function(name)
{
    this.data.player.name = name;
    this.save();
}

Storage.prototype.setPlayerCharacter = function(char)
{
    this.data.player.character = char;
    this.save();
}

Storage.prototype.setPlayerInventory = function(inv)
{
    this.data.player.inventory = inv;
    this.save();
}

Storage.prototype.setPlayerSkills = function(skills)
{
    this.data.player.skills = skills;
    this.save();
}

Storage.prototype.saveplayer = function(character, inventory, skills)
{
    this.setPlayerCharacter(character);
    this.setPlayerInventory(inventory);
    this.setPlayerSkills(skills);
}

Storage.prototype.hasUnlockedAchievement = function(id)
{
    return this.data.achievements.unlocked[id];
}

Storage.prototype.unlockAchievement = function(id)
{
    if(!this.hasUnlockedAchievement(id))
    {
        this.data.achievements.unlocked[id] = true;
        this.save();
        return 0; // All is good
    }
    return 1; // Achievement already unlocked
}

Storage.prototype.getAchievementCount = function()
{
    var cnt = 0;
    for(var i = 0; i < this.data.achievements.unlocked.length; i++)
    {
        if(this.data.achievements.unlocked[i])
            cnt++;
    }
    return cnt;
}

Storage.prototype.getKillCount = function()
{
    return this.data.achievements.killCount;
}

Storage.prototype.getDamageCount = function()
{
    return this.data.achievements.damageCount;
}

Storage.prototype.getDamageTaken = function()
{
    return this.data.achievements.damageTaken;
}

Storage.prototype.getDeathCount = function()
{
    return this.data.achievements.deathCount;
}

Storage.prototype.getGreyItemCount = function()
{
    return this.data.achievements.greyItemCount;
}

Storage.prototype.getWhiteItemCount = function()
{
    return this.data.achievements.whiteItemCount;
}

Storage.prototype.getLBlueItemCount = function()
{
    return this.data.achievements.lBlueItemCount;
}

Storage.prototype.getBlueitemCount = function()
{
    return this.data.achievements.blueitemCount;
}

Storage.prototype.getGreenItemCount = function()
{
    return this.data.achievements.greenItemCount;
}

Storage.prototype.getYellowItemCount = function()
{
    return this.data.achievements.yellowItemCount;
}

Storage.prototype.getOrangeItemCount = function()
{
    return this.data.achievements.orangeItemCount;
}

Storage.prototype.getLRedItemCount = function()
{
    return this.data.achievements.lRedItemCount;
}

Storage.prototype.getPinkItemCount = function()
{
    return this.data.achievements.pinkItemCount;
}

Storage.prototype.getAmberItemCount = function()
{
    return this.data.achievements.amberItemCount;
}

Storage.prototype.getRedItemCount = function()
{
    return this.data.achievements.redItemCount;
}

Storage.prototype.getCyanItemCount = function()
{
    return this.data.achievements.cyanItemCount;
}

Storage.prototype.getLPurpleItemCount = function()
{
    return this.data.achievements.lPurpleItemCount;
}

Storage.prototype.getLimeItemCount = function()
{
    return this.data.achievements.limeItemCount;
}

Storage.prototype.getPurpleItemCount = function()
{
    return this.data.achievements.purpleItemCount;
}

Storage.prototype.getRainbowItemCount = function()
{
    return this.data.achievements.rainbowItemCount;
}

Storage.prototype.tickKillCount = function(num)
{
    this.data.achievements.killCount += num;
}

Storage.prototype.tickKillCount = function()
{
    this.data.achievements.killCount++;
}

Storage.prototype.addDamageCount = function(num)
{
    this.data.achievements.damageCount += num;
}

Storage.prototype.addDamageTaken = function(num)
{
    this.data.achievements.damageTaken += num;
}

Storage.prototype.tickDeathCount = function()
{
    this.data.achievements.deathCount++;
}

Storage.prototype.tickGreyItemCount = function()
{
    this.data.achievements.greyItemCount++;
}

Storage.prototype.tickWhiteItemCount = function()
{
    this.data.achievements.whiteItemCount++;
}

Storage.prototype.tickLBlueItemCount = function()
{
    this.data.achievements.lBlueItemCount++;
}

Storage.prototype.tickBlueitemCount = function()
{
    this.data.achievements.blueitemCount++;
}

Storage.prototype.tickGreenItemCount = function()
{
    this.data.achievements.greenItemCount++;
}

Storage.prototype.tickYellowItemCount = function()
{
    this.data.achievements.yellowItemCount++;
}

Storage.prototype.tickOrangeItemCount = function()
{
    this.data.achievements.orangeItemCount++;
}

Storage.prototype.tickLRedItemCount = function()
{
    this.data.achievements.lRedItemCount++;
}

Storage.prototype.tickPinkItemCount = function()
{
    this.data.achievements.pinkItemCount++;
}

Storage.prototype.tickAmberitemCount = function()
{
    this.data.achievements.amberItemCount++;
}

Storage.prototype.tickRedItemCount = function()
{
    this.data.achievements.redItemCount++;
}

Storage.prototype.tickCyanItemCount = function()
{
    this.data.achievements.cyanItemCount++;
}

Storage.prototype.tickLPurpleItemCount = function()
{
    this.data.achievements.lPurpleItemCount++;
}

Storage.prototype.tickLimeItemCount = function()
{
    this.data.achievements.limeItemCount++;
}

Storage.prototype.tickPurpleItemCount = function()
{
    this.data.achievements.purpleItemCount++;
}

Storage.prototype.tickRainbowItemCount = function()
{
     this.data.achievements.rainbowItemCount++;
}
