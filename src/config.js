const dev = {}

const prod = {}

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
}

// https://serverless-stack.com/chapters/environments-in-create-react-app.html
