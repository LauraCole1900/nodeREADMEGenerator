// function to generate markdown for README

function descriptionSection (boolean, description) {
  if (boolean === true) {
    return (`## Description
    
    ${description}`)
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${descriptionSection(data.sections.Description.checked, data.description)}`;
}

module.exports = generateMarkdown;
