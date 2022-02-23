import { FC, useEffect, useState } from 'react'
import { TextFieldDropdown } from './TextFieldDropdown/TextFieldDropdown'
import { useRoutes } from '../../hooks/useRoutes'
import { getDirections } from '../../api/'
import { Direction, TextFieldDropdownOption } from '../../types/'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    dropdownsContainer: {},
    actionBtnContainer: {
        display: 'flex',
        marginTop: '20px',
        alignItems: 'center',
        justifyContet: 'center',
        width: '100%',
    },
    actionBtn: {
        backgroundColor: '#cc262c',
        color: 'white',
        fontSize: '16px'
    },
}))

export const DropdownPickers: FC = () => {

    const navigate = useNavigate()
    const styles = useStyles()

    const routes = useRoutes()
    const [directions, setDirections] = useState<Direction[]>([])

    // For routing and api requests     
    const [routeId, setRouteId] = useState<string>('')
    const [directionId, setDirectionId] = useState<string>('')

    // For UI Components
    const routesDropdownOptions: TextFieldDropdownOption[] = routes.map(r => ({ id: r.route_id, label: r.route_label }))
    const [directionDropdownOptions, setDirectionDropdownOptions] = useState<TextFieldDropdownOption[]>([])      
    
    useEffect( () => {
        const getDirectionsForRoute = async () => {
            setDirections(await getDirections(routeId))    
        }
        if(routeId) {
            getDirectionsForRoute()
        }
    }, [routeId])

    useEffect(() => {
        setDirectionDropdownOptions(directions.map(d => ({id: d.direction_id.toString(), label: d.direction_name})))
    }, [directions])

    // Event Handlers
    const onRouteSelected = (routeId: string) => {
        setRouteId(routeId)
    }

    const onDirectionSelected = (directionId: string) => {
        setDirectionId(directionId)
    }

    const handleClick = () => navigate(`/${routeId}/${directionId}/`)

    return (
        <>
        <div className={styles.dropdownsContainer}>
            <TextFieldDropdown 
                id='routes' 
                title='Choose A Route'
                onSelect={onRouteSelected}
                hidden={false}
                options={routesDropdownOptions} />
           <TextFieldDropdown
                id='directions'
                title='Choose A Direction'
                onSelect={onDirectionSelected}
               options={directionDropdownOptions}
                hidden={directionDropdownOptions.length > 0} />
        </div>
        <div className={styles.actionBtnContainer}>
            <Button
                className={styles.actionBtn}
                variant='contained'
                fullWidth
                onClick={handleClick}>
                    Get Stop Information
            </Button>
        </div>
            
        </> 
    )
}