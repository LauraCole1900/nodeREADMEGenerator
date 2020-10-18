// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Technologies Used](#technologies)
  * [Tests](#tests)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Questions](#questions)
  * [License](#license)

  ## Description

  ${data.description}

  ## Installation Instructions

  ${data.install}

  ## Usage

  ${data.usage}

  ## Technologies Used

  ${data.tech}

  ## Tests

  ${data.tests}

  ## Credits

  ${data.credits}

  ## Contributing

  ${data.contribute}

  ## Questions

  If you have further questions, you can reach me at ${data.email}. For more of my work, see [my GitHub](https://github.com/${data.github}).

  ## License

  ![License badge](https://img.shields.io/badge/license-${data.license}-brightgreen).
`;
}

module.exports = generateMarkdown;
