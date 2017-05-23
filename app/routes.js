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
   path: '/about',
   name: 'About',
   getComponent(nextState, cb) {
     import('containers/About')
       .then(loadModule(cb))
       .catch(errorLoading);
  },
},
{
path: '/store',
name: 'Store',
getComponent(nextState, cb) {
  import('containers/Store')
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
   path: '/signup',
   name: 'SignUp',
   getComponent(nextState, cb) {
     import('containers/SignUp')
       .then(loadModule(cb))
       .catch(errorLoading);
  },
},
{
path: '/create-product',
name: 'Create Product',
getComponent(nextState, cb) {
  import('containers/CreateProduct')
    .then(loadModule(cb))
    .catch(errorLoading);
},
},
{
path: '/update-product/:id',
name: 'Update Product',
getComponent(nextState, cb) {
  import('containers/UpdateProduct')
    .then(loadModule(cb))
    .catch(errorLoading);
},
},
{
 path: '/product/:id',
 name: 'Product',
 getComponent(nextState, cb) {
   import('containers/Product')
     .then(loadModule(cb))
     .catch(errorLoading);
},
},
{
path: '/create-category',
name: 'Create Category',
getComponent(nextState, cb) {
  import('containers/CreateCategory')
    .then(loadModule(cb))
    .catch(errorLoading);
},
},
{
path: '/delete-category',
name: 'Delete Category',
getComponent(nextState, cb) {
  import('containers/DeleteCategory')
    .then(loadModule(cb))
    .catch(errorLoading);
},
},
{
path: '/orders',
name: 'Orders',
getComponent(nextState, cb) {
  import('containers/Orders')
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
