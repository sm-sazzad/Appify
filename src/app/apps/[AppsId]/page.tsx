import { getData } from '@/lib/DataFetch';
import DetailsAppsCard from './DetailsAppsCard';
import { notFound } from 'next/navigation'

const page = async ({ params }: { params: Promise<{ AppsId: string }> }) => {
    const { AppsId } = await params;

    const allApps = await getData();

    const app = allApps.find(app => app.id === Number(AppsId));

    if (!app) {
        notFound() // ← renders ./not-found.tsx (sibling file)
    }

    return (
        <div>
            <DetailsAppsCard apps={app!} />
        </div>
    );
};

export default page;