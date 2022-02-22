import React, { FC } from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface LayoutProps {
    children: JSX.Element,
}

const useStyles = makeStyles(() => ({
    title: { padding: 8}
}))

export const Layout: FC<LayoutProps> = ({children}) => {
    const styles = useStyles()
    return (
        <Container maxWidth='sm'>
            {children}
        </Container>
    )
}
