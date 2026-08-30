import { useState } from 'react';
import { MdInfoOutline, MdVolumeOff, MdVolumeUp } from 'react-icons/md';

import bannerSpiderman from '../../assets/images/banners/spiderman-brand-new-day.jpg';
import Button from '../common/Button';
import IconButton from '../common/IconButton';
import AgeRating from '../common/AgeRating';

const HeroBanner = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative flex h-[clamp(224px,50vw,592px)] w-full flex-col justify-end overflow-hidden p-5 lg:p-20">
      <div className="after:to-page-header-background absolute inset-0 z-1 after:pointer-events-none after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:content-['']">
        <img
          className="h-full w-full object-cover object-center"
          src={bannerSpiderman}
          alt="Spiderman: Brand New Day"
        />
      </div>
      <div className="relative z-2 flex flex-col gap-3 lg:gap-10">
        <h1 className="text-lg leading-tight font-bold lg:text-5xl">
          Spider-Man: Brand New Day
        </h1>
        <p className="line-clamp-2 max-w-[75ch] text-xs md:line-clamp-none lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          exercitationem architecto tenetur, ea cupiditate ipsum a odit porro
          molestiae et dolor eos distinctio aut culpa iste itaque vero nostrum
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="primary">Mulai</Button>
            <Button variant="secondary" icon={MdInfoOutline} to="/">
              Selengkapnya
            </Button>

            <AgeRating rating="13+" variant="outline" />
          </div>
          <IconButton
            onClick={() => setIsMuted((prev) => !prev)}
            aria-label={isMuted ? 'Nyalakan suara' : 'Matikan suara'}
            className="border-text-light-secondary text-text-light-secondary"
          >
            {isMuted ? (
              <MdVolumeOff className="h-4 w-4 lg:h-6 lg:w-6" />
            ) : (
              <MdVolumeUp className="h-4 w-4 lg:h-6 lg:w-6" />
            )}
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
