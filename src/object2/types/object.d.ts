export interface NumberObject {
    [key: string]: number
}

export interface FlatObject {
    [key: string]: number | string
}

export interface NestedObject {
    [key: string]: unknown
}

export type Difference =
    | { type: 'added'; new: unknown }
    | { type: 'removed'; old: unknown }
    | { type: 'modified'; old: unknown; new: unknown }

export type ObjectStats = {
    basic: {
        min: number
        max: number
        average: number
        total: number
    }
    advanced: {
        median: number
        variance: number
        standardDeviation: number
    }
}
