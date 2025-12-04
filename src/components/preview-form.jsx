import './style.css';

export default function Preview({ general, education, experience, others }) {
  return (
    <div className="preview">
      <div className="details-left-side">
        {general.email && (
          <div className="section email-section">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>email</title>
              <path d="M5,5H18C19.66,5 21,6.34 21,8V17C21,18.66 19.66,20 18,20H5C3.34,20 2,18.66 2,17V8C2,6.34 3.34,5 5,5M5,6C4.5,6 4.06,6.17 3.72,6.47L11.5,11.5L19.28,6.47C18.94,6.17 18.5,6 18,6H5M11.5,12.71L3.13,7.28C3.05,7.5 3,7.75 3,8V17C3,18.1 3.9,19 5,19H18C19.1,19 20,18.1 20,17V8C20,7.75 19.95,7.5 19.87,7.28L11.5,12.71Z" />
            </svg>
            <span className="personal-details">{general.email}</span>
          </div>
        )}
        {general.phone && (
          <div className="section phone-section">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>phone</title>
              <path d="M19.5,22C20.33,22 21,21.33 21,20.5V17C21,16.17 20.33,15.5 19.5,15.5C18.33,15.5 17.18,15.32 16.08,14.95C15.55,14.78 14.97,14.92 14.56,15.32L13.12,16.76C10.64,15.41 8.57,13.34 7.23,10.87L8.66,9.44C9.07,9.05 9.22,8.47 9.04,7.91C8.68,6.82 8.5,5.67 8.5,4.5C8.5,3.67 7.83,3 7,3H3.5C2.67,3 2,3.67 2,4.5C2,14.15 9.85,22 19.5,22M3.5,4H7C7.28,4 7.5,4.22 7.5,4.5C7.5,5.78 7.7,7.03 8.09,8.22C8.14,8.36 8.13,8.56 7.97,8.72L6,10.68C7.65,13.91 10.07,16.33 13.31,18L15.26,16.03C15.4,15.89 15.59,15.85 15.77,15.9C16.97,16.3 18.22,16.5 19.5,16.5C19.78,16.5 20,16.72 20,17V20.5C20,20.78 19.78,21 19.5,21C10.4,21 3,13.6 3,4.5C3,4.22 3.22,4 3.5,4Z" />
            </svg>
            <span className="personal-details">{general.phone}</span>
          </div>
        )}
        {general.location && (
          <div className="section phone-section">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>map-marker</title>
              <path d="M11.5,7C12.88,7 14,8.12 14,9.5C14,10.88 12.88,12 11.5,12C10.12,12 9,10.88 9,9.5C9,8.12 10.12,7 11.5,7M11.5,8C10.67,8 10,8.67 10,9.5C10,10.33 10.67,11 11.5,11C12.33,11 13,10.33 13,9.5C13,8.67 12.33,8 11.5,8M6.8,12.36L11.5,20.09L16.2,12.36V12.36C16.71,11.5 17,10.55 17,9.5C17,6.46 14.54,4 11.5,4C8.46,4 6,6.46 6,9.5C6,10.55 6.29,11.5 6.8,12.36V12.36M17.05,12.88L11.5,22L5.95,12.88V12.88C5.35,11.89 5,10.74 5,9.5C5,5.91 7.91,3 11.5,3C15.09,3 18,5.91 18,9.5C18,10.74 17.65,11.89 17.05,12.88V12.88Z" />
            </svg>
            <span className="personal-details">{general.location}</span>
          </div>
        )}
        {others.skills?.length > 0 && (
          <>
            <span className="dotted-line"></span>
            <div className="others-wrapper">
              <span className="secondary-header others-line">Skills</span>:
              <div className="others-row">
                <ol className="skills-info">
                  {others.skills.map((skill, index) => (
                    <span className="skill-details">
                      <li key={index}>{skill}</li>
                    </span>
                  ))}
                </ol>
              </div>
            </div>
          </>
        )}
        {others.languages?.length > 0 && (
          <>
            <span className="dotted-line"></span>
            <div className="others-wrapper">
              <span className="secondary-header others-line">Languages</span>:
              <ol className="languages-info">
                {' '}
                {others.languages.map((lang, index) => (
                  <span className="language-details">
                    <li key={index}>{lang}</li>
                  </span>
                ))}
              </ol>
            </div>
          </>
        )}
      </div>
      <div className="details-right-side">
        <div className="profile-wrapper">
          {general.name && (
            <span id="profile-name" className="details">
              {general.name}
            </span>
          )}
          <hr style={{ marginTop: '20px' }} />
          <h1 className="main-header">Profile</h1>
          <span className="matching-semicolons">:</span>
          <p>
            About Me: <span className="details">{general.about}</span>
          </p>
        </div>
        <div className="education-wrapper">
          <hr />
          <h1 className="main-header">Education</h1>
          <span className="matching-semicolons">:</span>
          <h2 className="secondary-header">
            School: <span className="details">{education.school}</span>
          </h2>
          <h2 className="secondary-header">
            University: <span className="details">{education.university}</span>
          </h2>
          <h2 className="secondary-header">
            Specialization:{' '}
            <span className="details">{education.specialization}</span>
          </h2>
          <h2 className="secondary-header">
            Degree: <span className="details">{education.degree}</span>
          </h2>
          <h2 className="secondary-header">
            Ended Education:{' '}
            <span className="details">{education.completion}</span>
          </h2>
        </div>
        <div className="experience-wrapper">
          <hr />
          <h1 className="main-header">Employment History</h1>
          <span className="matching-semicolons">:</span>
          <h2 className="secondary-header">
            Corporation:{' '}
            <span className="details">{experience.corporation}</span>
          </h2>
          <h2 className="secondary-header">
            Position: <span className="details">{experience.position}</span>
          </h2>
          Tenure:{' '}
          {experience.start && (
            <p className="experience-duration">
              {experience.end
                ? `${experience.start} - ${experience.end}`
                : `${experience.start} - present`}
            </p>
          )}
          <h2 className="secondary-header">
            Responsibilities:{' '}
            <span className="details">{experience.responsibilities}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
