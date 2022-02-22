import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppBar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Layout } from './components/Layout/Layout'
import { DropdownPickers } from './components/DropdownPickers'

const useStyles: Function = makeStyles(() => ({
    header: {
        backgroundColor: '#cc262c',
        alignItems: 'center'
    },
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
            <Layout>
                <Routes>
                    <Route path='/' element={<DropdownPickers />}>
                    </Route>
                </Routes>
            </Layout> 
        </BrowserRouter>
    )
}