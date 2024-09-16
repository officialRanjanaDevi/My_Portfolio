import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContent from './TabContent';

const Project = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { key: 'Full Stack', head: 'Full Stack Projects' },
    { key: 'Front End', head: 'Frontend Projects' },
    { key: 'DSA', head: 'DSA Challenges' }
  ];

  return (
    <div className="text-white text-center">
      <h1 className="mb-10 font-bold text-2xl">Projects</h1>

      <Tabs value={value} onChange={handleChange} aria-label="project tabs" centered TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.key}
            className='border-none'
            sx={{
              color: index === value ? "blue" : "white"
            }}
          />
        ))}
      </Tabs>


      {/* Render TabContent based on selected tab */}
      <div className="tab-content mt-12">
        <TabContent value={tabs[value].key} />
      </div>
    </div>
  );
};

export default Project;

