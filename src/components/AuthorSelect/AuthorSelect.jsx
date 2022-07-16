import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import user from './img/user.png';
import Stack from '@mui/material/Stack';

function AuthorSelect({articles, getSortedPosts}) {
    return (
        <Autocomplete
            id='author-select'
            sx={{ width: 335, mr: 3, mb: 4 }}
            options={articles}
            autoHighlight
            onChange={(event, value) => getSortedPosts(value)}
            getOptionLabel={(option) => option.author}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    {option.author}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={
                        <Stack spacing={1} direction="row">
                            <img src={user} alt='user_logo'/>
                            <div>Выбор автора</div>
                        </Stack>
                    }
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