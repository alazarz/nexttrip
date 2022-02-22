import React, { FC } from 'react'
import { TextFieldDropdown } from './TextFieldDropdown/TextFieldDropdown'
import { useRoutes } from '../../hooks/useRoutes'

export const DropdownPickers: FC = () => {

    const routes = useRoutes()
    const routesDropdownOptions = routes.map(r => ({ id: r.route_id, label: r.route_label }))
    
    const onRouteSelected = (route: string) => {
        console.log("selected route", route)
    }

    return (
        <>
            <TextFieldDropdown 
            id='routes' 
            title='Choose A Route'
            onSelect={onRouteSelected}
            options={routesDropdownOptions} />
        </>
    )
}