import axios from 'axios'
import { Route, Direction, Stop, Departure } from '../types/index'

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

export const getStops = async (routeId: string, directionId: number): Promise<Stop[]> => {
    return await axios.get<Stop[]>(`${baseUrl}/stops/${routeId}/${directionId}`)
    .then(response => response.data)
    .catch(error => error)
}

export const getDepartures = async (routeId: string, directionId: number, stopId: number): Promise<Departure[]> => {
    return await axios.get<Departure[]>(`${baseUrl}/stops/${routeId}/${directionId}/${stopId}`)
    .then(response => response.data)
    .catch(error => error)
}