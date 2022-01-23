import { CharacterSheetSlots } from "../types/equipment.types";

export type SlotLocation = {
    slot: CharacterSheetSlots;
    d: string;
};

const svgLocationData: SlotLocation[] = [
    {
        slot: "head",
        d: "M14.7 19.04H31.538V34.274H14.7z",
    },
    {
        slot: "neck",
        d: "M14.833 42.693H31.671V57.927H14.833z",
    },
    {
        slot: "shoulders",
        d: "M14.833 66.213H31.671V81.44699999999999H14.833z",
    },
    {
        slot: "back",
        d: "M15.101 90.267H31.939V105.50099999999999H15.101z",
    },
    {
        slot: "chest",
        d: "M15.368 114.054H32.206V129.288H15.368z",
    },
    {
        slot: "bracers",
        d: "M15.635 137.574H32.473V152.80800000000002H15.635z",
    },
    {
        slot: "one_hand",
        d: "M41.293 163.766H58.131V179H41.293z",
    },
    {
        slot: "off_hand",
        d: "M66.149 163.766H82.987V179H66.149z",
    },
    {
        slot: "two_hand",
        d: "M91.005 164.033H107.84299999999999V179.267H91.005z",
    },
    {
        slot: "ranged",
        d: "M116.396 164.033H133.234V179.267H116.396z",
    },
    {
        slot: "gloves",
        d: "M156.286 21.646H173.124V36.88H156.286z",
    },
    {
        slot: "belt",
        d: "M156.419 45.299H173.257V60.533H156.419z",
    },
    {
        slot: "legs",
        d: "M156.419 68.819H173.257V84.053H156.419z",
    },
    {
        slot: "boots",
        d: "M156.687 92.873H173.525V108.107H156.687z",
    },
    {
        slot: "ring_1",
        d: "M156.954 116.66H173.792V131.894H156.954z",
    },
    {
        slot: "ring_2",
        d: "M157.221 140.18H174.059V155.41400000000002H157.221z",
    },
];

export default svgLocationData;
