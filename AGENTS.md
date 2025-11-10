## 0. ข้อกำหนดสำคัญ - Node.js Version

**⚠️ คำสั่งบังคับ: โปรเจคนี้ต้องใช้ Node.js version 20.19.3 เท่านั้น**

เมื่อต้องการรัน `pnpm run dev` หรือ `pnpm run build` ต้องใช้คำสั่งนี้เสมอ:

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use 20.19.3 && pnpm run dev
```

หรือสำหรับ build:

```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm use 20.19.3 && pnpm run build
```

**เหตุผล:** Vite 7.2.2 ต้องการ Node.js version 20.19+ หรือ 22.12+ เท่านั้น หากใช้ Node version ต่ำกว่า จะเกิด error `crypto.hash is not a function`

## 1. Setup project

- setup React project + tailwind ผ่าน AI (โดยใช้ url กำกับ)

```
Setup project React ด้วย Vite โดย follow ตาม Document url นี้ https://vite.dev/guide/ (โปรดอ่าน url ด้วย) โดยให้สร้างภายใน folder นี้ ห้ามสร้าง folder ใหม่
```

- setup tailwind

```
Setup tailwind ด้วยวิธีของ Vite + Tailwind (tab: Using Vite) โดย follow ตาม Document url นี้ https://tailwindcss.com/docs/installation/using-vite (โปรดอ่าน url ด้วย)
```

## 2. convert component จาก vue component มาเป็น React component

```
จงแปลง Vue Component ด้านล่างนี้ เป็น React Component ชื่อ `components/Payment.jsx` และ import มาใช้ในหน้า `App.jsx`

...<code vue component>...
```

## 3. ทำหน้าใหม่โดยใช้ design token ที่กำหนดไว้ (เพื่อให้ได้ style เหมือนกัน)

- copy `workshop-3/specs/index.css` ไปไว้ตำแหน่ง `src/index.css`

```
เปลี่ยน style หน้า `App.jsx` ให้ follow ตาม design token ไฟล์ `src/index.css`
```

- ปรับ design ตาม UI (ใช้ file `workshop-3/specs/design/example.png`)

```
ปรับ design หน้า App.jsx follow ตาม UI file ที่ upload design นี้
```

## 4. เพิ่ม Storybook เพื่อกำหนด Specs ของ Frontend Component

- setup storybook

```
Setup storybook ด้วยวิธีของ Vite โดย follow ตาม Document url นี้ https://storybook.js.org/docs/get-started/frameworks/react-vite (โปรดอ่าน url ด้วย)

และเพิ่ม `Payment.stories.js` สำหรับ specs ของ Payment Component
```

## 5. เพิ่ม convert vue component

ให้ convert vue component จาก file นี้
https://github.com/mikelopster/kbtg-ai-workshop-nov/blob/main/workshop-3/specs/components/Payment.vue

import เข้ามาใน project react นี้ให้ถูกต้อง พร้อมเรียกใช้ที่หน้า App.jsx ด้วย
