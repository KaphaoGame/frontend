## ชื่อกลุ่ม
- Kaphao Game

## ชื่อระบบ
- เว็บรีวิวเกม

## ชื่อและรหัสนิสิต
- 6110402818 นายปริวัตร มากเทพวงศ์ (Member)
- 6110406279 นายอิศม์เดช พงศภัคไพบูลย์ (Member)
- 6110406201 นายวัชริศ สายพิมพ์ (Member)
- 6110406139 นายพิชญ์ทัช ศิริพรโภคา (Member)
- 6110406121 นายพันธุ์ธิชชัย   ขรรค์บริวาร (SE Project Collaborator)
- 6110400106 นายณัฐวรรธน์  สุนทรเสถียรกุล (SE Project Collaborator)
##### หมายเหตุ SE Project Collaborator ไม่ได้เป็นสมาชิกกลุ่มในวิชา Web Tech 

## ฟังก์ชันการทำงานของระบบ
- เว็บรวมคะแนนรีวิวของเกมแต่ละเกม
- มีระบบให้ผู้ใช้เพิ่มรีวิวของตัวเองในแต่ละเกม
- มีระบบโปรไฟล์ผู้ใช้
- มีระบบค้นหาเกมที่ต้องการ


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##เงื่อนไขอื่นที่ผู้ร่วมพัฒนาหรือผู้ติดตั้งระบบจำเป็นต้องทราบ
- การพัฒนาหลักๆจะทำใน branch develop เท่านั้น และจะ merge ลง branch master เมื่อสมบูรณ์แล้วเท่านั้น โดยมีคนจัดการหลักคือ 6110406121 นายพันธุ์ธิชชัย   ขรรค์บริวาร (SE Project Collaborator)
- แต่ละคนสามารถสร้าง branch ของตัวเองเพื่อทดลองได้

# Application structure

```
├─ src
├── api
├── assets
|   └─ static file
├── components
│   ├─ ResusableComponentA
│   |   ├─ index.js
│   |   ├─ ReusableComponentA.vue
│  	|	└─ ReusableComponentA.spec.js
|   └─ ResusableComponentB
|       ├─ index.js
|       └─ ReusableComponentB.vue
|       
├── routes
│   └─ index.js
├── views
├── main.js
├── App.vue
```

**API Directory**

The `api` directory contains application programing interface.

**Assets Directory**

The `assets` directory contains un-compiled assets.

**Components Directory**

The `components` directory contains all reusable Vue.js Components.

**Router Directory**

The `router` directory contains application routes.

**Views Directory**

The `views` directory contains application views.


# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
