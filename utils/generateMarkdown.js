// TODO: Create a const that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    if (license !== "None") {
      return `![github](https://img.shields.io/badge/license-${license}-yellow.svg)`;
    }  
    return '';
  };

// TODO: Create a const that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license !== "None") {
    return `[Click here to view license](${license})`;
  } else { 
    return '';
  }
};

// TODO: Create a const that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license !== "None") {
    return `This project is licensed under ${license}`;
  } else {
    return '';
  }
};

// TODO: Create a const to generate markdown for README
const generateMarkdown = function(data) {
  return `# ${data.project},


##Title

${data.project},

###Description

${data.description},

####Dependencies

####Email

If you have questions regarding this project, you can contact me at ${data.email},

`;
};

module.exports = generateMarkdown;
