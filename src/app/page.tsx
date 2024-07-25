import UpcomingPremieres from 'src/components/pages/index/PopularCartoons';

import NewReleases from '@/components/pages/index/NewReleases';
import PopularTvShows from '@/components/pages/index/PopularTvShows';

export default function Home() {
  return (
    <>
      <PopularTvShows />
      <NewReleases />
      <UpcomingPremieres />
    </>
  );
}
