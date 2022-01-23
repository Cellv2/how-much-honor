export const CHARACTER_SHEET_SLOTS = [
    "head",
    "neck",
    "shoulders",
    "back",
    "chest",
    "bracers",
    "gloves",
    "belt",
    "legs",
    "boots",
    "ring_1",
    "ring_2",
    "trinket_1",
    "trinket_2",
    "two_hand",
    "one_hand",
    "off_hand",
    "ranged",
    "libram",
] as const;

export type CharacterSheetSlots = typeof CHARACTER_SHEET_SLOTS[number];

export type SlotActivationStates = Record<CharacterSheetSlots, boolean>;
