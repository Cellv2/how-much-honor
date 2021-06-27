import {
    SLOT_ACTIVE_COLOR,
    SLOT_INACTIVE_COLOR,
} from "../constants/character-sheet.constants";

export const getSlotFillColor = (isSlotActive: boolean): string => {
    return isSlotActive ? SLOT_ACTIVE_COLOR : SLOT_INACTIVE_COLOR;
};
