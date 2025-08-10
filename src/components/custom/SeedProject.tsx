import React from 'react';
import CommonSeedCompo from '../common/CommonSeedCompo';

const SeedProject = () => {
  return (
    <CommonSeedCompo
      id="seed-project"
      h2="Seed Project Explained"
      p="Our Seed program is a purpose-agnostic app with a highly modular microservices architecture composed by a group of components that, when combined, can be the foundation of a project. With the seed in place, the project starts with ~50% of the code already done, while we can focus on developing the CORE: custom functionalities and all the interfaces."
      className="mb-30"
      style={{ background: 'var(--secondary-background)' }}
      src="/images/seed-group/Group-3417.png.webp"
      imgOrder="order-2 md:order-1"
      textOrder="order-1"
    />
  );
};

export default SeedProject;
