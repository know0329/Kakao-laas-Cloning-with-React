# Laas-cloning


```
laas-cloning
├─ .vscode
│  └─ launch.json
├─ my-app
│  └─ client
│     ├─ .babel-plugin-macrosrc.js
│     ├─ .env.local
│     ├─ .env.production
│     ├─ .eslintrc.js
│     ├─ .eslintrc.json
│     ├─ .husky
│     │  └─ pre-commit
│     ├─ .npmrc
│     ├─ .nvmrc
│     ├─ .prettierignore
│     ├─ .prettierrc
│     ├─ .stylelintrc
│     ├─ .vscode
│     │  ├─ extensions.json
│     │  ├─ launch.json
│     │  └─ settings.json
│     ├─ build
│     │  ├─ asset-manifest.json
│     │  ├─ favicon.ico
│     │  ├─ index.html
│     │  ├─ logo192.png
│     │  ├─ logo512.png
│     │  ├─ manifest.json
│     │  ├─ robots.txt
│     │  └─ static
│     │     ├─ css
│     │     │  ├─ 168.8d86bbfe.chunk.css
│     │     │  └─ main.0f3be6e9.css
│     │     ├─ js
│     │     │  ├─ 168.fbfbf9ab.chunk.js
│     │     │  ├─ 27.06ee83f9.chunk.js
│     │     │  ├─ 345.3a71dfc9.chunk.js
│     │     │  ├─ 345.3a71dfc9.chunk.js.LICENSE.txt
│     │     │  ├─ 879.6e04c743.chunk.js
│     │     │  ├─ main.0afd35b1.js
│     │     │  └─ main.0afd35b1.js.LICENSE.txt
│     │     └─ media
│     │        ├─ 3.4fdfd166cbf4117c99fc.png
│     │        ├─ 4.7af32e0ed9da32ae03ea.png
│     │        ├─ 5.f7e57bcd72b78dc133bc.png
│     │        ├─ documentation-icon.ff78ba492d5ce73f9bcf66c6396edbbc.svg
│     │        ├─ github-icon.a30c89fe710cde711c4ed8ef5efb0269.svg
│     │        ├─ header-img.700069264f0e1bae2fd5.png
│     │        ├─ logo01.f0f3765fa14836d794809c38f220dbb8.svg
│     │        ├─ logo02.ef3dc4768d89bf758521d844dc1406e2.svg
│     │        ├─ logo03.ed39a486d651c4499e1cc1e7717dfc41.svg
│     │        ├─ logo04.d4601325c6147b5d07ef7a4513368711.svg
│     │        ├─ logo05.e583f97db1f0a140ca92e3cf84c88b12.svg
│     │        ├─ logo06.7fcfefcaa956903796a1150cbef55634.svg
│     │        ├─ search.118786186aec2777d23c.png
│     │        ├─ slick.2630a3e3eab21c607e21.svg
│     │        ├─ slick.295183786cd8a1389865.woff
│     │        ├─ slick.a4e97f5a2a64f0ab1323.eot
│     │        └─ slick.c94f7671dcc99dce43e2.ttf
│     ├─ docker-compose.yml
│     ├─ internals
│     │  ├─ extractMessages
│     │  │  ├─ i18next-scanner.config.js
│     │  │  └─ stringfyTranslations.js
│     │  ├─ generators
│     │  │  ├─ component
│     │  │  │  ├─ index.test.tsx.hbs
│     │  │  │  ├─ index.ts
│     │  │  │  ├─ index.tsx.hbs
│     │  │  │  ├─ loadable.ts.hbs
│     │  │  │  └─ messages.ts.hbs
│     │  │  ├─ paths.ts
│     │  │  ├─ plopfile.ts
│     │  │  ├─ slice
│     │  │  │  ├─ appendRootState.hbs
│     │  │  │  ├─ importContainerState.hbs
│     │  │  │  ├─ index.ts
│     │  │  │  ├─ index.ts.hbs
│     │  │  │  ├─ saga.ts.hbs
│     │  │  │  ├─ selectors.ts.hbs
│     │  │  │  └─ types.ts.hbs
│     │  │  └─ utils
│     │  │     └─ index.ts
│     │  ├─ scripts
│     │  │  └─ clean.ts
│     │  ├─ startingTemplate
│     │  │  ├─ public
│     │  │  │  ├─ favicon.ico
│     │  │  │  ├─ index.html
│     │  │  │  ├─ logo192.png
│     │  │  │  ├─ logo512.png
│     │  │  │  ├─ manifest.json
│     │  │  │  └─ robots.txt
│     │  │  ├─ src
│     │  │  │  ├─ app
│     │  │  │  │  ├─ components
│     │  │  │  │  │  └─ NotFoundPage
│     │  │  │  │  │     ├─ index.tsx
│     │  │  │  │  │     ├─ Loadable.tsx
│     │  │  │  │  │     └─ P.ts
│     │  │  │  │  ├─ index.tsx
│     │  │  │  │  ├─ pages
│     │  │  │  │  │  └─ HomePage
│     │  │  │  │  │     ├─ index.tsx
│     │  │  │  │  │     └─ Loadable.tsx
│     │  │  │  │  └─ __tests__
│     │  │  │  │     └─ index.test.tsx
│     │  │  │  ├─ index.tsx
│     │  │  │  ├─ locales
│     │  │  │  │  ├─ en
│     │  │  │  │  │  └─ translation.json
│     │  │  │  │  ├─ i18n.ts
│     │  │  │  │  ├─ translations.ts
│     │  │  │  │  ├─ types.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     └─ i18n.test.ts
│     │  │  │  ├─ react-app-env.d.ts
│     │  │  │  ├─ reportWebVitals.ts
│     │  │  │  ├─ setupTests.ts
│     │  │  │  ├─ store
│     │  │  │  │  ├─ configureStore.ts
│     │  │  │  │  ├─ reducers.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     ├─ configureStore.test.ts
│     │  │  │  │     └─ reducer.test.ts
│     │  │  │  ├─ styles
│     │  │  │  │  ├─ global-styles.ts
│     │  │  │  │  ├─ media.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     └─ media.test.ts
│     │  │  │  ├─ types
│     │  │  │  │  ├─ index.ts
│     │  │  │  │  └─ RootState.ts
│     │  │  │  └─ utils
│     │  │  │     ├─ @reduxjs
│     │  │  │     │  └─ toolkit.tsx
│     │  │  │     ├─ loadable.tsx
│     │  │  │     ├─ messages.ts
│     │  │  │     ├─ redux-injectors.ts
│     │  │  │     └─ types
│     │  │  │        └─ injector-typings.ts
│     │  │  └─ tsconfig.json
│     │  └─ testing
│     │     ├─ generators
│     │     │  ├─ componentVariations.ts
│     │     │  ├─ sliceVariations.ts
│     │     │  └─ test-generators.ts
│     │     └─ loadable.mock.tsx
│     ├─ package.json
│     ├─ public
│     │  ├─ favicon.ico
│     │  ├─ index.html
│     │  ├─ logo192.png
│     │  ├─ logo512.png
│     │  ├─ manifest.json
│     │  └─ robots.txt
│     ├─ README.md
│     ├─ setupProxy.js
│     ├─ src
│     │  ├─ app
│     │  │  ├─ components
│     │  │  │  ├─ A
│     │  │  │  │  ├─ index.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     └─ index.test.tsx
│     │  │  │  ├─ FormLabel
│     │  │  │  │  ├─ index.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     └─ index.test.tsx
│     │  │  │  ├─ Link
│     │  │  │  │  ├─ index.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     ├─ index.test.tsx
│     │  │  │  │     └─ __snapshots__
│     │  │  │  │        └─ index.test.tsx.snap
│     │  │  │  ├─ LoadingIndicator
│     │  │  │  │  ├─ index.tsx
│     │  │  │  │  └─ __tests__
│     │  │  │  │     ├─ index.test.tsx
│     │  │  │  │     └─ __snapshots__
│     │  │  │  │        └─ index.test.tsx.snap
│     │  │  │  ├─ NavBar
│     │  │  │  │  ├─ assets
│     │  │  │  │  │  ├─ documentation-icon.svg
│     │  │  │  │  │  └─ github-icon.svg
│     │  │  │  │  ├─ index.tsx
│     │  │  │  │  ├─ Logo.tsx
│     │  │  │  │  ├─ Nav.tsx
│     │  │  │  │  └─ __tests__
│     │  │  │  │     ├─ index.test.tsx
│     │  │  │  │     ├─ Logo.test.tsx
│     │  │  │  │     ├─ Nav.test.tsx
│     │  │  │  │     └─ __snapshots__
│     │  │  │  │        ├─ index.test.tsx.snap
│     │  │  │  │        ├─ Logo.test.tsx.snap
│     │  │  │  │        └─ Nav.test.tsx.snap
│     │  │  │  ├─ PageWrapper
│     │  │  │  │  └─ index.ts
│     │  │  │  └─ Radio
│     │  │  │     └─ index.tsx
│     │  │  ├─ index.tsx
│     │  │  ├─ pages
│     │  │  │  ├─ HomePage
│     │  │  │  │  ├─ assets
│     │  │  │  │  │  ├─ cra-logo.svg
│     │  │  │  │  │  ├─ plus-sign.svg
│     │  │  │  │  │  └─ rp-logo.svg
│     │  │  │  │  ├─ components
│     │  │  │  │  │  ├─ Lead.ts
│     │  │  │  │  │  ├─ P.ts
│     │  │  │  │  │  ├─ SubTitle.ts
│     │  │  │  │  │  ├─ Title.ts
│     │  │  │  │  │  └─ __tests__
│     │  │  │  │  │     ├─ Lead.test.tsx
│     │  │  │  │  │     ├─ P.test.tsx
│     │  │  │  │  │     ├─ Subtitle.test.tsx
│     │  │  │  │  │     ├─ Title.test.tsx
│     │  │  │  │  │     └─ __snapshots__
│     │  │  │  │  │        ├─ Lead.test.tsx.snap
│     │  │  │  │  │        ├─ P.test.tsx.snap
│     │  │  │  │  │        ├─ Subtitle.test.tsx.snap
│     │  │  │  │  │        └─ Title.test.tsx.snap
│     │  │  │  │  ├─ Features
│     │  │  │  │  │  ├─ assets
│     │  │  │  │  │  │  ├─ code-analysis.svg
│     │  │  │  │  │  │  ├─ css.svg
│     │  │  │  │  │  │  ├─ instant-feedback.svg
│     │  │  │  │  │  │  ├─ intl.svg
│     │  │  │  │  │  │  ├─ route.svg
│     │  │  │  │  │  │  ├─ scaffolding.svg
│     │  │  │  │  │  │  ├─ seo.svg
│     │  │  │  │  │  │  ├─ state.svg
│     │  │  │  │  │  │  └─ ts.svg
│     │  │  │  │  │  ├─ GithubRepoForm
│     │  │  │  │  │  │  ├─ assets
│     │  │  │  │  │  │  │  ├─ new-window.svg
│     │  │  │  │  │  │  │  └─ star.svg
│     │  │  │  │  │  │  ├─ components
│     │  │  │  │  │  │  │  ├─ Input.ts
│     │  │  │  │  │  │  │  ├─ TextButton.ts
│     │  │  │  │  │  │  │  └─ __tests__
│     │  │  │  │  │  │  │     ├─ input.test.tsx
│     │  │  │  │  │  │  │     └─ TextButton.test.tsx
│     │  │  │  │  │  │  ├─ index.tsx
│     │  │  │  │  │  │  ├─ RepoItem.tsx
│     │  │  │  │  │  │  ├─ slice
│     │  │  │  │  │  │  │  ├─ index.ts
│     │  │  │  │  │  │  │  ├─ saga.ts
│     │  │  │  │  │  │  │  ├─ selectors.ts
│     │  │  │  │  │  │  │  ├─ types.ts
│     │  │  │  │  │  │  │  └─ __tests__
│     │  │  │  │  │  │  │     ├─ saga.test.ts
│     │  │  │  │  │  │  │     ├─ selectors.test.ts
│     │  │  │  │  │  │  │     ├─ slice.test.ts
│     │  │  │  │  │  │  │     └─ __snapshots__
│     │  │  │  │  │  │  │        └─ saga.test.ts.snap
│     │  │  │  │  │  │  └─ __tests__
│     │  │  │  │  │  │     ├─ index.test.tsx
│     │  │  │  │  │  │     ├─ RepoItem.test.tsx
│     │  │  │  │  │  │     └─ __snapshots__
│     │  │  │  │  │  │        └─ RepoItem.test.tsx.snap
│     │  │  │  │  │  ├─ index.tsx
│     │  │  │  │  │  ├─ LanguageSwitch
│     │  │  │  │  │  │  ├─ index.tsx
│     │  │  │  │  │  │  ├─ messages.ts
│     │  │  │  │  │  │  └─ __tests__
│     │  │  │  │  │  │     └─ index.test.tsx
│     │  │  │  │  │  └─ ThemeSwitch
│     │  │  │  │  │     ├─ index.tsx
│     │  │  │  │  │     └─ __tests__
│     │  │  │  │  │        └─ index.test.tsx
│     │  │  │  │  ├─ index.tsx
│     │  │  │  │  ├─ Loadable.tsx
│     │  │  │  │  ├─ Logos.tsx
│     │  │  │  │  ├─ Masthead.tsx
│     │  │  │  │  ├─ messages.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     ├─ Features.test.tsx
│     │  │  │  │     ├─ index.test.tsx
│     │  │  │  │     ├─ Logos.test.tsx
│     │  │  │  │     ├─ Masthead.test.tsx
│     │  │  │  │     └─ __snapshots__
│     │  │  │  │        ├─ Features.test.tsx.snap
│     │  │  │  │        ├─ index.test.tsx.snap
│     │  │  │  │        ├─ Logos.test.tsx.snap
│     │  │  │  │        └─ Masthead.test.tsx.snap
│     │  │  │  ├─ Login
│     │  │  │  │  ├─ index.js
│     │  │  │  │  ├─ Loadable.tsx
│     │  │  │  │  ├─ LoginApp.js
│     │  │  │  │  ├─ reportWebVitals.js
│     │  │  │  │  └─ style
│     │  │  │  │     ├─ flexboxgrid.min.css
│     │  │  │  │     └─ index.css
│     │  │  │  ├─ NotFoundPage
│     │  │  │  │  ├─ index.tsx
│     │  │  │  │  ├─ Loadable.tsx
│     │  │  │  │  ├─ P.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     ├─ index.test.tsx
│     │  │  │  │     └─ __snapshots__
│     │  │  │  │        └─ index.test.tsx.snap
│     │  │  │  ├─ Search
│     │  │  │  │  ├─ App.js
│     │  │  │  │  ├─ component
│     │  │  │  │  │  └─ Topbar.js
│     │  │  │  │  ├─ img
│     │  │  │  │  │  ├─ clothes.png
│     │  │  │  │  │  ├─ cosmetics.png
│     │  │  │  │  │  ├─ ex.png
│     │  │  │  │  │  └─ leisure.png
│     │  │  │  │  ├─ index.js
│     │  │  │  │  ├─ Loadable.tsx
│     │  │  │  │  ├─ reportWebVitals.js
│     │  │  │  │  ├─ Selected
│     │  │  │  │  │  └─ SelectedProduct.js
│     │  │  │  │  └─ style
│     │  │  │  │     ├─ flexboxgrid.min.css
│     │  │  │  │     └─ index.css
│     │  │  │  ├─ SignUp
│     │  │  │  │  ├─ index.js
│     │  │  │  │  ├─ Loadable.tsx
│     │  │  │  │  ├─ reportWebVitals.js
│     │  │  │  │  ├─ SignUpApp.js
│     │  │  │  │  └─ style
│     │  │  │  │     ├─ flexboxgrid.min.css
│     │  │  │  │     └─ index.css
│     │  │  │  └─ Test
│     │  │  │     ├─ App.test.js
│     │  │  │     ├─ Apps.js
│     │  │  │     ├─ assets
│     │  │  │     │  ├─ cra-logo.svg
│     │  │  │     │  ├─ fonts
│     │  │  │     │  │  ├─ Khula-ExtraBold.ttf
│     │  │  │     │  │  ├─ Khula-Regular.ttf
│     │  │  │     │  │  └─ Khula-SemiBold.ttf
│     │  │  │     │  ├─ img
│     │  │  │     │  │  ├─ add
│     │  │  │     │  │  │  ├─ 1.png
│     │  │  │     │  │  │  ├─ 2.png
│     │  │  │     │  │  │  ├─ 3.png
│     │  │  │     │  │  │  ├─ 4.png
│     │  │  │     │  │  │  └─ add2.png
│     │  │  │     │  │  ├─ clients
│     │  │  │     │  │  │  ├─ logo01.svg
│     │  │  │     │  │  │  ├─ logo02.svg
│     │  │  │     │  │  │  ├─ logo03.svg
│     │  │  │     │  │  │  ├─ logo04.svg
│     │  │  │     │  │  │  ├─ logo05.svg
│     │  │  │     │  │  │  └─ logo06.svg
│     │  │  │     │  │  ├─ contact-1.png
│     │  │  │     │  │  ├─ contact-2.png
│     │  │  │     │  │  ├─ contact-3.png
│     │  │  │     │  │  ├─ folding
│     │  │  │     │  │  │  ├─ clothes.png
│     │  │  │     │  │  │  ├─ cosmetics.png
│     │  │  │     │  │  │  ├─ diet.png
│     │  │  │     │  │  │  ├─ etc.png
│     │  │  │     │  │  │  ├─ fridge.png
│     │  │  │     │  │  │  ├─ frozen-food.png
│     │  │  │     │  │  │  ├─ homeappliances.png
│     │  │  │     │  │  │  ├─ interior.png
│     │  │  │     │  │  │  ├─ parenting.png
│     │  │  │     │  │  │  ├─ pill.png
│     │  │  │     │  │  │  └─ sport.png
│     │  │  │     │  │  ├─ header-img.png
│     │  │  │     │  │  ├─ projects
│     │  │  │     │  │  │  ├─ 1.png
│     │  │  │     │  │  │  ├─ 2.png
│     │  │  │     │  │  │  ├─ 3.png
│     │  │  │     │  │  │  ├─ 4.png
│     │  │  │     │  │  │  ├─ 5.png
│     │  │  │     │  │  │  └─ 6.png
│     │  │  │     │  │  ├─ sd.png
│     │  │  │     │  │  ├─ search.png
│     │  │  │     │  │  └─ slide
│     │  │  │     │  │     ├─ cart-lyon.jpg
│     │  │  │     │  │     ├─ chunshic.jpg
│     │  │  │     │  │     ├─ cons.png
│     │  │  │     │  │     └─ muzi.gif
│     │  │  │     │  ├─ plus-sign.svg
│     │  │  │     │  ├─ rp-logo.svg
│     │  │  │     │  └─ svg
│     │  │  │     │     ├─ BurgerIcon.jsx
│     │  │  │     │     ├─ Checkmark.jsx
│     │  │  │     │     ├─ CloseIcon.jsx
│     │  │  │     │     ├─ Dots.jsx
│     │  │  │     │     ├─ Logo.jsx
│     │  │  │     │     ├─ Quotes.jsx
│     │  │  │     │     └─ Services
│     │  │  │     │        ├─ BrowserIcon.jsx
│     │  │  │     │        ├─ MonitorIcon.jsx
│     │  │  │     │        ├─ PrinterIcon.jsx
│     │  │  │     │        └─ RollerIcon.jsx
│     │  │  │     ├─ components
│     │  │  │     │  ├─ ButtonBases.js
│     │  │  │     │  ├─ ButtonGroup
│     │  │  │     │  │  ├─ AreaButton.js
│     │  │  │     │  │  ├─ buttonGroup.js
│     │  │  │     │  │  └─ SplitButton.js
│     │  │  │     │  ├─ Buttons
│     │  │  │     │  │  └─ FullButton.jsx
│     │  │  │     │  ├─ DatePicker
│     │  │  │     │  │  └─ DataPicker.js
│     │  │  │     │  ├─ Elements
│     │  │  │     │  │  ├─ Backdrop.jsx
│     │  │  │     │  │  ├─ BlogBox.jsx
│     │  │  │     │  │  ├─ ClientSlider.jsx
│     │  │  │     │  │  ├─ PricingTable.jsx
│     │  │  │     │  │  ├─ ProjectBox.jsx
│     │  │  │     │  │  ├─ ServiceBox.jsx
│     │  │  │     │  │  ├─ TestimonialBox.jsx
│     │  │  │     │  │  └─ TestimonialSlider.jsx
│     │  │  │     │  ├─ Lead.ts
│     │  │  │     │  ├─ Nav
│     │  │  │     │  │  ├─ Sidebar.jsx
│     │  │  │     │  │  └─ TopNavbar.jsx
│     │  │  │     │  ├─ P.ts
│     │  │  │     │  ├─ Sections
│     │  │  │     │  │  ├─ Blog.jsx
│     │  │  │     │  │  ├─ Contact.jsx
│     │  │  │     │  │  ├─ Footer.jsx
│     │  │  │     │  │  ├─ Header.jsx
│     │  │  │     │  │  ├─ Pricing.jsx
│     │  │  │     │  │  ├─ Projects.jsx
│     │  │  │     │  │  └─ Services.jsx
│     │  │  │     │  ├─ SubTitle.ts
│     │  │  │     │  ├─ Title.ts
│     │  │  │     │  └─ __tests__
│     │  │  │     │     ├─ Lead.test.tsx
│     │  │  │     │     ├─ P.test.tsx
│     │  │  │     │     ├─ Subtitle.test.tsx
│     │  │  │     │     ├─ Title.test.tsx
│     │  │  │     │     └─ __snapshots__
│     │  │  │     │        ├─ Lead.test.tsx.snap
│     │  │  │     │        ├─ P.test.tsx.snap
│     │  │  │     │        ├─ Subtitle.test.tsx.snap
│     │  │  │     │        └─ Title.test.tsx.snap
│     │  │  │     ├─ Features
│     │  │  │     │  ├─ assets
│     │  │  │     │  │  ├─ code-analysis.svg
│     │  │  │     │  │  ├─ css.svg
│     │  │  │     │  │  ├─ instant-feedback.svg
│     │  │  │     │  │  ├─ intl.svg
│     │  │  │     │  │  ├─ route.svg
│     │  │  │     │  │  ├─ scaffolding.svg
│     │  │  │     │  │  ├─ seo.svg
│     │  │  │     │  │  ├─ state.svg
│     │  │  │     │  │  └─ ts.svg
│     │  │  │     │  ├─ GithubRepoForm
│     │  │  │     │  │  ├─ assets
│     │  │  │     │  │  │  ├─ new-window.svg
│     │  │  │     │  │  │  └─ star.svg
│     │  │  │     │  │  ├─ components
│     │  │  │     │  │  │  ├─ Input.ts
│     │  │  │     │  │  │  ├─ TextButton.ts
│     │  │  │     │  │  │  └─ __tests__
│     │  │  │     │  │  │     ├─ input.test.tsx
│     │  │  │     │  │  │     └─ TextButton.test.tsx
│     │  │  │     │  │  ├─ index.tsx
│     │  │  │     │  │  ├─ RepoItem.tsx
│     │  │  │     │  │  ├─ slice
│     │  │  │     │  │  │  ├─ index.ts
│     │  │  │     │  │  │  ├─ saga.ts
│     │  │  │     │  │  │  ├─ selectors.ts
│     │  │  │     │  │  │  ├─ types.ts
│     │  │  │     │  │  │  └─ __tests__
│     │  │  │     │  │  │     ├─ saga.test.ts
│     │  │  │     │  │  │     ├─ selectors.test.ts
│     │  │  │     │  │  │     ├─ slice.test.ts
│     │  │  │     │  │  │     └─ __snapshots__
│     │  │  │     │  │  │        └─ saga.test.ts.snap
│     │  │  │     │  │  └─ __tests__
│     │  │  │     │  │     ├─ index.test.tsx
│     │  │  │     │  │     ├─ RepoItem.test.tsx
│     │  │  │     │  │     └─ __snapshots__
│     │  │  │     │  │        └─ RepoItem.test.tsx.snap
│     │  │  │     │  ├─ index.tsx
│     │  │  │     │  ├─ LanguageSwitch
│     │  │  │     │  │  ├─ index.tsx
│     │  │  │     │  │  ├─ messages.ts
│     │  │  │     │  │  └─ __tests__
│     │  │  │     │  │     └─ index.test.tsx
│     │  │  │     │  └─ ThemeSwitch
│     │  │  │     │     ├─ index.tsx
│     │  │  │     │     └─ __tests__
│     │  │  │     │        └─ index.test.tsx
│     │  │  │     ├─ index.tsx
│     │  │  │     ├─ Loadable.tsx
│     │  │  │     ├─ Logos.tsx
│     │  │  │     ├─ Masthead.tsx
│     │  │  │     ├─ messages.ts
│     │  │  │     ├─ reportWebVitals.js
│     │  │  │     ├─ screens
│     │  │  │     │  └─ Landing.jsx
│     │  │  │     ├─ style
│     │  │  │     │  ├─ flexboxgrid.min.css
│     │  │  │     │  └─ index.css
│     │  │  │     └─ __tests__
│     │  │  │        ├─ Features.test.tsx
│     │  │  │        ├─ index.test.tsx
│     │  │  │        ├─ Logos.test.tsx
│     │  │  │        ├─ Masthead.test.tsx
│     │  │  │        └─ __snapshots__
│     │  │  │           ├─ Features.test.tsx.snap
│     │  │  │           ├─ index.test.tsx.snap
│     │  │  │           ├─ Logos.test.tsx.snap
│     │  │  │           └─ Masthead.test.tsx.snap
│     │  │  └─ __tests__
│     │  │     ├─ index.test.tsx
│     │  │     └─ __snapshots__
│     │  │        └─ index.test.tsx.snap
│     │  ├─ index.tsx
│     │  ├─ locales
│     │  │  ├─ de
│     │  │  │  └─ translation.json
│     │  │  ├─ en
│     │  │  │  └─ translation.json
│     │  │  ├─ i18n.ts
│     │  │  ├─ translations.ts
│     │  │  ├─ types.ts
│     │  │  └─ __tests__
│     │  │     └─ i18n.test.ts
│     │  ├─ react-app-env.d.ts
│     │  ├─ reducers
│     │  │  ├─ index.js
│     │  │  └─ search.js
│     │  ├─ reportWebVitals.ts
│     │  ├─ sagas
│     │  │  └─ index.js
│     │  ├─ setupTests.ts
│     │  ├─ store
│     │  │  ├─ configureStore.ts
│     │  │  ├─ reducers.ts
│     │  │  └─ __tests__
│     │  │     ├─ configureStore.test.ts
│     │  │     └─ reducer.test.ts
│     │  ├─ styles
│     │  │  ├─ global-styles.ts
│     │  │  ├─ media.ts
│     │  │  ├─ StyleConstants.ts
│     │  │  ├─ theme
│     │  │  │  ├─ darkMode
│     │  │  │  │  └─ themes.js
│     │  │  │  ├─ slice
│     │  │  │  │  ├─ index.ts
│     │  │  │  │  ├─ selectors.ts
│     │  │  │  │  ├─ types.ts
│     │  │  │  │  └─ __tests__
│     │  │  │  │     └─ slice.test.ts
│     │  │  │  ├─ styled.d.ts
│     │  │  │  ├─ ThemeProvider.tsx
│     │  │  │  ├─ themes.ts
│     │  │  │  ├─ utils.ts
│     │  │  │  └─ __tests__
│     │  │  │     ├─ ThemeProvider.test.tsx
│     │  │  │     └─ utils.test.ts
│     │  │  └─ __tests__
│     │  │     └─ media.test.ts
│     │  ├─ types
│     │  │  ├─ index.ts
│     │  │  ├─ Repo.d.ts
│     │  │  └─ RootState.ts
│     │  └─ utils
│     │     ├─ @reduxjs
│     │     │  └─ toolkit.tsx
│     │     ├─ loadable.tsx
│     │     ├─ messages.ts
│     │     ├─ redux-injectors.ts
│     │     ├─ request.ts
│     │     ├─ types
│     │     │  └─ injector-typings.ts
│     │     └─ __tests__
│     │        ├─ loadable.test.tsx
│     │        ├─ request.test.ts
│     │        └─ __snapshots__
│     │           └─ loadable.test.tsx.snap
│     ├─ tsconfig.json
│     ├─ yarn-error.log
│     └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ react-boilerplate-cra-template-master
│  ├─ .all-contributorsrc
│  ├─ .babel-plugin-macrosrc.js
│  ├─ .editorconfig
│  ├─ .env.local
│  ├─ .env.production
│  ├─ .eslintrc.js
│  ├─ .husky
│  │  ├─ commit-msg
│  │  ├─ pre-commit
│  │  └─ prepare-commit-msg
│  ├─ .npmrc
│  ├─ .nvmrc
│  ├─ .prettierignore
│  ├─ .prettierrc
│  ├─ .stylelintrc
│  ├─ .versionrc.js
│  ├─ .vscode
│  │  ├─ extensions.json
│  │  ├─ launch.json
│  │  └─ settings.json
│  ├─ CHANGELOG.md
│  ├─ CODE_OF_CONDUCT.md
│  ├─ commitlint.config.js
│  ├─ CONTRIBUTING.md
│  ├─ docs
│  │  ├─ building-blocks
│  │  │  ├─ async-components.md
│  │  │  ├─ css.md
│  │  │  ├─ i18n.md
│  │  │  ├─ README.md
│  │  │  ├─ routing.md
│  │  │  ├─ slice
│  │  │  │  ├─ README.md
│  │  │  │  ├─ redux-injectors.md
│  │  │  │  ├─ redux-saga.md
│  │  │  │  ├─ redux-toolkit.md
│  │  │  │  └─ reselect.md
│  │  │  └─ testing.md
│  │  ├─ deployment
│  │  │  ├─ aws.md
│  │  │  ├─ azure.md
│  │  │  ├─ heroku.md
│  │  │  └─ netlify.md
│  │  ├─ misc
│  │  │  └─ faq.md
│  │  ├─ quick-start.md
│  │  ├─ README.md
│  │  ├─ SUMMARY.md
│  │  ├─ tools
│  │  │  ├─ commands.md
│  │  │  └─ editors.md
│  │  └─ understanding-react-boilerplate.md
│  ├─ internals
│  │  ├─ extractMessages
│  │  │  ├─ i18next-scanner.config.js
│  │  │  ├─ jest.config.js
│  │  │  ├─ stringfyTranslations.js
│  │  │  └─ __tests__
│  │  │     └─ extractingMessages.test.ts
│  │  ├─ generators
│  │  │  ├─ component
│  │  │  │  ├─ index.test.tsx.hbs
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ index.tsx.hbs
│  │  │  │  ├─ loadable.ts.hbs
│  │  │  │  └─ messages.ts.hbs
│  │  │  ├─ paths.ts
│  │  │  ├─ plopfile.ts
│  │  │  ├─ slice
│  │  │  │  ├─ appendRootState.hbs
│  │  │  │  ├─ importContainerState.hbs
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ index.ts.hbs
│  │  │  │  ├─ saga.ts.hbs
│  │  │  │  ├─ selectors.ts.hbs
│  │  │  │  └─ types.ts.hbs
│  │  │  └─ utils
│  │  │     └─ index.ts
│  │  ├─ scripts
│  │  │  ├─ clean.ts
│  │  │  ├─ create-changelog.script.ts
│  │  │  ├─ create-cra-app.script.ts
│  │  │  ├─ create-npm-package.script.ts
│  │  │  ├─ create-npm-package.ts
│  │  │  ├─ create-template-folder.ts
│  │  │  ├─ utils.ts
│  │  │  └─ verify-startingTemplate-changes.ts
│  │  ├─ startingTemplate
│  │  │  ├─ public
│  │  │  │  ├─ favicon.ico
│  │  │  │  ├─ index.html
│  │  │  │  ├─ logo192.png
│  │  │  │  ├─ logo512.png
│  │  │  │  ├─ manifest.json
│  │  │  │  └─ robots.txt
│  │  │  ├─ src
│  │  │  │  ├─ app
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ NotFoundPage
│  │  │  │  │  │     ├─ index.tsx
│  │  │  │  │  │     ├─ Loadable.tsx
│  │  │  │  │  │     └─ P.ts
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ pages
│  │  │  │  │  │  └─ HomePage
│  │  │  │  │  │     ├─ index.tsx
│  │  │  │  │  │     └─ Loadable.tsx
│  │  │  │  │  └─ __tests__
│  │  │  │  │     └─ index.test.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ locales
│  │  │  │  │  ├─ en
│  │  │  │  │  │  └─ translation.json
│  │  │  │  │  ├─ i18n.ts
│  │  │  │  │  ├─ translations.ts
│  │  │  │  │  ├─ types.ts
│  │  │  │  │  └─ __tests__
│  │  │  │  │     └─ i18n.test.ts
│  │  │  │  ├─ react-app-env.d.ts
│  │  │  │  ├─ reportWebVitals.ts
│  │  │  │  ├─ setupTests.ts
│  │  │  │  ├─ store
│  │  │  │  │  ├─ configureStore.ts
│  │  │  │  │  ├─ reducers.ts
│  │  │  │  │  └─ __tests__
│  │  │  │  │     ├─ configureStore.test.ts
│  │  │  │  │     └─ reducer.test.ts
│  │  │  │  ├─ styles
│  │  │  │  │  ├─ global-styles.ts
│  │  │  │  │  ├─ media.ts
│  │  │  │  │  └─ __tests__
│  │  │  │  │     └─ media.test.ts
│  │  │  │  ├─ types
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ RootState.ts
│  │  │  │  └─ utils
│  │  │  │     ├─ @reduxjs
│  │  │  │     │  └─ toolkit.tsx
│  │  │  │     ├─ loadable.tsx
│  │  │  │     ├─ messages.ts
│  │  │  │     ├─ redux-injectors.ts
│  │  │  │     └─ types
│  │  │  │        └─ injector-typings.ts
│  │  │  └─ tsconfig.json
│  │  └─ testing
│  │     ├─ generators
│  │     │  ├─ componentVariations.ts
│  │     │  ├─ sliceVariations.ts
│  │     │  └─ test-generators.ts
│  │     └─ loadable.mock.tsx
│  ├─ LICENSE
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  ├─ RELEASE_PROCESS.md
│  ├─ src
│  │  ├─ app
│  │  │  ├─ components
│  │  │  │  ├─ A
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ __tests__
│  │  │  │  │     └─ index.test.tsx
│  │  │  │  ├─ FormLabel
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ __tests__
│  │  │  │  │     └─ index.test.tsx
│  │  │  │  ├─ Link
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  └─ __tests__
│  │  │  │  │     ├─ index.test.tsx
│  │  │  │  │     └─ __snapshots__
│  │  │  │  │        └─ index.test.tsx.snap
│  │  │  │  ├─ LoadingIndicator
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ __tests__
│  │  │  │  │     ├─ index.test.tsx
│  │  │  │  │     └─ __snapshots__
│  │  │  │  │        └─ index.test.tsx.snap
│  │  │  │  ├─ NavBar
│  │  │  │  │  ├─ assets
│  │  │  │  │  │  ├─ documentation-icon.svg
│  │  │  │  │  │  └─ github-icon.svg
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ Logo.tsx
│  │  │  │  │  ├─ Nav.tsx
│  │  │  │  │  └─ __tests__
│  │  │  │  │     ├─ index.test.tsx
│  │  │  │  │     ├─ Logo.test.tsx
│  │  │  │  │     ├─ Nav.test.tsx
│  │  │  │  │     └─ __snapshots__
│  │  │  │  │        ├─ index.test.tsx.snap
│  │  │  │  │        ├─ Logo.test.tsx.snap
│  │  │  │  │        └─ Nav.test.tsx.snap
│  │  │  │  ├─ PageWrapper
│  │  │  │  │  └─ index.ts
│  │  │  │  └─ Radio
│  │  │  │     └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ pages
│  │  │  │  ├─ HomePage
│  │  │  │  │  ├─ assets
│  │  │  │  │  │  ├─ cra-logo.svg
│  │  │  │  │  │  ├─ plus-sign.svg
│  │  │  │  │  │  └─ rp-logo.svg
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ Lead.ts
│  │  │  │  │  │  ├─ P.ts
│  │  │  │  │  │  ├─ SubTitle.ts
│  │  │  │  │  │  ├─ Title.ts
│  │  │  │  │  │  └─ __tests__
│  │  │  │  │  │     ├─ Lead.test.tsx
│  │  │  │  │  │     ├─ P.test.tsx
│  │  │  │  │  │     ├─ Subtitle.test.tsx
│  │  │  │  │  │     ├─ Title.test.tsx
│  │  │  │  │  │     └─ __snapshots__
│  │  │  │  │  │        ├─ Lead.test.tsx.snap
│  │  │  │  │  │        ├─ P.test.tsx.snap
│  │  │  │  │  │        ├─ Subtitle.test.tsx.snap
│  │  │  │  │  │        └─ Title.test.tsx.snap
│  │  │  │  │  ├─ Features
│  │  │  │  │  │  ├─ assets
│  │  │  │  │  │  │  ├─ code-analysis.svg
│  │  │  │  │  │  │  ├─ css.svg
│  │  │  │  │  │  │  ├─ instant-feedback.svg
│  │  │  │  │  │  │  ├─ intl.svg
│  │  │  │  │  │  │  ├─ route.svg
│  │  │  │  │  │  │  ├─ scaffolding.svg
│  │  │  │  │  │  │  ├─ seo.svg
│  │  │  │  │  │  │  ├─ state.svg
│  │  │  │  │  │  │  └─ ts.svg
│  │  │  │  │  │  ├─ GithubRepoForm
│  │  │  │  │  │  │  ├─ assets
│  │  │  │  │  │  │  │  ├─ new-window.svg
│  │  │  │  │  │  │  │  └─ star.svg
│  │  │  │  │  │  │  ├─ components
│  │  │  │  │  │  │  │  ├─ Input.ts
│  │  │  │  │  │  │  │  ├─ TextButton.ts
│  │  │  │  │  │  │  │  └─ __tests__
│  │  │  │  │  │  │  │     ├─ input.test.tsx
│  │  │  │  │  │  │  │     └─ TextButton.test.tsx
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  ├─ RepoItem.tsx
│  │  │  │  │  │  │  ├─ slice
│  │  │  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  │  │  ├─ saga.ts
│  │  │  │  │  │  │  │  ├─ selectors.ts
│  │  │  │  │  │  │  │  ├─ types.ts
│  │  │  │  │  │  │  │  └─ __tests__
│  │  │  │  │  │  │  │     ├─ saga.test.ts
│  │  │  │  │  │  │  │     ├─ selectors.test.ts
│  │  │  │  │  │  │  │     ├─ slice.test.ts
│  │  │  │  │  │  │  │     └─ __snapshots__
│  │  │  │  │  │  │  │        └─ saga.test.ts.snap
│  │  │  │  │  │  │  └─ __tests__
│  │  │  │  │  │  │     ├─ index.test.tsx
│  │  │  │  │  │  │     ├─ RepoItem.test.tsx
│  │  │  │  │  │  │     └─ __snapshots__
│  │  │  │  │  │  │        └─ RepoItem.test.tsx.snap
│  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  ├─ LanguageSwitch
│  │  │  │  │  │  │  ├─ index.tsx
│  │  │  │  │  │  │  ├─ messages.ts
│  │  │  │  │  │  │  └─ __tests__
│  │  │  │  │  │  │     └─ index.test.tsx
│  │  │  │  │  │  └─ ThemeSwitch
│  │  │  │  │  │     ├─ index.tsx
│  │  │  │  │  │     └─ __tests__
│  │  │  │  │  │        └─ index.test.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ Loadable.tsx
│  │  │  │  │  ├─ Logos.tsx
│  │  │  │  │  ├─ Masthead.tsx
│  │  │  │  │  ├─ messages.ts
│  │  │  │  │  └─ __tests__
│  │  │  │  │     ├─ Features.test.tsx
│  │  │  │  │     ├─ index.test.tsx
│  │  │  │  │     ├─ Logos.test.tsx
│  │  │  │  │     ├─ Masthead.test.tsx
│  │  │  │  │     └─ __snapshots__
│  │  │  │  │        ├─ Features.test.tsx.snap
│  │  │  │  │        ├─ index.test.tsx.snap
│  │  │  │  │        ├─ Logos.test.tsx.snap
│  │  │  │  │        └─ Masthead.test.tsx.snap
│  │  │  │  └─ NotFoundPage
│  │  │  │     ├─ index.tsx
│  │  │  │     ├─ Loadable.tsx
│  │  │  │     ├─ P.ts
│  │  │  │     └─ __tests__
│  │  │  │        ├─ index.test.tsx
│  │  │  │        └─ __snapshots__
│  │  │  │           └─ index.test.tsx.snap
│  │  │  └─ __tests__
│  │  │     ├─ index.test.tsx
│  │  │     └─ __snapshots__
│  │  │        └─ index.test.tsx.snap
│  │  ├─ index.tsx
│  │  ├─ locales
│  │  │  ├─ de
│  │  │  │  └─ translation.json
│  │  │  ├─ en
│  │  │  │  └─ translation.json
│  │  │  ├─ i18n.ts
│  │  │  ├─ translations.ts
│  │  │  ├─ types.ts
│  │  │  └─ __tests__
│  │  │     └─ i18n.test.ts
│  │  ├─ react-app-env.d.ts
│  │  ├─ reportWebVitals.ts
│  │  ├─ setupTests.ts
│  │  ├─ store
│  │  │  ├─ configureStore.ts
│  │  │  ├─ reducers.ts
│  │  │  └─ __tests__
│  │  │     ├─ configureStore.test.ts
│  │  │     └─ reducer.test.ts
│  │  ├─ styles
│  │  │  ├─ global-styles.ts
│  │  │  ├─ media.ts
│  │  │  ├─ StyleConstants.ts
│  │  │  ├─ theme
│  │  │  │  ├─ slice
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ selectors.ts
│  │  │  │  │  ├─ types.ts
│  │  │  │  │  └─ __tests__
│  │  │  │  │     └─ slice.test.ts
│  │  │  │  ├─ styled.d.ts
│  │  │  │  ├─ ThemeProvider.tsx
│  │  │  │  ├─ themes.ts
│  │  │  │  ├─ utils.ts
│  │  │  │  └─ __tests__
│  │  │  │     ├─ ThemeProvider.test.tsx
│  │  │  │     └─ utils.test.ts
│  │  │  └─ __tests__
│  │  │     └─ media.test.ts
│  │  ├─ types
│  │  │  ├─ index.ts
│  │  │  ├─ Repo.d.ts
│  │  │  └─ RootState.ts
│  │  └─ utils
│  │     ├─ @reduxjs
│  │     │  └─ toolkit.tsx
│  │     ├─ loadable.tsx
│  │     ├─ messages.ts
│  │     ├─ redux-injectors.ts
│  │     ├─ request.ts
│  │     ├─ types
│  │     │  └─ injector-typings.ts
│  │     └─ __tests__
│  │        ├─ loadable.test.tsx
│  │        ├─ request.test.ts
│  │        └─ __snapshots__
│  │           └─ loadable.test.tsx.snap
│  ├─ template.json
│  ├─ tsconfig.json
│  └─ yarn.lock
├─ README.md
├─ yarn-error.log
└─ yarn.lock

```