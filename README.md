# Svelte issue

[`Issue 3052`](https://github.com/sveltejs/kit/issues/3052);


```bash
npm install


npm run dev -- --open
```


First what works:
go to: http://localhost:3000/
click go to server
then click go to library
==> in the console you only see "INIT LAYOUT SERVER toto" once


now start your navigation at 'http://localhost:3000/server/toto' (refresh once at this url to make sure you are starting here
click go to library
you can now see in the console that 'INIT LAYOUT SERVER toto' is printed twice