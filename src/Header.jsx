import React from 'react';
import { PageHeader } from 'antd';

const Header = () => (
    <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Best Cubes"
        subTitle="Best Rubiks like puzzles out there"
    />
);

export default Header;