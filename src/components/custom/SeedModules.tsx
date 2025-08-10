import React from 'react';
import CommonSeedCompo from '../common/CommonSeedCompo';

const SeedModules = () => {
  return (
    <CommonSeedCompo
      id="seed-modules"
      h2="Seed Modules"
      p="Most projects have a common ground, a list of functionalities/modules that are always necessary: i.e. email services, signup with email/social networks, password recovery, email validation fluxes, etc. That is exactly what the seed covers and is reflected in our pricing."
      className="mb-30"
      // style={{ background: 'var(--secondary-background)' }}
      src="/images/seed-group/Group-3416.png.webp"
      imgOrder="order-2 md:order-1"
      textOrder="order-1"
      imgWidth={450}
      imgHeight={450}
    />
  );
};

export default SeedModules;
