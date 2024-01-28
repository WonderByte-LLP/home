import React from 'react';
import { Typography } from "@material-tailwind/react";

// Constant
import { FEATURE_CARDS_SECTION_HEADLINE, FEATURE_CARDS_SECTION_TAGLINE } from './constants/featureCardsSection.general';

// Components
import FeatureCards from './molecule/featureCards/FeatureCards';

function FeatureCardsSection() {

  return (
    <div className="flex flex-col pt-12 pb-12 px-12 text-slate-800">
    <Typography variant="h2" className="block mx-auto">
      {FEATURE_CARDS_SECTION_HEADLINE}
    </Typography>
    <Typography variant="p" className="text-center">
      {FEATURE_CARDS_SECTION_TAGLINE}
    </Typography>
    <div className="flex flex-row flex-wrap max-auto pt-12">
      <FeatureCards />
    </div>
  </div>
  );
};

export default FeatureCardsSection;

