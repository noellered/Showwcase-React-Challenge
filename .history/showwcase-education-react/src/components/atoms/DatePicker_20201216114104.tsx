import React, { FunctionComponent, useMemo, useState, useEffect } from 'react';

interface DatePickerProps {
    label?: string;
    error?: string;
    selected: Date | null;
    onChange?(date: Date): void;
    maxDate?: Date | null;
    minDate?: Date | null;
    disabled?: boolean;
}

const months = [
    { id: 0, name: 'January' },
    { id: 1, name: 'February' },
    { id: 2, name: 'March' },
    { id: 3, name: 'April' },
    { id: 4, name: 'May' },
    { id: 5, name: 'June' },
    { id: 6, name: 'July' },
    { id: 7, name: 'August' },
    { id: 8, name: 'September' },
    { id: 9, name: 'October' },
    { id: 10, name: 'November' },
    { id: 11, name: 'December' },
];

const DatePicker:FunctionComponent<DatePickerProps> = ({
    label,
    error,
    disabled,
    selected,
    onChange
}) => {
    const [current, setCurrent] = useState({
        month: selected?.getMonth(),
        year: selected?.getFullYear()
    })

    useEffect(() => {
        const month = selected?.getMonth()
        const year = selected?.getFullYear()
    }, [selected])


}

export default DatePicker;