import React, { FC, useEffect, useState } from 'react'
import { TextFieldDropdown } from './TextFieldDropdown/TextFieldDropdown'
import { useRoutes } from '../../hooks/useRoutes'
import { getDirections, getStops } from '../../api/'
import { Direction, Stop, TextFieldDropdownOption } from '../../types/'
import { useNavigate } from 'react-router-dom'

export const DropdownPickers: FC = () => {

    const routes = useRoutes()
    const navigate = useNavigate()

    const [directions, setDirections] = useState<Direction[]>([])
    const [stops, setStops] = useState<Stop[]>([])

    
    const [routeId, setRouteId] = useState<string>('')
    const [directionId, setDirectionId] = useState<string>('')
    const [stopId, setStopId] = useState<string>('')

    const routesDropdownOptions = routes.map(r => ({ id: r.route_id, label: r.route_label }))
    const [directionDropdownOptions, setDirectionDropdownOptions] = useState<TextFieldDropdownOption[]>([])
    const [stopsDropdownOptions, setStopsDropdownOptions] = useState<TextFieldDropdownOption[]>([])
    
    
    useEffect( () => {
        const getDirectionsForRoute = async () => {
            setDirections(await getDirections(routeId))    
            
        }

        if(routeId) {
            getDirectionsForRoute()
        }
        
    }, [routeId])

    useEffect(() => {
        console.log(directions)
        setDirectionDropdownOptions(directions.map(d => ({id: d.direction_id.toString(), label: d.direction_name})))
    }, [directions])


    useEffect(() => {
        const getStopsForRouteAndDirection = async () => {
            setStops(await getStops(routeId, directionId))
        }

        if(directionId) {
            getStopsForRouteAndDirection()
        }
    }, [directionId])


    useEffect(() => {
        setStopsDropdownOptions(stops.map(s => ({id: s.place_code, label: s.description})))
    }, [stops])

    useEffect(() => {

    }, [stopId])

    // Event Handlers
    const onRouteSelected = (routeId: string) => {
        setRouteId(routeId)
        navigate(`/${routeId}`)
    }

    const onDirectionSelected = (directionId: string) => {
        setDirectionId(directionId)
        navigate(`/${routeId}/${directionId}`)
    }

    const onStopSelected = (stopId: string) => {
        setStopId(stopId)
        navigate(`/${routeId}/${directionId}/${stopId}`)
    }

    return (
        <>
        {/* Routes */}
            <TextFieldDropdown 
            id='routes' 
            title='Choose A Route'
            onSelect={onRouteSelected}
            options={routesDropdownOptions} />

        {/* Directions */}
            <TextFieldDropdown
            id='directions'
            title='Choose A Direction'
            onSelect={onDirectionSelected}
            options={directionDropdownOptions}
            />

        {/* Stops */}
        <TextFieldDropdown
            id='stops'
            title='Choose A Stop'
            onSelect={onStopSelected}
            options={stopsDropdownOptions}
            />
        </> 
    )
}