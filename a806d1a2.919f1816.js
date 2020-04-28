(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{197:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return l})),i.d(n,"metadata",(function(){return r})),i.d(n,"rightToc",(function(){return o})),i.d(n,"default",(function(){return b}));var t=i(1),a=i(11),p=(i(0),i(233)),l={id:"js-setup",title:"Desktop Plugin Development"},r={id:"extending/js-setup",title:"Desktop Plugin Development",description:"## Workflow",source:"@site/../docs/extending/jssetup.mdx",permalink:"/docs/extending/js-setup",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/jssetup.mdx",sidebar:"extending",previous:{title:"Publishing your Plugin",permalink:"/docs/tutorial/js-publishing"},next:{title:"Desktop Plugin API",permalink:"/docs/extending/js-plugin-api"}},o=[{value:"Workflow",id:"workflow",children:[]},{value:"Dynamically Loading Plugins",id:"dynamically-loading-plugins",children:[]},{value:"Plugin Definition",id:"plugin-definition",children:[{value:"flipper-pkg",id:"flipper-pkg",children:[]},{value:"Package Format",id:"package-format",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Transpilation",id:"transpilation",children:[]},{value:"npm dependencies",id:"npm-dependencies",children:[]}]},{value:"Migration to the new Plugin Specification",id:"migration-to-the-new-plugin-specification",children:[]},{value:"Development Build",id:"development-build",children:[]},{value:"Transpiling and Bundling",id:"transpiling-and-bundling",children:[]},{value:"Packaging and Publishing",id:"packaging-and-publishing",children:[{value:"Publishing to npm",id:"publishing-to-npm",children:[]},{value:"Packaging to File",id:"packaging-to-file",children:[]},{value:"Installation from File",id:"installation-from-file",children:[]}]}],c={rightToc:o};function b(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(t.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"workflow"},"Workflow"),Object(p.b)("p",null,"In a nutshell, the workflow for creating Flipper Desktop Plugin is the following:\n1) ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#dynamically-loading-plugins"}),"To make your custom plugins discoverable by Flipper"),", create a directory to contain them, e.g. ",Object(p.b)("inlineCode",{parentName:"p"},"~/flipper-plugins"),", and add this path to the ",Object(p.b)("inlineCode",{parentName:"p"},"pluginPaths")," property in the Flipper config (",Object(p.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),").\n2) Create a directory for your plugin inside the directory created at step 1, e.g. ",Object(p.b)("inlineCode",{parentName:"p"},"~/flipper-plugins/my-plugin"),".\n3) ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#plugin-definition"}),"Define your plugin")," in the directory created at step 2.\n4) ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#development-build"}),"Start a development build of Flipper")," which will automatically ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#transpiling-and-bundling"}),"transpile, bundle and load")," the defined plugin, as well as all other plugins found in the directories specified as ",Object(p.b)("inlineCode",{parentName:"p"},"pluginPaths")," in the Flipper config.\n5) ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"debugging"}),"Debug your plugin"),", make necessary changes and verify them in the running Flipper development build instance which will re-load the changed components automatically.\n6) If you want to be sure the plugin works as expected with a release build, you can ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#packaging-to-file"}),"package it as a tarball")," and ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#installation-from-file"}),"install it from the file system")," into a released version of Flipper.\n7) Finally, ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#publishing-to-npm"}),"bundle the plugin and publish it to npm"),", so it can be discovered and installed by any Flipper user."),Object(p.b)("h2",{id:"dynamically-loading-plugins"},"Dynamically Loading Plugins"),Object(p.b)("p",null,"Flipper loads and runs plugins it finds in a configurable location. The paths searched are specified in ",Object(p.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),". These paths, ",Object(p.b)("inlineCode",{parentName:"p"},"pluginPaths"),", should contain one folder for each of the plugins it stores. An example config setting and plugin file structure is shown below:"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),'{\n  ...,\n  "pluginPaths": ["~/flipper-plugins"]\n}\n')),Object(p.b)("p",null,"Plugin File example structure:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"~ flipper-plugins/\n    my-plugin/\n      package.json\n      src/index.tsx\n      dist/bundle.js\n")),Object(p.b)("h2",{id:"plugin-definition"},"Plugin Definition"),Object(p.b)("h3",{id:"flipper-pkg"},"flipper-pkg"),Object(p.b)("p",null,"CLI tool ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-pkg")," helps to initialize, validate, and package Flipper desktop plugins."),Object(p.b)("p",null,"The tool is published to npm and can be installed as a ",Object(p.b)("inlineCode",{parentName:"p"},"devDependency")," for the plugin package, or as a global CLI tool:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn global add flipper-pkg\n")),Object(p.b)("p",null,"or"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"npm install flipper-pkg --global\n")),Object(p.b)("h3",{id:"package-format"},"Package Format"),Object(p.b)("p",null,"All Flipper Desktop plugins must be self-contained in a directory. This directory must contain at a minimum package.json and entry source file, e.g.:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"package.json"),Object(p.b)("li",{parentName:"ul"},"src/index.tsx")),Object(p.b)("p",null,"The best way to initialize a JS plugin is to create a directory, and run ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-pkg init"),' inside it ("flipper-pkg" should be installed globally before that). It will ask few questions and initialize the plugin for you.'),Object(p.b)("p",null,"After ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-pkg init")," finished, you should have files ",Object(p.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(p.b)("inlineCode",{parentName:"p"},"src/index.tsx")," files in the directory. The first file is the plugin package manifest and the second is the entry point to your plugin. An example ",Object(p.b)("inlineCode",{parentName:"p"},"package.json")," file could look like this:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-myplugin",\n  "id": "myplugin",\n  "version": "1.0.0",\n  "main": "dist/bundle.js",\n  "flipperBundlerEntry": "src/index.tsx",\n  "license": "MIT",\n  "keywords": ["flipper-plugin"],\n  "title": "My Plugin",\n  "icon": "apps",\n  "bugs": {\n    "email": "you@example.com"\n  },\n  "scripts": {\n    "lint": "flipper-pkg lint",\n    "prepack": "flipper-pkg lint && flipper-pkg bundle"\n  }\n  "peerDependencies": {\n    "flipper": "latest"\n  },\n  "devDependencies": {\n    "flipper": "latest",\n    "flipper-pkg": "latest"\n  }\n}\n')),Object(p.b)("p",null,"Important attributes of ",Object(p.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"$schema")," must contain URI identifying scheme according to which the plugin is defined. Currently, Flipper supports plugins defined by the specification version 2 (",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://fbflipper.com/schemas/plugin-package/v2.json"}),"https://fbflipper.com/schemas/plugin-package/v2.json"),"), while version 1 is being deprecated.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"name")," Npm package name. Should start with ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-plugin-")," by convention, so Flipper plugins can be easily found on npm.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"id")," Used as the plugin native identifier and ",Object(p.b)("strong",{parentName:"p"},"must match the mobile plugin identifier"),", e.g. returned by ",Object(p.b)("inlineCode",{parentName:"p"},"getId")," method of your Java plugin.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"main"),' Points to the plugin bundle which will be loaded by Flipper. The "flipper-pkg" utility uses this field to determine output location during plugin bundling.')),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"flipperBundlerEntry"),' Points to the source entry point which will be used for plugin code bundling. "flipper-pkg" takes the path specified in ',Object(p.b)("inlineCode",{parentName:"p"},"flipperBundlerEntry")," as source, transpiles and bundles it, and saves the output to the path specified in ",Object(p.b)("inlineCode",{parentName:"p"},"main"),".")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"keywords")," The field must contain the ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-plugin")," keyword, otherwise Flipper won't discover the plugin. Additionally, the field can also contain any other keywords for better plugin discoverability.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"title")," Shown in the main sidebar as the human-readable name of the plugin.")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"icon")," Determines the plugin icon which is displayed in the main sidebar. The list of available icons is static for now: ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/master/desktop/static/icons.json"}),"https://github.com/facebook/flipper/blob/master/desktop/static/icons.json"),".")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("inlineCode",{parentName:"p"},"bugs")," Specify an email and/or url, where plugin bugs should be reported."))),Object(p.b)("p",null,"In ",Object(p.b)("inlineCode",{parentName:"p"},"index.tsx")," you will define the plugin in JavaScript. This file must export a default class that extends ",Object(p.b)("inlineCode",{parentName:"p"},"FlipperPlugin"),". Browse our ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"js-plugin-api"}),"JS API docs")," to see what you can do, and make sure to check out our ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"ui-components"}),"UI Component Library")," for lots of pre-made components."),Object(p.b)("p",null,"Example ",Object(p.b)("inlineCode",{parentName:"p"},"index.tsx"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import {FlipperPlugin} from 'flipper';\n\nexport default class extends FlipperPlugin {\n  render() {\n    return 'hello world';\n  }\n}\n")),Object(p.b)("h3",{id:"validation"},"Validation"),Object(p.b)("p",null,"Plugin definition can be validated using command ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-pkg lint"),". The command shows all the mismatches which should be fixed to make plugin definition valid."),Object(p.b)("h3",{id:"transpilation"},"Transpilation"),Object(p.b)("p",null,"Flipper has ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#transpiling-and-bundling"}),"tooling for transpiling and bundling")," which allows writing plugins in plain ES6 JavaScript, ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://flow.org/"}),"Flow")," or ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," but we recommend you use ",Object(p.b)("strong",{parentName:"p"},"TypeScript")," for the best development experience. We also recommend you use the file extension ",Object(p.b)("inlineCode",{parentName:"p"},".tsx")," when using TypeScript which adds support for inline React expressions."),Object(p.b)("h3",{id:"npm-dependencies"},"npm dependencies"),Object(p.b)("p",null,"If you need any dependencies in your plugin, you can install them using ",Object(p.b)("inlineCode",{parentName:"p"},"yarn add"),"."),Object(p.b)("h2",{id:"migration-to-the-new-plugin-specification"},"Migration to the new Plugin Specification"),Object(p.b)("p",null,"Flipper plugins are defined according to the specification. As with any specification, it is evolving, so new versions of it can be released. Currently Flipper supports plugins defined using version 2 of specification which is described in this page. Previous version of specification is being deprecated, and we encourage all the plugins still using it to migrate."),Object(p.b)("p",null,"The main difference of version 2 is that plugins are transpiled and bundled before packaging, while in version 1 this was done in run-time on plugin installation. There are no plugin API changes, so only the ",Object(p.b)("inlineCode",{parentName:"p"},"package.json")," changes are required to migrate."),Object(p.b)("p",null,"The easiest way for migration is using of command ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-pkg migrate"),". It will automatically migrate your plugin definition to the latest version."),Object(p.b)("h2",{id:"development-build"},"Development Build"),Object(p.b)("p",null,"A Flipper development build should be used for plugin debugging. It is also used for Flipper core development and provides the following features:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Automatic transpilation and bundling of loaded plugins: ES6, Flow, TypeScript, JSX."),Object(p.b)("li",{parentName:"ul"},"Automatic refresh after code changes."),Object(p.b)("li",{parentName:"ul"},"React and Redux Dev Tools."),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(t.a)({parentName:"li"},{href:"debugging"}),"Debugging")," using Chrome Dev Tools or Visual Studio Code.")),Object(p.b)("p",null,"Prerequisites for Flipper development build:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"node \u2265 8"),Object(p.b)("li",{parentName:"ul"},"yarn \u2265 1.5"),Object(p.b)("li",{parentName:"ul"},"git"),Object(p.b)("li",{parentName:"ul"},"watchman")),Object(p.b)("p",null,"To start a development build, clone the Flipper repository, install the dependencies and execute the ",Object(p.b)("inlineCode",{parentName:"p"},"start")," script:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"git clone https://github.com/facebook/flipper.git\ncd flipper/desktop\nyarn\nyarn start\n")),Object(p.b)("h2",{id:"transpiling-and-bundling"},"Transpiling and Bundling"),Object(p.b)("p",null,"As we already mentioned, the ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#development-build"}),"Flipper development build")," automatically transpiles and bundles plugins on loading. It is capable of all the ES6 goodness, Flow annotations, TypeScript, as well as JSX and applies the required babel-transforms."),Object(p.b)("p",null,"The Flipper release build, in contrast, does not transpile or bundle plugins on loading. For production usage, plugins should be ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#packaging-and-publishing"}),"bundled before publishing")," using ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://classic.yarnpkg.com/en/package/flipper-pkg"}),"flipper-pkg"),". This utility applies the same modifications as the plugin loader of the development build."),Object(p.b)("p",null,"The tool is published to npm and can be installed as a ",Object(p.b)("inlineCode",{parentName:"p"},"devDependency")," for the plugin package, or as a global CLI tool:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn global add flipper-pkg\n")),Object(p.b)("p",null,"Then, to bundle the plugin, execute the following command in its folder:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"flipper-pkg bundle\n")),Object(p.b)("p",null,"This command reads the ",Object(p.b)("inlineCode",{parentName:"p"},"package.json"),", takes the path specified in the ",Object(p.b)("inlineCode",{parentName:"p"},"flipperBundleEntry")," field as entry point, transpiles and bundles all the required code, and outputs the produced bundle to the path specified in field ",Object(p.b)("inlineCode",{parentName:"p"},"main"),"."),Object(p.b)("p",null,"You can get the list of other available commands by invoking ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-pkg help"),", and get detailed description for any command by invoking ",Object(p.b)("inlineCode",{parentName:"p"},"flipper-pkg help [COMMAND]"),". You can also check README on npmjs.com for usage details: ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/flipper-pkg"}),"https://www.npmjs.com/package/flipper-pkg"),"."),Object(p.b)("h2",{id:"packaging-and-publishing"},"Packaging and Publishing"),Object(p.b)("h3",{id:"publishing-to-npm"},"Publishing to npm"),Object(p.b)("p",null,"Flipper plugins are essentially standard npm packages. So you can publish them by executing ",Object(p.b)("inlineCode",{parentName:"p"},"yarn publish")," or ",Object(p.b)("inlineCode",{parentName:"p"},"npm publish")," in the plugin directory. The only requirements are:\n1) ",Object(p.b)("inlineCode",{parentName:"p"},"package.json")," and code ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"#plugin-definition"}),"must follow the Flipper plugin specification"),'\n2) code must be bundled using "flipper-pkg" before packing or publishing. This can be done by executing ',Object(p.b)("inlineCode",{parentName:"p"},"flipper-pkg bundle")," on ",Object(p.b)("inlineCode",{parentName:"p"},"prepack")," step:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),'```\n{\n  ...\n  "devDependencies": {\n    ...\n    "flipper-pkg": "latest"\n  },\n  "scripts": {\n    ...\n    "prepack": "flipper-pkg bundle"\n  }\n}\n```\n')),Object(p.b)("h3",{id:"packaging-to-file"},"Packaging to File"),Object(p.b)("p",null,"To package plugin as a tarball, you can use the same command as for packaging any other npm package, e.g. ",Object(p.b)("inlineCode",{parentName:"p"},"yarn pack")," or ",Object(p.b)("inlineCode",{parentName:"p"},"npm pack"),"."),Object(p.b)("p",null,'"flipper-pkg" also provides a convenient command ',Object(p.b)("inlineCode",{parentName:"p"},"pack")," which:\n1) Installs the plugin dependencies\n2) Bundles the plugin\n3) Creates the tarball and saves it at the specified location"),Object(p.b)("p",null,"E.g. to package plugin located at ",Object(p.b)("inlineCode",{parentName:"p"},"~/flipper-plugins/my-plugin")," to ",Object(p.b)("inlineCode",{parentName:"p"},"~/Desktop"),", execute the following command:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"flipper-pkg pack ~/flipper-plugins/my-plugin -o ~/Desktop\n")),Object(p.b)("h3",{id:"installation-from-file"},"Installation from File"),Object(p.b)("p",null,'It is possible to install plugins into Flipper from tarballs. This is useful in cases when you need to try a plugin version which is not published to npm, or if you want to distribute plugin privately:\n1) Launch Flipper\n2) Click the "Manage Plugins" button in the bottom-left corner\n3) Select the "Install Plugins" tab in the opened sheet\n4) Specify the path to the plugin package (or just drag and drop it) and click "Install"'))}b.isMDXComponent=!0},233:function(e,n,i){"use strict";i.d(n,"a",(function(){return s})),i.d(n,"b",(function(){return g}));var t=i(0),a=i.n(t);function p(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){p(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)i=p[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)i=p[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):r({},n,{},e)),i},s=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(t.forwardRef)((function(e,n){var i=e.components,t=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=b(i),u=t,g=s["".concat(l,".").concat(u)]||s[u]||d[u]||p;return i?a.a.createElement(g,r({ref:n},c,{components:i})):a.a.createElement(g,r({ref:n},c))}));function g(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var p=i.length,l=new Array(p);l[0]=u;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:t,l[1]=r;for(var c=2;c<p;c++)l[c]=i[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);