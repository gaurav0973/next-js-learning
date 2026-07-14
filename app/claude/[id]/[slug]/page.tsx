import React from 'react'

type Params = {
    params: Promise<{
        id: string;
        slug: string;
    }>
}

async function DynamicRoutingSlug({ params }: Params) {
    const { id, slug } = await params;
    return (
        <div>DynamicRoutingSlug: {id} - {slug}</div>
    );
}

export default DynamicRoutingSlug
