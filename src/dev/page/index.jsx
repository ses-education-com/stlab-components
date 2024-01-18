import React from 'react';
import PageTemplate from './page-template';
import {useParams, Link} from 'react-router-dom';
import testProps from '../../_data/test.props';

const Page = () => {

  const {pageId} = useParams();

    return(
        <div>
            <div><Link to="/">Back</Link></div>
            { pageId && testProps[pageId] && <PageTemplate {...testProps[pageId]} />}
            
        </div>
    )
}

export default Page;