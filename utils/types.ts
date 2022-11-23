import { Character, CharacterElement, CharacterInheritance, CharacterMistery, CharacterRunarcanaClass, Component, Conjuration, Duration, Element, ElementIngredient, ElementRecipe, Inheritance, InheritanceLineage, InheritanceOrigin, InheritanceRegion, Lineage, Mystery, Origin, Past, Range, Region, RunarcanaClass, Spell, SpellCharacter, SpellClass, SpellComponent, SpellLineage, SpellMystery, SpellOrigin } from '@prisma/client'
import AdditionalInfos from '../src/schemas/CharacterAddons/AdditionalInfos'
import { Characteristic } from '../src/schemas/CharacterAddons/Characteristic'

type DataBaseCharacter = Character & {
    Past: Past;
    Region: Region & {
        InheritanceRegion: (InheritanceRegion & {
            Region: Region;
            Inheritance: Inheritance
        })[]
    };
    Origin: Origin & {
        SpellOrigins: (SpellOrigin & {
            Spell: Spell & {
                Conjuration: Conjuration;
                Duration: Duration;
                Range: Range;
                SpellComponents: (SpellComponent & {
                        Component: Component
                })[];
                SpellMysteries: (SpellMystery & {
                    Spell: Spell;
                    Mystery: Mystery
                })[]
            }
        })[];
        InheritanceOrigin: (InheritanceOrigin & {
            Origin: Origin;
            Inheritance: Inheritance
        })[];
        Lineages: Lineage[]
    };
    Lineage: Lineage & {
        SpellLineages: (SpellLineage & {
            Spell: Spell & {
                Conjuration: Conjuration;
                Duration: Duration;
                Range: Range;
                SpellComponents: (SpellComponent & {
                    Component: Component
                })[];
                SpellMysteries: (SpellMystery & {
                    Spell: Spell;
                    Mystery: Mystery
                })[]
            }
        })[];
        InheritanceLineage: (InheritanceLineage & {
            Lineage: Lineage;
            Inheritance: Inheritance
        })[]
    };
    CharacterRunarcanaClass: (CharacterRunarcanaClass & {
        RunarcanaClass: RunarcanaClass & {
            SpellClasses: (SpellClass & {
                Spell: Spell & {
                    Conjuration: Conjuration;
                    Duration: Duration;
                    Range: Range;
                    SpellComponents: (SpellComponent & {
                        Component: Component
                    })[]; SpellMysteries: (SpellMystery & {
                        Spell: Spell;
                        Mystery: Mystery
                    })[]
                }
            })[]
        }
    })[];
    SpellCharacters: (SpellCharacter & {
        Spell: Spell & {
            Conjuration: Conjuration;
            Duration: Duration;
            Range: Range;
            SpellComponents: (SpellComponent & {
                Component: Component
            })[];
            SpellMysteries: (SpellMystery & {
                Spell: Spell;
                Mystery: Mystery
            })[]
        }
    })[];
    CharacterElements: (CharacterElement & {
        Element: Element & {
            ElementIngredients: ElementIngredient[];
            ElementRecipes: ElementRecipe[]
        }
    })[];
    CharacterInheritance: (CharacterInheritance & {
        Inheritance: Inheritance
    })[];
    CharacterMisteries: (CharacterMistery & {
        Mystery: Mystery & {
            SpellMysteries: (SpellMystery & {
                Spell: Spell & {
                    Conjuration: Conjuration;
                    Duration: Duration;
                    Range: Range;
                    SpellComponents: (SpellComponent & {
                        Component: Component
                    })[];
                        SpellMysteries: (SpellMystery & {
                            Spell: Spell;
                            Mystery: Mystery
                    })[]
                }
            })[]
        }
    })[]
}

type BuiltCharacter = DataBaseCharacter & {
    Characteristics : Characteristic[],
    AdditionalInfos : AdditionalInfos
}

type CharClass = CharacterRunarcanaClass & {
    RunarcanaClass : RunarcanaClass
}

type CharacterLevelUp = CharacterRunarcanaClass & {
    RunarcanaClass: {
        progress: string;
        characteristics: string;
        hitDie: number;
    };
    Character: {
        level: number;
        additionalInfos: string;
        constitution: number;
    };
}

export {
  DataBaseCharacter,
  BuiltCharacter,
  CharClass,
  CharacterLevelUp
}
