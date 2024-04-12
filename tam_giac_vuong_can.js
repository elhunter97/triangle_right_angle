let x = +prompt('Nhap canh 1: ');
let y = +prompt('Nhap canh 2: ');
let z = +prompt('Nhap canh 3: ');
if (x == y && Math.sqrt(x+y) == z ){
    alert('xyz la tam giac vuong can');
} else if (x == z && Math.sqrt(x+z) == y) {
    alert('xyz la tam giac vuong can');
} else  if (y == z && Math.sqrt(y+z) == x) {
    alert('xyz la tam giac vuong can');
} else{
    alert('xyz khong la tam giac vuong can');
}