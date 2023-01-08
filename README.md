This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
## Tools Used

- `react-query` for caching the api promise (This avoid refetching the api and cached the promise on the basis of dependency array)
- `antd` for Select, Form and various other component
- `Next.js` (I intiliazed the app with Next.js but it wasn't need I could have simply used the CRA but still we can use the functionality like Head and other meta tags which will be used for SEO)
- `axios` for calling the API
- `typescript` for typing

## Dependencies Not Used

- No backend was created because the api - `https://api.spacexdata.com/v3/capsules` is public
- No php backend
- `redux` - Not needed as per the use case, using the functionality for `react-query` was enough as it was already caching the promise returned from the axios

## Design challenge

### Pagination

Even though Api (`https://api.spacexdata.com/v3/capsules`) have a output control querystring, but the response data doesn't tell anything about the total data length and it became immpossible to figure out the total no. of pages.

To over come this problem I used the load more functionality, considering the time constraint it was hard to optimize it and a virtual scrolling.

### Depcreated API
Api (`https://api.spacexdata.com/v3/capsules`) v3 is deprecated in place of v4, reason of using v3 is because of the API Doc which doesn't exists for the v4


## Best Part

I really like the way I added the blur effect on the spacex logo, to achive it I stacked the same spacex logo on top and on back using absolute positioning and then I blurred the element which on the back.

## What I missed

- Test for the various component
- Authorization (Decided not to as per the time contraint)