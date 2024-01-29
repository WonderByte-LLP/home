import React from 'react';
import { Typography } from '@material-tailwind/react';

// Components
import FeatureCardsSection from './organisms/featureCardsSection';
import AppSkeleton from './organisms/appSkeleton';
import ContactFormSection from './organisms/featureContactForm';

function App() {
  return (
    <>
      {/* Header */}
      <div className='text-slate-400 relative pb-12'>
        <AppSkeleton />
        <div
          className='absolute top-0 left-0 w-full h-full -z-10 bg-slate-800'
          // TODO: Find right background images
          // style={{
          //   backgroundImage: `url(/backdrop2.jpg)`,
          //   backgroundSize: 'cover'
          // }}
        />
        <div className='flex flex-row'>
          <div className='p-12 text-slate-200 lg:basis-1/2 lg:p-0 lg:pt-[120px] lg:pl-[90px]'>
            <Typography variant='h1' className='pb-2'>
              Dolore sint sit est ipsum elit.
            </Typography>
            <Typography variant='p' className='text-justify'>
              Duis ad elit fugiat duis adipisicing nisi id minim dolore irure.
              Pariatur ea duis voluptate fugiat culpa id occaecat. Do
              consectetur aute nisi laborum aliqua voluptate commodo sit ipsum
              proident duis. Occaecat ut reprehenderit pariatur aute dolor quis
              aliquip. Esse anim esse commodo Lorem ipsum sunt sit occaecat
              nostrud minim. Duis et nostrud fugiat sunt duis ad mollit nisi
              ullamco dolore. Esse aute qui incididunt esse deserunt sint.
            </Typography>
          </div>
        </div>
      </div>
      {/* Offerings */}
      <FeatureCardsSection />
      {/* Quote Form */}
      <ContactFormSection />
      {/* Footer/About */}
    </>
  );
}

export default App;
