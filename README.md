# Universally Unique Identifier
[heading__top]:
  #universally-unique-identifier
  "&#x2B06; Extends `String` to build UUIDs that are truly unique for current scope"


Extends `String` to build UUIDs that are truly unique for current scope


## [![Byte size of Universally Unique Identifier][badge__main__universally_unique_identifier__source_code]][universally_unique_identifier__main__source_code] [![Open Issues][badge__issues__universally_unique_identifier]][issues__universally_unique_identifier] [![Open Pull Requests][badge__pull_requests__universally_unique_identifier]][pull_requests__universally_unique_identifier] [![Latest commits][badge__commits__universally_unique_identifier__main]][commits__universally_unique_identifier__main] [![Build Status][badge_travis_ci]][build_travis_ci]


---


- [&#x2B06; Top of Document][heading__top]

- [:building_construction: Requirements][heading__requirements]

- [:zap: Quick Start][heading__quick_start]

  - [:memo: Edit Your ReadMe File][heading__your_readme_file]
  - [:floppy_disk: Commit and Push][heading__commit_and_push]

- [&#x1F9F0; Usage][heading__usage]

  - [NodeJS Examples][heading__nodejs_examples]
  - [Web Application Example][heading__web_application_example]

- [&#x1F523; API][heading__api]

  - [Class `Universally_Unique_Identifier`][heading__class_universally_unique_identifier]
    - [Static Property `Universally_Unique_Identifier.generated_uuids`][heading__static_property_universally_unique_identifiergenerated_uuids]
    - [Method `Universally_Unique_Identifier.constructor`][heading__method_universally_unique_identifierconstructor]

- [&#x1F5D2; Notes][heading__notes]

- [:chart_with_upwards_trend: Contributing][heading__contributing]

  - [:trident: Forking][heading__forking]
  - [:currency_exchange: Sponsor][heading__sponsor]

- [:card_index: Attribution][heading__attribution]

- [:balance_scale: Licensing][heading__license]


---



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


NodeJS dependencies may be installed via NPM...


```Bash
npm install
```


**Notice** as of version `0.0.1` NodeJS dependencies are for **development only**, ie. if utilizing this project within other applications or as a submodule, then no dependencies are required.


______


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."


NodeJS projects may use `npm` to install `universally-unique-identifier` as a dependency...


```Bash
npm install universally-unique-identifier
```


... or as a development dependency via `--save-dev` command-line flag...


```Bash
npm install --save-dev universally-unique-identifier
```


... Check [NodeJS Examples][heading__nodejs_examples] for details on how to import this project within your own source code.


---


Web projects, such has those hosted on GitHub Pages, are encouraged to utilize Git Submodules instead...


**Bash Variables**


```Bash
_module_name='universally-unique-identifier'
_module_https_url="https://github.com/javascript-utilities/universally-unique-identifier.git"
_module_base_dir='assets/javascript/modules'
_module_path="${_module_base_dir}/${_module_name}"
```


**Bash Submodule Commands**


```Bash
cd "<your-git-project-path>"

git checkout gh-pages
mkdir -vp "${_module_base_dir}"

git submodule add -b main\
                  --name "${_module_name}"\
                  "${_module_https_url}"\
                  "${_module_path}"
```


---


### Your ReadMe File
[heading__your_readme_file]:
  #your-readme-file
  "&#x1F4DD; Suggested additions for your ReadMe.md file so everyone has a good time with submodules"


Suggested additions for your _`ReadMe.md`_ file so everyone has a good time with submodules


```MarkDown
Clone with the following to avoid incomplete downloads


    git clone --recurse-submodules <url-for-your-project>


Update/upgrade submodules via


    git submodule update --init --merge --recursive
```


### Commit and Push
[heading__commit_and_push]:
  #commit-and-push
  "&#x1F4BE; It may be just this easy..."


```Bash
git add .gitmodules
git add "${_module_path}"


## Add any changed files too


git commit -F- <<'EOF'
:heavy_plus_sign: Adds `javascript-utilities/universally-unique-identifier#1` submodule



**Additions**


- `.gitmodules`, tracks submodules AKA Git within Git _fanciness_

- `README.md`, updates installation and updating guidance

- `_modules_/universally-unique-identifier`, Extends `String` to build UUIDs that are truly unique for current scope
EOF


git push origin gh-pages
```


**:tada: Excellent :tada:** your project is now ready to begin unitizing code from this repository!


______


## Usage
[heading__usage]:
  #usage
  "&#x1F9F0; How to utilize this repository"



> Examples on how to utilize this repository


---


### NodeJS Examples
[heading__nodejs_examples]: #nodejs-examples


```JavaScript
#!/usr/bin/env node


'use strict';


const { Universally_Unique_Identifier } = require('universally-unique-identifier');


const uuid_one = new Universally_Unique_Identifier();
const uuid_two = new Universally_Unique_Identifier();


console.log(`uuid_one -> ${uuid_one}`);
//> uuid_one -> 5340a411-e6f7-4afa-8b99-d3f0f6688a5e

console.log(`uuid_two -> ${uuid_two}`);
//> uuid_two -> c271d4f0-9b47-4736-a787-7ba6c4932661

console.assert(uuid_one.toString() !== uuid_two.toString());
```


---


### Web Application Example
[heading__web_application_example]: #web-application-example


**`index.html`**


```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Example Universally Unique Identifier</title>
    <script src="/assets/javascript/universally-unique-identifier.js" defer></script>
    <script src="/assets/javascript/index.js" defer></script>
    <style>
      #text__output {
        resize: horizontal;
        min-width: 20em;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <input id="text__output" type="text" readonly>
    <br>
    <input id="button__new_uuid" type="button" value="Click for UUID">
  </body>
</html>
```


**`/assets/javascript/index.js`**


```JavaScript
'use strict';


window.addEventListener('load', () => {
  const text__output = document.getElementById('text__output');
  const button__new_uuid = document.getElementById('button__new_uuid');

  button__new_uuid.addEventListener('click', () => {
    const uuid = new Universally_Unique_Identifier();
    text__output.value = uuid.toString();
  });
});
```


______


## API
[heading__api]:
  #api
  "&#x1F523; Documentation for classes, methods, paramaters, and custom types/data-structures"


> Documentation for classes, methods, paramaters, and custom types/data-structures


---


### Class `Universally_Unique_Identifier`
[heading__class_universally_unique_identifier]:
  #class-universally_unique_identifier
  "Extends `String` to build UUIDs that are truly unique for current scope"


Extends `String` to build UUIDs that are truly unique for current scope


**Example**


```JavaScript
const uuid_one = new Universally_Unique_Identifier();
const uuid_two = new Universally_Unique_Identifier();

console.log(`uuid_one -> ${uuid_one}`);
//> uuid_one -> 5340a411-e6f7-4afa-8b99-d3f0f6688a5e

console.log(`uuid_two -> ${uuid_two}`);
//> uuid_two -> c271d4f0-9b47-4736-a787-7ba6c4932661

console.assert(uuid_one.toString() !== uuid_two.toString());
```


#### Static Property `Universally_Unique_Identifier.generated_uuids`
[heading__static_property_universally_unique_identifiergenerated_uuids]:
  #static-property-universally_unique_identifiergenerated_uuids
  "Scope storage of all UUIDs generated by class instances&#10;&#10;string[]"


Scope storage of all UUIDs generated by class instances


#### Method `Universally_Unique_Identifier.constructor`
[heading__method_universally_unique_identifierconstructor]:
  #method-universally_unique_identifierconstructor
  "Gross hack of `super` call with closure-like arrow function"


Gross hack of `super` call with closure-like arrow function


**Notes**


- `super` cannot reference `this`

- `super` must proceed any `this.__prop__` assignments


______


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


**Warning** due to how the `Universally_Unique_Identifier` class guaranties that IDs are unique for a given scope, it may run slower as more UUIDs are generated.


This repository may not be feature complete and/or fully functional, Pull Requests that add features or fix bugs are certainly welcomed.


______


## Contributing
[heading__contributing]:
  #contributing
  "&#x1F4C8; Options for contributing to universally-unique-identifier and javascript-utilities"


Options for contributing to universally-unique-identifier and javascript-utilities


---


### Forking
[heading__forking]:
  #forking
  "&#x1F531; Tips for forking universally-unique-identifier"


Start making a [Fork][universally_unique_identifier__fork_it] of this repository to an account that you have write permissions for.


- Add remote for fork URL. The URL syntax is _`git@github.com:<NAME>/<REPO>.git`_...


```Bash
cd ~/git/hub/javascript-utilities/universally-unique-identifier

git remote add fork git@github.com:<NAME>/universally-unique-identifier.git
```


- Commit your changes and push to your fork, eg. to fix an issue...


```Bash
cd ~/git/hub/javascript-utilities/universally-unique-identifier


git commit -F- <<'EOF'
:bug: Fixes #42 Issue


**Edits**


- `<SCRIPT-NAME>` script, fixes some bug reported in issue
EOF


git push fork main
```


> Note, the `-u` option may be used to set `fork` as the default remote, eg. _`git push -u fork main`_ however, this will also default the `fork` remote for pulling from too! Meaning that pulling updates from `origin` must be done explicitly, eg. _`git pull origin main`_


- Then on GitHub submit a Pull Request through the Web-UI, the URL syntax is _`https://github.com/<NAME>/<REPO>/pull/new/<BRANCH>`_


> Note; to decrease the chances of your Pull Request needing modifications before being accepted, please check the [dot-github](https://github.com/javascript-utilities/.github) repository for detailed contributing guidelines.


---


### Sponsor
  [heading__sponsor]:
  #sponsor
  "&#x1F4B1; Methods for financially supporting javascript-utilities that maintains universally-unique-identifier"


Thanks for even considering it!


Via Liberapay you may <sub>[![sponsor__shields_io__liberapay]][sponsor__link__liberapay]</sub> on a repeating basis.


Regardless of if you're able to financially support projects such as universally-unique-identifier that javascript-utilities maintains, please consider sharing projects that are useful with others, because one of the goals of maintaining Open Source repositories is to provide value to the community.


______


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)

- [StackOverflow -- How to create a GUID / UUID](https://stackoverflow.com/questions/105034/)

- [Wikipidea -- Universally unique identifier -- Version 4 (random)](https://wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random))

- [Web Masters -- How do I open the JavaScript console in different browsers?](https://webmasters.stackexchange.com/questions/8525/)


______


## License
[heading__license]:
  #license
  "&#x2696; Legal side of Open Source"


```
Extends `String` to build UUIDs that are truly unique for current scope
Copyright (C) 2021 S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```


For further details review full length version of [AGPL-3.0][branch__current__license] License.



[branch__current__license]:
  /LICENSE
  "&#x2696; Full length version of AGPL-3.0 License"


[badge__commits__universally_unique_identifier__main]:
  https://img.shields.io/github/last-commit/javascript-utilities/universally-unique-identifier/main.svg

[commits__universally_unique_identifier__main]:
  https://github.com/javascript-utilities/universally-unique-identifier/commits/main
  "&#x1F4DD; History of changes on this branch"


[universally_unique_identifier__community]:
  https://github.com/javascript-utilities/universally-unique-identifier/community
  "&#x1F331; Dedicated to functioning code"


[issues__universally_unique_identifier]:
  https://github.com/javascript-utilities/universally-unique-identifier/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[universally_unique_identifier__fork_it]:
  https://github.com/javascript-utilities/universally-unique-identifier/
  "&#x1F531; Fork it!"

[pull_requests__universally_unique_identifier]:
  https://github.com/javascript-utilities/universally-unique-identifier/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[universally_unique_identifier__main__source_code]:
  https://github.com/javascript-utilities/universally-unique-identifier/
  "&#x2328; Project source!"

[badge__issues__universally_unique_identifier]:
  https://img.shields.io/github/issues/javascript-utilities/universally-unique-identifier.svg

[badge__pull_requests__universally_unique_identifier]:
  https://img.shields.io/github/issues-pr/javascript-utilities/universally-unique-identifier.svg

[badge__main__universally_unique_identifier__source_code]:
  https://img.shields.io/github/repo-size/javascript-utilities/universally-unique-identifier


[badge_travis_ci]:
  https://travis-ci.com/javascript-utilities/universally-unique-identifier.svg?branch=main

[build_travis_ci]:
  https://travis-ci.com/javascript-utilities/universally-unique-identifier


[sponsor__shields_io__liberapay]:
  https://img.shields.io/static/v1?logo=liberapay&label=Sponsor&message=javascript-utilities

[sponsor__link__liberapay]:
  https://liberapay.com/javascript-utilities
  "&#x1F4B1; Sponsor developments and projects that javascript-utilities maintains via Liberapay"

