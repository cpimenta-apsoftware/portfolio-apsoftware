import React from 'react';

import Layout from '../components/Layout';
// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import Resume from '../components/sections/Resume';
import Experience from '../components/sections/Experience';
import Conhecimento from '../components/sections/Conhecimento';
import Interesse from '../components/sections/Interesse';
import Projeto from '../components/sections/Projeto';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <Resume
        firstName={config.firstName}
        lastName={config.lastName}
        address={config.address}
        phone={config.phone}
        email={config.email}
        socialLinks={config.socialLinks}
      >
        Empresa de desenvolvimento de software e consultoria em TI.
      </Resume>

      <hr className="m-0" />

      <Experience />

      {/* <hr className="m-0" /> */}

      {/* <Competencia/> */}

      <hr className="m-0" />

      <Conhecimento/>

      <hr className="m-0" />      

      <Interesse/>

      {/* <hr className="m-0" />

      <Projeto/> */}

    </div>
  </Layout>
);

export default IndexPage;
