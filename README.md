# NextJS Auth Example 10

## Creation History

The code in this repo is base on the following:

- https://youtu.be/QOs90qxEpcc?si=xYL824tf0rwurMhL

## Code History

```bash
npx create-next-app@latest
cd nextjs-auth-ex10
npm install next-auth@beta
npx auth secret # remove .local from .env.local for drizzle
npm install drizzle-orm @auth/drizzle-adapter --force # --force solve error
npm install drizzle-kit --save-dev
npm i postgres
npx drizzle-kit push
npx drizzle-kit studio
```
