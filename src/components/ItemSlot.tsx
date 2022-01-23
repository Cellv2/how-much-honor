import React from "react";
import {
    CharacterSheetSlots,
    SlotActivationStates,
} from "../types/equipment.types";
import {
    getSlotFillColor,
    lookupSlotLocation,
} from "../utils/character-sheet.utils";

type Props = {
    slot: CharacterSheetSlots;
    handleSlotActivationToggle: (
        event: React.MouseEvent<SVGPathElement>
    ) => void;
    slotActivationStates: SlotActivationStates;
};

const ItemSlot = ({
    slot,
    handleSlotActivationToggle,
    slotActivationStates,
}: Props) => {
    return (
        <path
            id={slot}
            d={lookupSlotLocation(slot)}
            data-slot={slot}
            fill={getSlotFillColor(slotActivationStates[slot])}
            onClick={(e) => {
                handleSlotActivationToggle(e);
            }}
        ></path>
    );
};

export default ItemSlot;
