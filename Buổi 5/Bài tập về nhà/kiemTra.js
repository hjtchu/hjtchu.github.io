// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C.
// Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.

function convertDegree(c){
    return f = 1.8000*c+32;
    
    
    }

//     Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì
// trong mảng.
function maxNumber(arr){
    return arr.sort(function(a,b){return a-b})[arr.length-2];
   }



//    Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.

function maxStr(arr){
    var x = arr[0].length;
    var maxLength = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i].length>x){
        return arr[i]; 
    
    }
    
    
    }
     



// Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có
// kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.

function strIncludes(string, target){
    return  string.endWidth(target);

    }


//     Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem
// trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp)
// hoặc false (nếu không lặp).

function checkRepeat(arr){
    var newArr = new Set(arr);
    if(Array.from(newArr).length == arr.length){return true;}else {return false;}
    
    
    
    }