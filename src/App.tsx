import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppBar, Typography, TextField, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles: Function = makeStyles(() => ({
    header: {},
    title: {},
}))

export const App: FC = () => {
    const styles = useStyles()
    return (
        <BrowserRouter>
            <AppBar position='static' className={styles.header}>
                <Typography variant='h3' className={styles.title}>
                    Metro Transit NextTrip
                </Typography>
                {/* TODO Insert Metro Transit Icon here */}
            </AppBar>
            <Routes>
                <Route path='/' />
            </Routes>
        </BrowserRouter>
    )
}