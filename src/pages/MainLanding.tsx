import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Benchmarks from '../components/Benchmarks';
import TechSpecs from '../components/TechSpecs';
import WaitingList from '../components/WaitingList';
import Faq from '../components/Faq';

const MainLanding: React.FC = () => {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <UseCases />
      <Benchmarks />
      <TechSpecs />
      <WaitingList />
      <Faq />
    </>
  );
};

export default MainLanding;