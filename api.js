const axios = require('axios');

// Accept the ticket number as a command-line argument
const Ticket_NO = process.argv[2];

if (!Ticket_NO) {
  console.error('Error: Ticket number not provided.');
  process.exit(1);
}

const url = 'https://gittest.atlassian.net/rest/api/3/issue/' + Ticket_NO;
const auth = {
  // JIRA login email
  username: 'shoaib40ce@gmail.com',

  // Token to be copied From JIRA
  password: 'ATATT3xFfGF0WfECES2QALJeHN7e_2LCAhkLDlGhZ5ZqN0YHcaWKm9pr__m1XWzfSbnBW_bpsp6SKyfVgsyCszH30rzpjYgNH779eo05QGp5QIN_q0zeOyo6LZlHg1HM2zB5Pn08DoNATpppWm5nBlBP81BZJAVbNBM-O9sfZtZSfH6WYHOemQ8=2DD4759F' // Replace with your actual API token
};

const requestBody = {
  update: {
    customfield_10044: [
      {
        set: 'Ticket Flagged Successfully'
      }
    ]
  }
};

axios
  .put(url, requestBody, { auth })
  .then(response => {
    console.log('Response:', response.status);
  })
  .catch(error => {
    console.error('Error:', error);
  });
