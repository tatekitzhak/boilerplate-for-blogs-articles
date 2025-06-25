# A boilerplate for blogs and articles
## React 19, Webpack, TypeScript and TailwindCSS Dashboard Boilerplate

# Nginx Docker:
- nginx -t
- service nginx reload

``` bash
|Domain                 | Method       | URI                                  | Action  | Name  |
|-----------------------|:------------:| ------------------------------------:| -------:|------:|
| http://localhost:8080 |GET           | /                                    |         |       |
|                       |GET           | /api                                 
|                       |GET           | /api/blogs                           
|                       |GET           |/api/blog/:id                        
|                       |GET           |/category/subcategory/topics/article   
```

# Folder Structure:
``` bash
├── package.json           -> Package json file.
├── public
├── README.md
├── src
│   ├── _mockApis          -> Mock Json data to be used for working apps
│   ├── assets
│   │   ├── images
│   │   ├── scss           -> Template SCSS files
│   │       ├── style.scss -> Application main file
│   │       ├── _themes-vars.module.scss
│   ├── contexts           -> State context for Login management
│   ├── hooks              -> Custom hooks
│   ├── layout
│   │   ├── DocsLayout     -> Layout for docs components & routers
│   │   ├── MainLayout     -> Layout for main components & routers
│   │   ├── MinimalLayout  -> Layout for mimimal components & routers
│   │   ├── NavigationScroll.js
│   │   ├── NavMotion.js
│   ├── menu-items         -> menu items
│   ├── routes             -> different route based on layouts
│   ├── store              -> Redux actions, reducers
│   │   ├── slices         -> different slices of toolkit
│   ├── themes             -> Contains application style and theme
│   ├── types              -> common types for Typescript. Exist only in Typescript
│   ├── ui-component       -> Template custom & reusable components
│   ├── utils
│   │   ├── locales        -> different locale json files
│   │   ├── route-guard    -> Auth guard to prevent unexpected navigations
│   └── views              -> View files for all pages
├── App.js                 -> starting point of application
├── config.js              -> Template constant value and live customization  
├── index.js               -> Application root js file
```

# Remove and clean dependencies
- `rm -rf node_modules`
- `rm -rf package-lock.json`
- `npm cache verify`
- `npm cache clean`
- `npm cache clean --force`

## Clear git local cache
- `git rm -r --cached .`
- `rm -rf .git`
# How to Merge in Git: Remote and Local Git Repositories
- `git add .`
- `git commit -am ""`
- `git fetch origin aRemoteBranch`
- `git checkout aLocalBranch`
- `git merge origin/aRemoteBranch`