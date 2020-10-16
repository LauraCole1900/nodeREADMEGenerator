// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Technologies Used](#technologies)
  * [Tests](#tests)
  * [Problems Faced](#problems)
  * [Credits](#credits)
  * [Collaborators](#collaborators)
  * [Contact](#contact)
  * [License](#license)

  ## Description

  ${data.description}

  ## Installation Instructions

  ${data.install}

  ## Usage

  ${data.usage}

  ## Technologies used

  ${data.tech}

  ## Tests

  ${data.tests}

  ## Problems Faced

  ${data.problems}

  ## Credits

  ${data.credits}

  ## Collaborators

  ${data.collaborators}

  ## Contact me

  If you have further questions, you can reach me at ${data.email}. For more of my work, see [my GitHub](https://github.com/${data.github}).

  ## License

  ![License badge](https://img.shields.io/badge/license-${data.license}-brightgreen).
`;
}

module.exports = generateMarkdown;
