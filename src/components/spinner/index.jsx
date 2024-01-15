import { CircularProgress, Container } from '@material-ui/core'
import React from 'react'


const Spinner = props => {
    return(
        <Container>
            <CircularProgress color="primary" />
        </Container>
    )
}

export default Spinner;