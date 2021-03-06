/**
 * Copyright (c) 2021 Jedi Hero https://www.github.com/jedi-hero
 * All rights reserved.
 */


/**
 * Represents a format type
 */
type t_format = 'camelCase' | 'locale' | 'dashCase'

/**
 * Attempts to format from one typing format to another.
 * You can only convert to/from 'locale' to/from any other format.
 * @param arg 
 * @param options 
 * @returns 
 */
export function convertByFormat(arg: string, options: { toFormat: t_format, fromFormat: t_format }) {
    let retval=''
    if (options.fromFormat == 'camelCase' && options.toFormat=='locale') {
        retval=arg.split('')
            .map(v => {
                if (/[A-Z]/.test(v)) return ` ${v.toLowerCase()}`
                else return v
            })
            .join('')

    }
    else if (options.fromFormat == 'dashCase' && options.toFormat=='locale') {
        retval=arg.split('')
            .map(v => {
                if (/\-/.test(v)) return ' '
                else return v
            })
            .join('')

    }
    return retval
}

/**
 * Attempts to convert a string of characters to a locale name.
 * This follows the `locale` value in  the type `t_format`
 * @param arg 
 * @returns a well formatted name
 */
export function toNameFormat(arg:string){
    return arg.trim()
        .toLowerCase()
        .replace(/\s{2,}/,' ')
        .split(/\s/)
        .map(v=>{
            let trail=v.substring(1)
            let leading=v.charAt(0)
                .toUpperCase()
            return `${leading}${trail}`
        })
        .join(' ')
}
