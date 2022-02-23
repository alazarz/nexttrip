import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface LayoutProps {
    children: JSX.Element,
}

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <Container maxWidth='sm'>
            {children}
        </Container>
    )
}
