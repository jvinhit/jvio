import React, { Suspense } from 'react';
import Loading from '../_loading';

export default ({ component: Component, ...rest }) => (
    <>
        <Suspense fallback={<Loading />}>
            <Component {...rest} />
        </Suspense>
    </>
);
