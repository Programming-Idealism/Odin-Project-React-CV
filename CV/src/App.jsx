import { StrictMode, useState } from 'react';
import './App.css';
import GeneralForm from './components/general-form';
import EducationalForm from './components/educational-form';
import OthersForm from './components/others-form';
import Preview from './components/preview-form';
import ExperienceForm from './components/experience-form';
function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    about: '',
  });
  const [educationalInfo, setEducationalInfo] = useState({
    school: '',
    university: '',
    specialization: '',
    degree: '',
    completion: '',
  });

  const [experienceInfo, setExperienceInfo] = useState({
    corporation: '',
    position: '',
    responsibilities: '',
    start: '',
    end: '',
  });

  const [othersInfo, setOthersInfo] = useState({
    skills: [],
    languages: [],
  });

  return (
    <StrictMode>
      <GeneralForm data={generalInfo} onChange={setGeneralInfo} />
      <EducationalForm data={educationalInfo} onChange={setEducationalInfo} />
      <ExperienceForm data={experienceInfo} onChange={setExperienceInfo} />
      <OthersForm onChange={setOthersInfo} />
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
