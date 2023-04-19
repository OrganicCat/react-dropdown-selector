import { useEffect, useState } from "react";
import styles from '../styles/Dropdown.module.css'

interface DropdownOption {
    value: string,
    label: string
};

const dungeonsAndDragonsClasses: DropdownOption[] = [
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

export default function ReactDropDown() {
    const [dropdownOptions, setDropdownOptions] = useState(dungeonsAndDragonsClasses);
    const [dropdownStatus, setDropdownStatus] = useState("closed");
    const [selectedOption, setSelectedOption] = useState<DropdownOption>(dropdownOptions[0]);

    const handleClickOutside = (event: any) => {
        if (event.target.id != "slick-react-dropdown") {
            setDropdownStatus("closed");
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const dropdownToggle = () => {
        dropdownStatus == "closed" ? setDropdownStatus("open") : setDropdownStatus("closed");

    }

    const itemClick = (itemValue: string) => {
        const item: DropdownOption = dropdownOptions.find((option) => option.value == itemValue) || dropdownOptions[0];
        setSelectedOption(item);
        setDropdownStatus("closed");
    };

    return (
        <>
            <div>Selected Option = {selectedOption.label} : {selectedOption.value}</div>
            <div className={styles.dropdown}>
                {dropdownStatus == "closed" && <div className={styles.dropdownItem} id="slick-react-dropdown" onClick={dropdownToggle}>{selectedOption.label}</div>}
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