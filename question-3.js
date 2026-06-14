// Question #3
// - สมมุติว่ามี Variable `userPassword` ที่บรรจุรหัสผ่านของผู้ใช้งาน
// - ให้เขียนฟังก์ชัน `checkPasswordStrength` ซึ่งรับ `userPassword` เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้
// จำนวนตัวอักษรใน userPassword	ผลลัพธ์
// น้อยกว่า 6	“Weak”
// ตั้งแต่ 6 จนถึง 10	“Medium”
// มากกว่า 10	“Strong”
// - ตัวอย่างเช่น
//     - ถ้า `userPassword` มีค่าเป็น `"ssswnalWadqQ"` ฟังก์ชันจะ Return ค่า `"Strong"`
//         let userPassword = "ssswnalWadqQ"
//         console.log(checkPasswordStrength(userPassword)); // "Strong"
//     - ถ้า userPassword มีค่าเป็น "TechUp" ฟังก์ชันจะ Return ค่า "Medium"
//         let userPassword = "TechUp"
//         console.log(checkPasswordStrength(userPassword)); // "Medium"
//     - ถ้า userPassword มีค่าเป็น "abcde" ฟังก์ชันจะ Return ค่า "Weak"
//         let userPassword = "abcde"
//         console.log(checkPasswordStrength(userPassword)); // "Weak"

/*
a. การแสดงผลลัพธ์
ิb. การกำหนดค่า
c. การบวก/ลบ/คูณ/หาร
d. การเปรียบเทียบ
e. การดำเนินการทางตรรกะ
f. If-Else
g. Loops
ข้อนี้ใช้ : f, d, a
*/
/*
วิธีการ
1. สร้างเงื่อนไขตามโจทย์โดยใช้ If-Else
2. return ค่าตามที่โจทย์บอก
*/

let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    if (userPassword.length < 6) {
        return "Weak";
    } else if (userPassword.length <= 10) {
        return "Medium";
    } else if (userPassword.length > 10) {
        return "Strong";
    }
};

console.log(checkPasswordStrength(userPassword));