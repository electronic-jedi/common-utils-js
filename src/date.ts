/**
 * Copyright (c) 2021 Jedi Hero https://www.github.com/jedi-hero
 * All rights reserved.
 */

/**
 * Represents a format type
 */
type t_format='number' | 'string'


export function simpleDateFrom (date: Date, options: { format:  t_format} = { format: 'number' }) {
    const year = date.getFullYear();
    const { format } = options
    let month: string | number = date.getMonth() + 1;
    if (format == 'string') {
        month = (() => {
            switch (month) {
                case 1: return 'Jan'
                case 2: return 'Feb'
                case 3: return 'Mar'
                case 4: return 'Apr'
                case 5: return 'May'
                case 6: return 'Jun'
                case 7: return 'Jul'
                case 8: return 'Aug'
                case 9: return 'Sep'
                case 10: return 'Oct'
                case 11: return 'Nov'
                default: return 'Dec';
            }
        })();
    } else
        if (month < 10) month = `0${month}`;
    let day: string | number = date.getDate();
    if (day < 10 && format == 'number') day = `0${day}`;
    let spcr = format == 'string' ? ' ' : ''
    return `${day}${spcr}${month}${spcr}${year}`;
}