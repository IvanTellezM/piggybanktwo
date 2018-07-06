import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCcBqMmSDlJKYE5IwTDG3iO62qbkI36Duk",
    authDomain: "piggybank-55533.firebaseapp.com",
    databaseURL: "https://piggybank-55533.firebaseio.com",
    projectId: "piggybank-55533",
    storageBucket: "piggybank-55533.appspot.com",
    messagingSenderId: "903737963183"
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export { firebase, googleAuthProvider, database as default };

//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//   database.ref('expenses').push({
//       amount: 2500,
//       createdAt: 876546987654346,
//       description: 'Coffee',
//       note: 'Andre'
//   });

//   database.ref('expenses').on('value', (snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           });
//       });
//       console.log(expenses);
//   });

//   database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   })
//   database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log("Error fetching data: ", e);
//     })

//   database.ref().set({
//       name: 'Siddharth Phadke',
//       age: 24,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'AirBnb'
//       },
//       isSingle: true,
//       location: {
//           city: "Jersey City",
//           state: "NJ",
//           country: "USA"
//       }
//   }).then(() => {
//       console.log("Data was saved");
//   }).catch((error) => {
//       console.log("error: ", error)
//   });


//   database.ref().update({
//       stressLevel: 5,
//       'job/company': 'Netflix',
//       'location/city': 'New York City',
//       'location/state': 'New York'
//   })
// database.ref()
//     .remove()
//     .then(() => {
//         console.log("Removed Successfully")
//     }).catch((e) => {
//         console.log("Cant Remove Data", e);
// });