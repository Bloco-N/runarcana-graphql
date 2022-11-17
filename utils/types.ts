import { Character, CharacterElement, CharacterInheritance, CharacterMistery, CharacterRunarcanaClass, Component, Conjuration, Duration, Element, ElementIngredient, ElementRecipe, Inheritance, InheritanceLineage, InheritanceOrigin, InheritanceRegion, Lineage, Mystery, Origin, Past, Range, Region, RunarcanaClass, Spell, SpellCharacter, SpellClass, SpellComponent, SpellLineage, SpellMystery, SpellOrigin } from '@prisma/client'
import { Characteristic } from '../src/schemas/Characteristic'

type CharacterWithDetails = Character & {
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

type CharacterWithCharacteristics = CharacterWithDetails & {
    Characteristics : Characteristic[]
}

type CharacterRunarcanaClassWithDetails = CharacterRunarcanaClass & {
    RunarcanaClass : RunarcanaClass
}
export {
  CharacterWithDetails,
  CharacterWithCharacteristics,
  CharacterRunarcanaClassWithDetails
}
