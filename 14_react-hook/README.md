# SECTION 14_REACT HOOK

Pada section ini terdapat 3 point yaitu :

1. React Hook
2. Implementasi useState & useEffect di Component
3. Custom Hooks

## APA ITU REACT HOOKS ?

Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

## OUTLINE

- Motivasi

  - Kesulitan untuk menggunakan kembali stateful logic antar komponen
  - Komponen kompleks menjadi sulit untuk dimengerti
  - Kelas membingungkan manusia dan mesin

- Hooks pada react

  - Hooks dasar

    - useState
    - useEffect
    - useContext

  - Hooks Tambahan
    - useReducer
    - useCallback
    - useMemo
    - useRef
    - useImperativeHandle
    - useLayoutEffect
    - useDebugValue

- Aturan pada hooks

  - Hanya Panggil Hooks di Tingkat Atas
    Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions

  - Hanya Panggil Hooks dari Fungsi-Fungsi React
    Jangan memanggil Hooks dari fungsi-fungsi JavaScript biasa.
    Kita dapat:

* Memanggil Hooks dari komponen-komponen fungsi React.
* Memanggil Hooks dari custom Hooks

---

## Implementasi useState & useEffect di Component

## Menggunakan useState

- Function Component
- Implementasi hooks
- Deklarasi variable state
- Membaca State
- Melakukan pembaruan State
- Menggunakan Banyak Variabel State

## Menggunakan useEffect

`useEffect`

- Effect Hook memungkinkan kita melakukan efek samping (side effects) di dalam function component
- componentDidMount, componentDidUpdate, dan componentWillUnmount ≈ useEffect
- Ada dua jenis : Butuh pembersihan dan tidak butuh pembersihan
- Efek tanpa pembersihan
- Efek dengan pembersihan
- Mengoptimalkan Perfirma dengan Melewati Effects

---

## Custom Hooks

## Membuat Hook Kita sendiri memungkinkan Kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
