import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export const onRenderBody = ({ 
  setHeadComponents, 
  // setPreBodyComponents 
}) => {

  const forward = [
    'dataLayer.push',
    'fbq',
    '_hsq.push',
    '_learnq.push',
    'ttq.track',
    'ttq.page',
    'ttq.load',
    // 'Intercom',
    // 'freshpaint.addPageviewProperties', 
    // 'freshpaint.identify', 
    // 'freshpaint.track',
    // '_satellite.track'
  ]; 

  setHeadComponents([
    <Partytown key="partytown" debug={false} forward={forward} />,
    <script key="gtm-script"
  type="text/partytown"
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${process.env.GTM_ID}');`
  }}
/>,
  ]);

  // setPreBodyComponents([
  //   <noscript key="gtm-noscript"><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`} height="0" width="0" style={{ display:"none",visibility:"hidden"}}></iframe></noscript>
  // ]);
  
};