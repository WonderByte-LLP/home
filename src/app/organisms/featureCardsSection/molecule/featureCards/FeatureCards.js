import React, { useCallback } from 'react';

// Lodash
import _map from 'lodash/map';

// Constants
import { EMPTY_OBJECT } from '../../../../constants/app.general';
import CARD_CONFIGS from '../constants/featureCards.cardConfigs';

// Components
import FeatureCard from './molecules/featureCard';

function FeatureCards() {
  const renderCard = useCallback((card = EMPTY_OBJECT) => {
    const { image, title, description } = card;
    return (
      <div className='p-6 w-full lg:basis-1/2'>
        <FeatureCard
          imageSource={image}
          imageClassName='max-w-[180px] max-h-[180px]'
          title={title}
        >
          {description}
        </FeatureCard>
      </div>
    );
  }, []);

  return _map(CARD_CONFIGS, renderCard);
}

export default FeatureCards;
