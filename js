### 多个不同符号分割字符串（正则）

var str = "2020-09-08 16:25:12";
var reg = /-|\s|:/;
str.split(reg) // ['2020', '09', '08', '16', '25', '12']

