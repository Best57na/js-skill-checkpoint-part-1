// Question #5
// สมมุติว่ามี Variable products ที่บรรจุข้อมูลสินค้าในตะกร้าสินค้า และ Variable promotionCode ที่บรรจุ String โค้ดส่วนลด
// const products = [
//     {
//         name: 'เสื้อยืด',
//         price: 10,
//         quantity: 2
//     },
//     {
//         name: 'กางเกงยีนส์',
//         price: 5,
//         quantity: 3
//     },
//     {
//         name: 'เสื้อเชิ้ต',
//         price: 10,
//         quantity: 5
//     }
// ];

// const promotionCode = "";
// - ให้เขียนฟังก์ชันชื่อ `calculateTotalPrice` ที่รับ `products` และ `promotionCode` เป็น Argument
// - โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้
// โค้ดส่วนลด	ส่วนลด
// "SALE20"	ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า
// "SALE50"	ลด 50% จากมูลค่ารวมของสินค้าในตะกร้า
// ไม่มี	ไม่ได้รับส่วนลด
// - ตัวอย่างเช่น
//     - ถ้า `promotionCode` มีค่าเป็น `""` ฟังก์ชันจะ Return ค่า `85`
//     - ถ้า `promotionCode` มีค่าเป็น `"SALE20"` ฟังก์ชันจะ Return ค่า `68`
//     - ถ้า `promotionCode` มีค่าเป็น `"SALE50"` ฟังก์ชันจะ Return ค่า `42.5`
/*
a. การแสดงผลลัพธ์
ิb. การกำหนดค่า
c. การบวก/ลบ/คูณ/หาร
d. การเปรียบเทียบ
e. การดำเนินการทางตรรกะ
f. If-Else
g. Loops
ข้อนี้ใช้ : a, b, c, g, f
*/
/*
วิธีการ
1. เขียน function calculateTotalPrice
2. กำหนด sum = 0
3. เขียน loop เพื่อเข้าถึงทุก object ใน array เพื่อรวมผล sum
4. If-Else เช็คว่าเป็น promotion อะไร
   20% : return ราคา sum ที่ได้มาลบส่วนลด 20% ออก
   50% : return ราคา sum ที่ได้มาลบส่วนลด 50% ออก
   ไม่มี : return ราคา sum
*/

const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products) {
  let sum = 0;
  for (let item of products) {
    sum += item.price * item.quantity
  };
  if (promotionCode === "SALE20") {
    return sum - (sum * 0.2);
  } else if ((promotionCode === "SALE50")) {
    return sum - (sum * 0.5);
  } else {
    return sum;
  };
};

console.log(calculateTotalPrice(products));