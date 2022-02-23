// Interfaces to encapsulate API response entities
// These interfaces map directly to the schemas specified in the NextTrip Swagger docs.
export interface Route {
    route_id: string,
    agency_id: number,
    route_label: string
}

export interface Direction {
    direction_id: number,
    direction_name: string
}

export interface Departure {
    actual: boolean,
    trip_id: string,
    stop_id: number,
    departure_time: number,
    description: string,
    gate: string,
    route_id: string,
    route_short_name: string,
    direction_id: number,
    direction_text: string,
    terminal: string,
    schedule_relationship: string,
}

export interface Place {
    place_code: string,
    description: string,
}

export interface Stop {
    stop_id: number,
    latitude: number,
    longitude: number,
    description: string
}

export interface Alert {
    stop_closed: boolean,
    alert_text: string
}

export interface DepartureData {
    stops: Stop[],
    alerts: Alert[],
    departures: Departure[]
}

// For UI Components
export interface TextFieldDropdownOption {
    id: string,
    label: string
}
