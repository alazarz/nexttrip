import React, { ChangeEvent, FC, useState } from 'react'
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

    const [selected, setSelected] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSelect(e.target.value)
        setSelected(e.target.value)
    }

    return (
        <TextField
            key={id}
            className={styles.dropdown}
            select
            value={selected}
            fullWidth
            id={id}
            label={title}
            onChange={handleChange}>
                {options.map(option => (
                    <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
                ))}
            </TextField>
    )
}