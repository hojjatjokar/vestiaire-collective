## I - Development

### 1. User is coming from an Off-White promotion offer link, display only the Off-White's products with a reduced price of 10%.

To demonstrate this you should add `?brand=Off-White` to query parameters.

## 2. Louis Vuitton doesn't want us to display the name of their brand on our website, could you reverse the name of the brand for each LV product to obfuscate their name ?


## 3. I'm a user from UK and I want to see product between 1500€ and 500€, ordered from the cheaper to the most expensive that are shippable to my country.

## 4. We want to display how many days/month/year since each products has been deposited on the website (ie: Deposited 1month and 3days ago)

## II - Questions

There are no wrong answers, only good opportunities to learn something new.

### 1. What metrics are essential in term of Speed ?
- First Input Delay
- Largest Contentful Paint
- Cumulative Layout Shift

### 2. Can you name ways to increase speed (perceived or actual load time) ?

Build time: Tree Shaking, optimize bundle size, Minifying, Static rendering
Serving time: Cache, CDN
Runtime: Lazyload, avoid un-necessary re-renders and re-flows
Implementation: Memozation, avoid repetition, optimal algorithms, optimal css selectors and properties

(In case of SSR implementation optimization will count)

### 3. Could you tell me what are SSR, pre-rendering and Dynamic rendering ?
Pre-rendering: When we serve a static html that we have created ahead then after loading js it can be interactive. but bots will see just the first static html 

Dynamic rendering: where we serve different files for bots and real users

SSR: Where we render specifically for each user or bot
### 4. You have a bug to fix, you find the file(s) where the bug occurs, the code is a mess, what do you do ?

Most of the times I take TDD opproach to find out what the code doing and make sure not break it while refactoring.

### 5. What represent FrontEnd to you ?

Where we try to provide a nice experince using our user interface of products to users.

### 6. What was the last technical challenge you faced and how you did you handle it ?
Reducing bundle size of a project with 1.5gb repo size. It's an ongoaing challenge where currently I'm refacotring to replace large packages with optimal solutions 
### 7. What is the next language/framework/stack you want to learn this year and why ?

Currently I'm learning more about solid.js, web assembly, micro front end.

Because they look promising, a lot of opportunity in feature, performance wise.
## III - Extra Time

In case you want to have fun 

1. Could you implement the function resolveSudoku() ?