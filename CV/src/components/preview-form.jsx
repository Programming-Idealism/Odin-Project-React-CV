import './style.css';

export default function Preview({ general, education, experience, others }) {
  return (
    <div>
      <div className="general-info">
        <h1>{general.name}</h1>
        <h2>{general.email}</h2>
        <h2>{general.phone}</h2>
        <h3>{general.location}</h3>
        <p>{general.about}</p>
      </div>
      <div className="education-info">
        <h3>{education.school}</h3>
        <h3>{education.university}</h3>
        <h4>{education.specialization}</h4>
        <h4>{education.degree}</h4>
        <h4>{education.completion}</h4>
      </div>
      <h3>{experience.corporation}</h3>
      <h4>{experience.position}</h4>
      <h4>{experience.responsibilities}</h4>
      {experience.start && (
        <p className="experience-duration">
          {experience.end
            ? `${experience.start} - ${experience.end}`
            : `${experience.start} - present`}
        </p>
      )}
      <ol className="skills-info">
        {others.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ol>
      <ol className="languages-info">
        {others.languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ol>
    </div>
  );
}
