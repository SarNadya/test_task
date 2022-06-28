import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function AuthorSelect({articles, getSortedPosts}) {
    return (
        <Autocomplete
            id='author-select'
            sx={{ width: 300 }}
            // value='author'
            options={articles}
            autoHighlight
            onChange={() => getSortedPosts()}
            getOptionLabel={(option) => option.author}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    {option.author}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Выбор автора"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
}

export default AuthorSelect;