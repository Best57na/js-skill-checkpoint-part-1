// Question #4
// สมมุติว่ามี Variable inventory ที่บรรจุข้อมูลสินค้าในคลังสินค้า เช่น ราคาสินค้า (price) และจำนวนสินค้าในคลังสินค้า (quantity) ซึ่งมีโครงสร้างข้อมูลดังนี้
// const inventory = [
//   { name: "Apple", price: 35, quantity: 100 },
// 	{ name: "Banana", price: 10, quantity: 50 },
// 	{ name: "Orange", price: 30, quantity: 60 },
// ];
// - ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
// - เช่น ถ้า `inventory` มีค่าเป็นแบบนี้
// const inventory = [
//  { name: "Apple", price: 35, quantity: 100 },
// 	{ name: "Banana", price: 10, quantity: 50 },
// 	{ name: "Orange", price: 30, quantity: 60 },
// ];
// ผลลัพธ์ของโปรแกรมควรจะแสดงผลดังนี้
//   - สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น

// หรือถ้า inventory มีค่าเป็นแบบนี้
// const inventory = [
//  { name: "Apple", price: 35, quantity: 100 },
// 	{ name: "Banana", price: 10, quantity: 2000 },
// 	{ name: "Orange", price: 30, quantity: 60 },
// ];
// ผลลัพธ์ของโปรแกรมควรจะแสดงผลดังนี้
//   - สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Orange ซึ่งมี 60 ชิ้น
/*
a. การแสดงผลลัพธ์
ิb. การกำหนดค่า
c. การบวก/ลบ/คูณ/หาร
d. การเปรียบเทียบ
e. การดำเนินการทางตรรกะ
f. If-Else
g. Loops
ข้อนี้ใช้ : d, g, a, b, f
*/
/*
วิธีการ
1. กำหนด lowestProduct เป็น Object เปล่า
2. ใช้ loop เพื่อเข้าถึงทุกค่าใน array
3. ใช้ If-Else เพื่อเปรียบเทียบค่าน้อยที่สุดแล้ว resign ใน lowestProduct
4. คืนค่า ; return "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " + lowestProduct.name + " ซึ่งมี " + lowestProduct.quantity + " ชิ้น"
*/


const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 50 },
	{ name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function checkLowestProduct(inventory) {
  let lowestProduct = inventory[0];
  for (let item of inventory) {
    if (item.quantity < lowestProduct.quantity) {
      lowestProduct = item;
  }
}
  return "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " + lowestProduct.name + " ซึ่งมี " + lowestProduct.quantity + " ชิ้น";
};
console.log(checkLowestProduct(inventory));