# Application structure

```
├─ src
├── api
├── assets
|   └─ static file
├── components
│   ├─ ResusableComponentA
│   |   ├─ index.js
│   |   ├─ ReusableComponentA.vue
│   |	  └─ ReusableComponentA.spec.js
|   └─ ResusableComponentB
|       ├─ index.js
|       └─ ReusableComponentB.vue
|       
├── routes
│   └─ index.js
├── views
├── main.js
├── App.vue
```

**API Directory**

The `api` directory contains application programing interface.

**Assets Directory**

The `assets` directory contains un-compiled assets.

**Components Directory**

The `components` directory contains all reusable Vue.js Components.

**Router Directory**

The `router` directory contains application routes.

**Views Directory**

The `views` directory contains application views.


# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
