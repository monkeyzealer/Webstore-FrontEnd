const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
     path: '/',
     name: 'Home',
     getComponent(nextState, cb) {
       import('containers/Home')
         .then(loadModule(cb))
         .catch(errorLoading);
    },
  },
    {
     path: '/signin',
     name: 'SignIn',
     getComponent(nextState, cb) {
       import('containers/SignIn')
         .then(loadModule(cb))
         .catch(errorLoading);
    },
  },
    {
     path: '*',
     name: 'notfound',
     getComponent(nextState, comMod) {
       import('containers/NotFoundPage')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
  ];
}
