// Question #2
// สมมุติว่ามี Variable inventory ที่บรรจุข้อมูลสินค้า เช่น ราคาสินค้า (price) และจำนวนสินค้าในคลังสินค้า (quantity) ซึ่งมีโครงสร้างข้อมูลดังนี้
// const inventory = [
//   { name: "Apple", price: 35, quantity: 100 },
// 	 { name: "Banana", price: 10, quantity: 50 },
// ];
// - ให้เขียนโปรแกรมดังนี้
//     1) ให้แก้ไขจำนวนสินค้า “Apple” จาก `100` เป็น `200`
//     2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา `20` บาท และมีจำนวน `300` ชิ้นในสต็อก
//     3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
// - ผลลัพธ์ของโปรแกรมควรจะแสดงออกมาทางหน้าจอ Console แบบนี้
// มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก 13500 บาท

/*
a. การแสดงผลลัพธ์
ิb. การกำหนดค่า
c. การบวก/ลบ/คูณ/หาร
d. การเปรียบเทียบ
e. การดำเนินการทางตรรกะ
f. If-Else
g. Loops
ข้อนี้ใช้ : b, a, c
*/
/*
วิธีการ
1. resign Q'ty apple 100 --> 200 ; inventory[0].quantity = 200
2. add object { name: "Orange", price: 20, quantity: 300 } ; inventory.push({ name: "Orange", price: 20, quantity: 300 })
3. เพิ่มแทนค่า sum รวมราคาสินค้าทั้งหมด ; let sum = (inventory[0].price * inventory[0].quantity) + (inventory[1].price * inventory[1].quantity) + (inventory[2].price * inventory[2].quantity)
4. แสดงค่า ; console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${sum}} บาท`)
*/

const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory.push({ name: "Orange", price: 20, quantity: 300 });
let sum = (inventory[0].price * inventory[0].quantity) + (inventory[1].price * inventory[1].quantity) + (inventory[2].price * inventory[2].quantity);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${sum} บาท`);