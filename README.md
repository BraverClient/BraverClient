#  ![333096271-9d48f394-eb5b-45a5-867b-aedff0d0c490](https://github.com/BraverClient/HelloWorld/assets/93947784/f9ab041a-8917-4ff6-8b3e-fca7c08d6f16)***`BraverClient`***
# ***[Azure](https://github.com/BraverClient/Azure)***
# ***[Teknoloji.Tech Uninvented Technology](https://teknoloji.tech)***
# ***[Json Schema CodesExe.com Kod Dosyaları](http://codesexe.com)***
# ***[MyComputer.Digital Markdown, Blog, Microsoft Word Start](https://mycomputer.digital/Fast-pages/)***
# ***[JavaScriptTemplate Template Start](https://braverclient.github.io/JavaScript/)***
# ***[Reveal js. Preparing HTML Presentation](https://braverclient.github.io/reveal.js/)***
# ***[İmgBot İmage Bot Business İmage, İcon](https://braverclient.github.io/imgBot/)***
# ***[KaTeX Tex Maths JavaScript library](https://braverclient.github.io/KaTeX/)***
# ***[Matlab Run Command Prompt](https://braverclient.github.io/run-command/)***
# ***[Feedback Novu  email, sms, push, direc](https://braverclient.github.io/novu/)***
# ***[JavaScript Style Web Desing](https://braverclient.github.io/standard-16.0.4/)***
# ***[StarTeknoloji.Space Local Host Service](https://tdljt22b-4000.euw.devtunnels.ms)***
# ***[BirLiraci.com Online Shopping Web Service (yapılandırılmaktadır)](https://birliraci.com)***

<iframe src="https://discord.com/widget?id=1007605187197800530&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
<iframe src="https://discord.com/widget?id=1124268216408096914&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> 


# ms

[![Build Status](https://travis-ci.org/zeit/ms.svg?branch=master)](https://travis-ci.org/zeit/ms)
[![Slack Channel](http://zeit-slackin.now.sh/badge.svg)](https://zeit.chat/)

Use this package to easily convert various time formats to milliseconds.

## Examples

```js
ms('2 days')  // 172800000
ms('1d')      // 86400000
ms('10h')     // 36000000
ms('2.5 hrs') // 9000000
ms('2h')      // 7200000
ms('1m')      // 60000
ms('5s')      // 5000
ms('1y')      // 31557600000
ms('100')     // 100
```

### Convert from milliseconds

```js
ms(60000)             // "1m"
ms(2 * 60000)         // "2m"
ms(ms('10 hours'))    // "10h"
```

### Time format written-out

```js
ms(60000, { long: true })             // "1 minute"
ms(2 * 60000, { long: true })         // "2 minutes"
ms(ms('10 hours'), { long: true })    // "10 hours"
```

## Features

- Works both in [node](https://nodejs.org) and in the browser.
- If a number is supplied to `ms`, a string with a unit is returned.
- If a string that contains the number is supplied, it returns it as a number (e.g.: it returns `100` for `'100'`).
- If you pass a string with a number and a valid unit, the number of equivalent ms is returned.

## Caught a bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the module you want to test your local development instance of ms, just link it to the dependencies: `npm link ms`. Instead of the default one from npm, node will now use your clone of ms!

As always, you can run the tests using: `npm test`
