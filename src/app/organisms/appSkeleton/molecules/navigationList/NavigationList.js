import React, { useCallback } from 'react';

import { Typography } from '@material-tailwind/react';

// Lodash
import _map from 'lodash/map';

// Constants
import NAVIGATION_LIST_OPTIONS from './constants/navigationList.options';
import { EMPTY_OBJECT } from '../../../../constants/app.general';

function NavigationList() {
  const renderNavigationListItem = useCallback(
    (navigationListOption = EMPTY_OBJECT) => {
      const { displayName, href, id } = navigationListOption;
      return (
        <Typography
          as='li'
          variant='small'
          className='flex items-center gap-x-2 p-1 font-medium font-monospace uppercase tracking-wider mx-auto underline-offset-4 hover:underline'
          key={id}
        >
          <a href={href} className='flex items-center'>
            {displayName}
          </a>
        </Typography>
      );
    },
    []
  );

  return (
    <ul className='mt-2 mb-4 flex flex-col gap-2 font-monospace uppercase tracking-wider lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      {_map(NAVIGATION_LIST_OPTIONS, renderNavigationListItem)}
    </ul>
  );
}

export default NavigationList;
