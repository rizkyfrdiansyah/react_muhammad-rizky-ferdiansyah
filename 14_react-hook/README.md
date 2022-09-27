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

Membuat Hook Kita sendiri memungkinkan Kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.
