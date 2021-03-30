import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to Proshop',
  description:
    'We sell the best products for cheap, and we are coolest e-commerce website ever',
  keywords: 'electronics, buy electronics, cheap electronics, cheap, quality',
};

export default Meta;
