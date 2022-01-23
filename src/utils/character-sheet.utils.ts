import {
    SLOT_ACTIVE_COLOR,
    SLOT_INACTIVE_COLOR,
} from "../constants/character-sheet.constants";
import svgLocationData from "../data/slot-locations";
import { CharacterSheetSlots } from "../types/equipment.types";

export const getSlotFillColor = (isSlotActive: boolean): string => {
    return isSlotActive ? SLOT_ACTIVE_COLOR : SLOT_INACTIVE_COLOR;
};

export const lookupSlotLocation = (slot: CharacterSheetSlots) => {
    const data = svgLocationData.find((data) => data.slot === slot);
    console.log(data);
    if (!data) {
        console.error(`Slot data was missing for ${slot}`);
    }

    return data?.d || "";
};
