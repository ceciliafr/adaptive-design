<h1>Adaptive design</h1>

This is a project made with [Next.js](https://nextjs.org/) applying adaptive design concepts with focus on how to deal internally with client side and server side calls on mobile and desktop devices.
For this, we use a middleware provided by next.js and use a context for the entire application to know which device the user is on when he calls a route in the browser.
<p><strong>Bonus: in this application we use <a href="https://beta.reactjs.org/reference/react/useContext" target="_blank">Context<a/> to style it too through the <a href="https://styled-components.com/docs/api#themeprovider" target="_blank">themeProvider<a/>.</strong></p>

## Project's goal

Be transparent to the user that if he accesses a client side or server side screen, different components would be rendered for desktop or mobile devices. As it happens on the [Amazon](https://www.amazon.com/) website, for example.

## Technologies used

<ul>
  <li><a href="https://nextjs.org/" target="_blank">Next.js</a></li>
  <li><a href="https://styled-components.com/" target="_blank">Styled-components</a></li>
  <li><a href="https://www.typescriptlang.org/" target="_blank">Typescript</a></li>
</ul>

## How to Install and Run the Project

First, install the necessary dependencies:

```bash
npm install
# or
yarn
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Getting Started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can get started by clicking the link in the navigation bar [server-side-page](http://localhost:3000/server-side-page).

<img src="https://user-images.githubusercontent.com/54898441/221442611-33ad9539-e4f9-44bc-9395-efa81ff87faf.png" width="600px"/>

After that, you can change your device using browser inspection and refresh the screen. You will notice that the URL has not changed, but its content has.

<img src="https://user-images.githubusercontent.com/54898441/221442886-d1153404-47d3-4fc6-bb02-036d2c147fa8.png" width="300px"/>

## Contributors
<h3>Cecília Fernandes de Oliveira</h3>
<ul>
  <li>Github: <a href="https://github.com/ceciliafr/" target="_blank">https://github.com/ceciliafr/</a></li>
  <li>Linkedin: <a href="https://www.linkedin.com/in/cissa-fr/" target="_blank">https://www.linkedin.com/in/cissa-fr/</a></li>
</ul>
