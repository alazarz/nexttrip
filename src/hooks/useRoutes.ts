import { useState, useEffect, FC } from 'react'
import { getRoutes } from '../api/'
import { Route } from '../types/'

export const useRoutes = (): Route[] => {
    const [routes, setRoutes] = useState<Route[]>([])

    const getAllRoutes = async () => {
        setRoutes(await getRoutes())
    }

    useEffect(() => {
        getAllRoutes()
    }, [])

    return routes
}