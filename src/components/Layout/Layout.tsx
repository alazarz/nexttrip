import React, { FC } from 'react'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface LayoutProps {
    children: JSX.Element,
    title: string
}

const useStyles = makeStyles(() => ({
    title: { padding: 8}
}))

export const Layout: FC<LayoutProps> = ({children, title}) => {
    const styles = useStyles()
    return (
        <Container maxWidth='sm'>
            <Typography variant='h6' className={styles.title}>
                {title}
            </Typography>
            {children}
        </Container>
    )
}
