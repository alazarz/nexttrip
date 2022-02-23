import { FC, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Stop } from '../../types'
import { getDepartureData, getStops } from '../../api'
import { makeStyles } from '@material-ui/core/styles'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core'

export const StopsTable: FC = () => {
    
    const { routeId, directionId } = useParams()
    const [stops, setStops] = useState<Stop[]>([])

    const columnHeaders = ['Stop #', "Name"]
    const navigate = useNavigate()

    useEffect(() => {
        const init = async (routeId: string, directionId: string) => {
            const placeCodeData = await getStops(routeId, directionId)
            placeCodeData.forEach(async p => {
                const stopData = await getDepartureData(routeId, directionId, p.place_code)
                setStops(prevStops => [...prevStops, ...stopData.stops])
            })
        }

        if(routeId && directionId) {
            init(routeId, directionId)
        }
    }, [navigate])

    useEffect(() => {
        console.log(stops)
    }, [stops])
    return (
        <>
        {stops.length > 0 ? 
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {columnHeaders.map(header => 
                            (<TableCell key={header}>
                                {header}
                            </TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stops.map(s =>(
                        <TableRow key={s.stop_id}>
                            <TableCell key={s.stop_id}>{s.stop_id}</TableCell>
                            <TableCell key={s.description}>{s.description}</TableCell> 
                            {/* TODO add 'Find in Maps' button */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
            :
            <div>
                {/* TODO use a better component for this */}
                ERROR RETREIVING STOP INFORMATION
            </div>
        }
        </>
    )
}