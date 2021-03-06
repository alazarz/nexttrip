import axios from 'axios'
import { Route, Direction, Place, Departure, DepartureData } from '../types/index'

const baseUrl: string = 'https://svc.metrotransit.org/nextripv2'

export const getRoutes = async (): Promise<Route[]> => {
    return await axios.get<Route[]>(`${baseUrl}/routes/`)
    .then(response => response.data)
    .catch(error => error)
}

export const getDirections = async (routeId: string): Promise<Direction[]> => {
    return await axios.get<Direction[]>(`${baseUrl}/directions/${routeId}`)
    .then(response => response.data)
    .catch(error => error)
}

export const getStops = async (routeId: string, directionId: string): Promise<Place[]> => {
    return await axios.get<Place[]>(`${baseUrl}/stops/${routeId}/${directionId}`)
    .then(response => response.data)
    .catch(error => error)
}

export const getDepartures = async (routeId: string, directionId: string, stopId: string): Promise<Departure[]> => {
    return await axios.get<Departure[]>(`${baseUrl}/${routeId}/${directionId}/${stopId}`)
    .then(response => response.data)
    .catch(error => error)
}

export const getDepartureData = async (routeId: string, directionId: string, stopId: string): Promise<DepartureData> => {
    return await axios.get<DepartureData>(`${baseUrl}/${routeId}/${directionId}/${stopId}`)
    .then(response => response.data)
    .catch(error => error)
}
