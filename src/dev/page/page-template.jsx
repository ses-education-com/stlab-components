import React from 'react';


const PageTemplate = ( props ) => {
    const {pageTitle = "Unknown component", Component, ...other} = props;
    return(
        <div>
            <h1>{pageTitle}</h1>
            <Component {...other} />
        </div>
    )
}

export default PageTemplate;