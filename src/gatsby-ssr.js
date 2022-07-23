import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ 
  setHeadComponents, 
  setPreBodyComponents 
},pluginOptions) => {

  const GTM_ID = pluginOptions?.gtm_id || process.env.GTM_ID;
  const FORWARD = pluginOptions?.forward || [];

  const forward = [
    'dataLayer.push',
    'fbq',
    '_hsq.push',
    '_learnq.push',
    'ttq.track',
    'ttq.page',
    'ttq.load',
    ...FORWARD
  ]; 

  setHeadComponents([
    <Partytown key="partytown" debug={false} forward={forward} />,
    <script key="gtm-script"
  type="text/partytown"
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`
  }}
/>,
  ]);

  setPreBodyComponents([
    <noscript key="gtm"><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display:"none",visibility:"hidden"}}></iframe></noscript>
  ]);
  
};