import React from 'react';

import Learn from 'components/pages/learn/learn';
import Hero from 'components/shared/hero';
import illustration from 'images/shared/hero/illustration-learn.svg';
import MainLayout from 'layouts/main';

const hero = {
  topText: 'Originally Created by Isovalent',
  title: 'Cilium Getting Started',
  description:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis</p>',
  illustration,
};

const IndexPage = () => (
  <MainLayout>
    <Hero {...hero} />
    <Learn />
  </MainLayout>
);

export default IndexPage;