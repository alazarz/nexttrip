import React, { ChangeEvent, FC } from 'react'
import { MenuItem, TextField, TextFieldProps }  from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface TextFieldDropdownOption {
    id: string,
    label: string
}

interface TextFieldDropdownProps {
    id: string,
    title: string,
    onSelect: (selected: string) => void,
    options: TextFieldDropdownOption[]
}

const useStyles = makeStyles(() => ({
    dropdown: {
        display: 'flex',
    }
}))

export const TextFieldDropdown: FC<TextFieldDropdownProps> = ({
    id,
    title,
    onSelect,
    options
}) => {
    const styles = useStyles()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSelect(e.target.value)
    }

    return (
        <TextField
            key={id}
            className={styles.dropdown}
            select
            fullWidth
            id={id}
            label={title}
            onChange={handleChange}>
                {options.map(option => (
                    <MenuItem value={option.id}>{option.label}</MenuItem>
                ))}
            </TextField>
    )
}