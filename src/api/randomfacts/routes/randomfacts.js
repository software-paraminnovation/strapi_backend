module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/randomfacts',
     handler: 'randomfacts.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
