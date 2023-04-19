import { useState } from "react";
import styles from '../styles/Dropdown.module.css'

export default function ReactDropDown() {
    const dungeonsAndDragonsClasses = [
        { value: '', label: 'Select a class' },
        { value: 'barbarian', label: 'Barbarian' },
        { value: 'bard', label: 'Bard' },
        { value: 'cleric', label: 'Cleric' },
        { value: 'druid', label: 'Druid' },
        { value: 'fighter', label: 'Fighter' },
        { value: 'monk', label: 'Monk' },
        { value: 'paladin', label: 'Paladin' },
        { value: 'ranger', label: 'Ranger' },
        { value: 'rogue', label: 'Rogue' },
        { value: 'sorcerer', label: 'Sorcerer' },
        { value: 'warlock', label: 'Warlock' },
        { value: 'wizard', label: 'Wizard' }
    ]

    interface DropdownOption {
        value: string,
        label: string
    };

    const [dropdownOptions, setDropdownOptions] = useState(dungeonsAndDragonsClasses);
    const [dropdownStatus, setDropdownStatus] = useState("closed");
    const [selectedOption, setSelectedOption] = useState<DropdownOption>(dropdownOptions[0]);

    const dropdownToggle = (ref: any) => {
        if (dropdownStatus == "closed") {
            setDropdownStatus("open")
        } else {
            setDropdownStatus("closed")
        }
    }

    const itemClick = (itemValue: string) => {
        const item: DropdownOption = dropdownOptions.find((option) => option.value == itemValue) || dropdownOptions[0];
        setSelectedOption(item);
    };


    return (
        <>
            <div>Selected Option = {selectedOption.label} : {selectedOption.value}</div>
            <div className={styles.dropdown}
                onClick={dropdownToggle}>{dropdownStatus == "closed" && selectedOption.label}
                {dropdownStatus == "open" && dropdownOptions.map((option) => {
                    return (
                        <div key={option.value}
                            className={styles.dropdownItem}
                            onClick={() => itemClick(option.value)}>
                            {option.label}
                        </div>
                    )
                })}
            </div>
        </>
    )
}