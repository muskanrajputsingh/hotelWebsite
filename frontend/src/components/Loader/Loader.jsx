import React, { useState } from 'react';
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
    const [loading, setLoading] = useState(true);

    const override = css`
        
    `;

    return (
        <div style={{marginTop:'150px'}}>
        <div className="sweet-loading text-center">
            <GridLoader
                color='#000'
                loading={loading}
                css={override}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
        </div>
       
    );
}

export default Loader;
