import React from 'react'

type params = {
    params: Promise<{
        slug: string[];
    }>
}

async function CatchAllRoutes({ params }: params) {
    const { slug } = await params;
    /**
     * this is an array => join se string me convert kar do => eqasy pisy
     */
    return (
        <div>CatchAllRoutes: {slug.join('/')}</div>
    );
}

export default CatchAllRoutes
