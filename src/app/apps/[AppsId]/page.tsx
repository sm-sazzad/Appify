import { getData } from '@/lib/DataFetch';
import React from 'react';
import DetailsAppsCard from './DetailsAppsCard';

const page = async ({ params }: { params: Promise<{ AppsId: string }> }) => {
    const { AppsId } = await params;

    const allApps = await getData();

    const app = allApps.find(app => app.id === Number(AppsId));

    return (
        <div>
            <DetailsAppsCard apps={app!} />
        </div>
    );
};

export default page;