function Game(g)
{
    this.global = g;

    this.app = null;

    this.infoManager = null;
    this.map = null;
    this.animation = null;
    this.sprite = null;
    this.animatedTile = null;
    this.hero = null;
    this.gameClient = null;
    this.transition = null;
    this.item = null;
    this.mob = null;
    this.npc = null;
    this.player = null;
    this.character = null;
    this.chest = null;
    this.mobs = null;
    this.exceptions = null;
    this.config = null;
}

Game.prototype.init = function(app, config)
{
    this.app = app;
    this.app.config = config;
    this.ready = false;
    this.started = false;
    this.hasNeverStarted = true;

    this.viewport = null;
    this.updater = null;
    this.pathfinder = null;
    this.chatinput = null;
    this.bubbleManager = null;
    this.audioManager = null;

    this.player = new Hero("player", "");

    this.entities = {};
    this.deathPositions = {};
    this.entityGrid = null;
    this.pathinggrid = null;
    this.renderingGrid = null;
    this.itemGrid = null;
    this.currentCursor = null;
    this.mouse = new THREE.Vector2();
    this.zoningQueue = [];
    this.previousClickPosition = new THREE.Vector2();

    this.selectedCell = new THREE.Vector2();
    this.SelectedCellVisible = false;
    this.targetCellColor = this.global.color.white.rgbaHalf;
    this.targetCellVisible = true;
    this.hoveringTarget = false;
    this.hoveringMob = false;
    this.hoveringItem = false;
    this.hoveringCollidingTile = false;

    this.infoManager = new InfoManager(this);

    this.currentZoning = null;

    this.cursors = {};
    this.entities = {};
    this.animatedTiles = null;
    this.debugpathing = true;

    this.entityNames =
    {
        inanimates:
        [

        ],
        interactables:
        [

        ],
        items:
        {
            armour:
            {
                belts:
                [
                    "sash",
                    "light_belt",
                    "belt",
                    "heavy_belt",
                    "plated_belt",
                    "demonhide_sash",
                    "sharkskin_belt",
                    "mesh_belt",
                    "battle_belt",
                    "war_belt",
                    "spiderweb_sash",
                    "vampirefang_belt",
                    "mithril_coil",
                    "troll_belt",
                    "colossus_girdle"
                ],
                bodyArmour:
                [
                    "quilted_armour",
                    "leather_armour",
                    "hard_leather_armour",
                    "studded_leather",
                    "ring_mail",
                    "scale_mail",
                    "chain_mail",
                    "breast_plate",
                    "splint_mail",
                    "plate_mail",
                    "field_plate",
                    "gothic_plate",
                    "light_plate",
                    "full_plate_mail",
                    "ancient_armour",
                    "ghost_armour",
                    "serpentskin_armour",
                    "demonhide_armour",
                    "trellised_armour",
                    "linked_mail",
                    "tigulated_mail",
                    "mesh_armour",
                    "cuirass",
                    "russet_armour",
                    "templar_coat",
                    "sharktooth_armour",
                    "embossed_plate",
                    "mage_plate",
                    "chaos_armour",
                    "ornate_plate",
                    "dusk_shroud",
                    "wyrmhide",
                    "scarab_husk",
                    "wire_fleece",
                    "diamond_mail",
                    "loricated_mail",
                    "boneweave",
                    "great_hauberk",
                    "balrog_skin",
                    "hellforged_plate",
                    "kraken_shell",
                    "lacquered_plate",
                    "archon_plate",
                    "shadow_plate",
                    "sacred_armour"
                ],
                boots:
                [
                    "boots",
                    "heavy_boots",
                    "chain_boots",
                    "light_plated_boots",
                    "greaves",
                    "demonhide_boots",
                    "sharkskin_boots",
                    "mesh_boots",
                    "battle_boots",
                    "war_boots",
                    "wyrmhide_boots",
                    "scarabshell_boots",
                    "boneweave_boots",
                    "mirrored_boots",
                    "myrmidon_greaves"
                ],
                gloves:
                [
                    "leather_gloves",
                    "heavy_gloves",
                    "chain_gloves",
                    "light_gauntlets",
                    "gauntlets",
                    "demonhide_gloves",
                    "sharkskin_gloves",
                    "heavy_bracers",
                    "battle_gauntlets",
                    "war_gauntlets",
                    "bramble_mitts",
                    "vampirebone_gloves",
                    "vambraces",
                    "crusader_gauntlets",
                    "ogre_gauntlets"
                ],
                helms:
                [
                    "cap",
                    "skull_cap",
                    "helm",
                    "full_helm",
                    "mask",
                    "bone_helm",
                    "great_helm",
                    "crown",
                    "war_hat",
                    "sallet",
                    "casque",
                    "basinet",
                    "death_mask",
                    "grim_helm",
                    "winged_helm",
                    "grand_crown",
                    "shako",
                    "hydraskull",
                    "armet",
                    "giant_conch",
                    "demonhead",
                    "bone_visage",
                    "spired_helm",
                    "corona"
                ]
            },
            consumables:
            {
                scrolls:
                [
                    "scroll_of_identify",
                    "scroll_of_town_portal"
                ],
                tomes:
                [
                    "tome_of_identify",
                    "tome_of_town_portal"
                ],
                potions:
                {
                    healing:
                    [
                        "minor_healing",
                        "light_healing",
                        "healing",
                        "greater_healing",
                        "super_healing",
                        "grand_healing",
                        "ultra_healing"
                    ],
                    mana:
                    [
                        "minor_mana",
                        "light_mana",
                        "mana",
                        "greater_mana",
                        "super_mana",
                        "grand_mana",
                        "ultra_mana"
                    ],
                    rejuvination:
                    [
                        "quarter_rejuvination",
                        "third_rejuvination",
                        "half_rejuvination",
                        "two-thirds_rejuvination",
                        "three-quarters_rejuvination",
                        "full_rejuvination"
                    ],
                    other:
                    [
                        "antidote",
                        "thawing",
                        "stamina",
                        "book_of_skill",
                        "book_of_stats",
                        "potion_of_life",
                        "scroll_of_resistance"
                    ]
                },
                keys:
                [
                    "normal_key"
                ]
            },
            jewelleries:
            {
                "amulet",
                "ring"
            },
            passives:
            {
                charms:
                [
                    "small_charm",
                    "medium_charm",
                    "large_charm",
                    "grand_charm"
                ]
            },
            questItems:
            {

            },
            shields:
            [
                "buckler",
                "small_shield",
                "large_shield",
                "kite_shield",
                "spiked_shield",
                "bone_shield",
                "tower_shield",
                "gothic_shield",
                "defender",
                "round_shield",
                "scutum",
                "dragon_shield",
                "barbed_shield",
                "grim_shield",
                "pavise",
                "ancient_shield",
                "heater",
                "luna",
                "hyperion",
                "monarch",
                "blade_warrior",
                "troll_nest",
                "aegis",
                "ward"
            ],
            socketables:
            {
                gems:
                [
                    "ruby",
                    "sapphire",
                    "topaz",
                    "emerald",
                    "diamond",
                    "amethyst",
                    "onyx"
                ],
                jewel:"jewel",
                runes:
                [
                    "el",
                    "eld",
                    "tir",
                    "nef",
                    "eth",
                    "ith",
                    "tal",
                    "ral",
                    "ort",
                    "thul",
                    "amn",
                    "sol",
                    "shael",
                    "dol",
                    "hel",
                    "io",
                    "lum",
                    "ko",
                    "fal",
                    "lem",
                    "pul",
                    "um",
                    "mal",
                    "ist",
                    "gul",
                    "vex",
                    "ohm",
                    "lo",
                    "sur",
                    "ber",
                    "jah",
                    "cham",
                    "zod"
                ]
            },
            specials:
            {
                "horadric_cube"
            },
            weapons:
            {
                axes:
                {
                    oneHanded:
                    [
                        "hand_axe",
                        "axe",
                        "double_axe",
                        "military_pick",
                        "war_axe",
                        "hatchet",
                        "cleaver",
                        "twin_axe",
                        "crowbill",
                        "naga",
                        "tomahawk",
                        "small_crescent",
                        "ettin_axe",
                        "war_spike",
                        "berserker_axe"
                    ],
                    twoHanded:
                    [
                        "large_axe",
                        "broad_axe",
                        "battle_axe",
                        "great_axe",
                        "giant_axe",
                        "military_axe",
                        "bearded_axe",
                        "tabar",
                        "gothic_axe",
                        "ancient_axe",
                        "feral_axe",
                        "silver-edged_axe",
                        "decapitator",
                        "champion_axe",
                        "glorious-axe"
                    ]
                },
                bows:
                [
                    "short_bow",
                    "hunting_bow",
                    "long_bow",
                    "composite_bow",
                    "short_battle_bow",
                    "long_battle_bow",
                    "short_war_bow",
                    "long_war_bow",
                    "edge_bow",
                    "razor_bow",
                    "cedar_bow",
                    "double_bow",
                    "short_siege_bow",
                    "large_siege_bow",
                    "rune_bow",
                    "gothic_bow",
                    "spider_bow",
                    "blade_bow",
                    "shadow_bow",
                    "great_bow",
                    "diamond_bow",
                    "crusader_bow",
                    "ward_bow",
                    "hydra_bow"
                ],
                crossbows:
                [
                    "light_crossbow",
                    "crossbow",
                    "heavy_crossbow",
                    "repeating_crossbow",
                    "arbalest",
                    "siege_crossbow",
                    "ballista",
                    "chu-ko-nu",
                    "pellet_bow",
                    "gorgon_crossbow",
                    "colossus_crossbow",
                    "demon_crossbow"
                ],
                daggers:
                [
                    "dagger",
                    "dirk",
                    "kris",
                    "blade",
                    "poignard",
                    "rondel",
                    "cinquedeas",
                    "stiletto",
                    "bone_knife",
                    "mithril_point",
                    "fanged_knife",
                    "legend_spike"
                ],
                fists:
                [

                ],
                javelins:
                [
                    "javelin",
                    "pilum",
                    "short_spear",
                    "glaive",
                    "throwing_spear",
                    "war_javelin",
                    "great_pilum",
                    "simbilan",
                    "spiculum",
                    "harpoon",
                    "hyperion_javelin",
                    "stygian_pilum",
                    "balrog_spear",
                    "ghost_glaive",
                    "winged_harpoon"
                ],
                maces:
                [
                    "club",
                    "spiked_club",
                    "mace",
                    "morning_star",
                    "flail",
                    "war_hammer",
                    "maul",
                    "great_maul",
                    "cudgel",
                    "barbed_club",
                    "flanged_mace",
                    "jagged_star",
                    "knout",
                    "battle_hammer",
                    "war_club",
                    "martel_de_fer",
                    "truncheon",
                    "tyrant_club",
                    "reinforced_mace",
                    "devil_star",
                    "scourge",
                    "legendary_mallet",
                    "ogre_maul",
                    "thunder_maul"
                ],
                polearms:
                [
                    "bardiche",
                    "voulge",
                    "scythe",
                    "poleaxe",
                    "halberd",
                    "war_scythe",
                    "lochbar_axe",
                    "bill",
                    "battle_scythe",
                    "partizan",
                    "bee-de-corbian",
                    "grim_scythe",
                    "ogre_axe",
                    "colossus_voulge",
                    "thresher",
                    "cryptic_axe",
                    "great_poleaxe",
                    "giant_thresher"
                ],
                scepters:
                [
                    "scepter",
                    "grand_scepter",
                    "war_scpeter",
                    "rune_scepter",
                    "holy_water_sprinkler",
                    "divine_scepter",
                    "mighty_scepter",
                    "seraph_rod",
                    "caduceus"
                ],
                spears:
                [
                    "spear",
                    "trident",
                    "brandistock",
                    "spetum",
                    "pike",
                    "war_spear",
                    "fuscina",
                    "war_fork",
                    "yari",
                    "lance",
                    "hyperion_spear",
                    "stygian_pike",
                    "mancatcher",
                    "ghost_spear",
                    "war_pike"
                ],
                staves:
                [
                    "short_staff",
                    "long_staff",
                    "gnarled_staff",
                    "battle_staff",
                    "war_staff",
                    "jo_staff",
                    "quarterstaff",
                    "cedar_staff",
                    "gothic_staff",
                    "rune_staff",
                    "walking_stick",
                    "stalagmite",
                    "elder_staff",
                    "shillelagh",
                    "archon_staff"
                ],
                swords:
                {
                    oneHanded:
                    [
                        "short_sword",
                        "scimitar",
                        "sabre",
                        "falchion",
                        "crystal_sword",
                        "broad_sword",
                        "long_sword",
                        "war_sword",
                        "galdius",
                        "cutlass",
                        "shamshir",
                        "tulwar",
                        "dimensional_blade",
                        "battle_sword",
                        "rune_sword",
                        "ancient_sword",
                        "falcata",
                        "ataghan",
                        "elegant_blade",
                        "hydra_edge",
                        "phase_blade",
                        "conquest_sword",
                        "cryptic_sword",
                        "mythical_sword"
                    ],
                    twoHanded:
                    [
                        "two-handed_sword",
                        "claymore",
                        "giant_sword",
                        "bastard_sword",
                        "flamberge",
                        "great_sword",
                        "espandon",
                        "dacian_falx",
                        "tusk_sword",
                        "gothic_sword",
                        "zweihander",
                        "executioner_sword",
                        "legend_sword",
                        "highland_blade",
                        "balrog_blade",
                        "champion_sword",
                        "colossus_sword",
                        "colossus_blade"
                    ]
                }
            }
        }
    } // End entityNames


}

Game.prototype.setup = function(bubbleContainer, viewportContainer, input)
{
    this.setBubbleManager(new Bubblemanager(bubbleContainer, this.global, this));
    this.setViewport(new Viewport(this.global));
    this.setChatInput(input);
}

Game.prototype.setBubbleManager = function(bMan)
{
    this.bubbleManager = bMan;
    this.global.setBubbleManager(bMan);
}

Game.prototype.setStorage = function(storage)
{
    this.storage = storage;
}

Game.prototype.setRenderer = function(renderer)
{
    this.renderer = renderer;
}

Game.prototype.setUpdater = function(updater)
{
    this.updater = updater;
}

Game.prototype.setPathfinder = function(pathfinder)
{
    this.pathfinder = pathfinder;
}

Game.prototype.setChatInput = function(element)
{
    this.chatinput = element;
}

Game.prototype.loadMap = function(element)
{
    var self = this;

    this.map = new Map(this.global, this);

    this.map.ready()
}
