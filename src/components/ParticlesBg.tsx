import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFull } from "tsparticles";

export const ParticlesBg: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  if (init) {
    return (
      <Particles
        id="tsparticles"
        url="/particles.json"
      />
    );
  }

  return <></>;
};