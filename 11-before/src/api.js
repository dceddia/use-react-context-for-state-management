export const FAKE_USER = {
  firstName: 'Dave',
  lastName: 'Ceddia',
  username: 'dave',
  avatar:
    'https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b?s=32'
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'Hey Dave',
    body: 'Yo, just wanted to say hey.'
  },
  {
    id: 1,
    subject: 'React is great',
    body: 'I thought I should let you know.'
  },
  {
    id: 2,
    subject: 'REQUEST FOR ASSISTANCE',
    body:
      'If you send me your bank account number I will reward you with $10 million whole US dollars.'
  }
];

const LOTS_OF_EMAILS = Array(1000)
  .fill(0)
  .map(_ => {
    let email =
      FAKE_EMAILS[
        Math.floor(Math.random() * FAKE_EMAILS.length)
      ];
    return {
      ...email,
      id: Math.random(),
      preview: email.body.substr(0, 46)
    };
  });

// Generate a preview
FAKE_EMAILS.forEach(
  email => (email.preview = email.body.substr(0, 46))
);

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'dave' && password === 'secret') {
        resolve(FAKE_USER);
      } else {
        reject({ message: 'Invalid username or password' });
      }
    }, 300);
  });
}

export function fetchEmails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(LOTS_OF_EMAILS);
    }, 300);
  });
}

export function fetchLatestEmails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        FAKE_EMAILS.map(e => ({
          ...e,
          id: Math.random()
        })).slice(
          0,
          Math.floor(
            Math.random() * (FAKE_EMAILS.length + 1)
          )
        )
      );
    }, 300);
  });
}
