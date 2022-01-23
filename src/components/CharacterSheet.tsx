import React from "react";
import {
    CHARACTER_SHEET_SLOTS,
    SlotActivationStates,
} from "../types/equipment.types";
import ItemSlot from "./ItemSlot";

type CharacterSheetProps = {
    handleSlotActivationToggle: (
        event: React.MouseEvent<SVGPathElement>
    ) => void;
    slotActivationStates: SlotActivationStates;
};

const CharacterSheet = (props: CharacterSheetProps) => {
    const { handleSlotActivationToggle, slotActivationStates } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg8"
            width="210mm"
            height="297mm"
            version="1.1"
            viewBox="0 0 210 297"
        >
            <g id="layer1" fill="#b3b3b3" strokeWidth="0.265">
                {CHARACTER_SHEET_SLOTS.map((slot) => (
                    <ItemSlot
                        key={slot}
                        slot={slot}
                        handleSlotActivationToggle={handleSlotActivationToggle}
                        slotActivationStates={slotActivationStates}
                    />
                ))}
            </g>
        </svg>
    );
};

export default CharacterSheet;
