import { StrictMode, useState } from 'react';
import GeneralForm from './components/general-form';
import EducationalForm from './components/educational-form';
import OthersForm from './components/others-form';
import Preview from './components/preview-form';
import ExperienceForm from './components/experience-form';
import {
  INITIAL_GENERAL,
  INITIAL_EDUCATION,
  INITIAL_EXPERIENCE,
  INITIAL_OTHERS,
} from './modules/constants.js';

function App() {
  const [generalInfo, setGeneralInfo] = useState(INITIAL_GENERAL);
  const [educationalInfo, setEducationalInfo] = useState(INITIAL_EDUCATION);
  const [experienceInfo, setExperienceInfo] = useState(INITIAL_EXPERIENCE);
  const [othersInfo, setOthersInfo] = useState(INITIAL_OTHERS);
  return (
    <StrictMode>
      <div className="display-column">
        <GeneralForm data={generalInfo} onChange={setGeneralInfo} />
        <EducationalForm data={educationalInfo} onChange={setEducationalInfo} />
        <ExperienceForm data={experienceInfo} onChange={setExperienceInfo} />
        <OthersForm data={othersInfo} onChange={setOthersInfo} />
      </div>
      <Preview
        general={generalInfo}
        education={educationalInfo}
        experience={experienceInfo}
        others={othersInfo}
      />
    </StrictMode>
  );
}

export default App;
