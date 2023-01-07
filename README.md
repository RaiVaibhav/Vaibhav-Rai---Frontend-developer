This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## Dependencies Used

- `react-query` for caching the api promise (This avoid refetching the api and cached the promise on the basis of dependency array)
- `antd` for Select, Form and various other component
- `Next.js` (I intiliazed the app with Next.js but it wasn't need I could have simply used the CRA but still we can use the functionality like Head and other meta tags which will be used for SEO)
- `axios` for calling the API
- `typescript` for typing


## Dependencies Not Used

- No backend was created because the api - `https://api.spacexdata.com/v3/capsules` is public
- No php backend
- `redux` - Not needed as per the use case, using the functionality for `react-query` was enough as it was already caching the promise returned from the axios