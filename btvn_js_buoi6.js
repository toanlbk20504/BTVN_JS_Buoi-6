//Cau 1
function timSoNhoNhat() {
  //  var nhapSo=document.getElementById("nhapSo").value*1;
    var sum=null;
    var n=1;
    while (sum<10000) {
        sum=sum+n;
        n++;
    }
    document.getElementById("ketQua1").innerHTML=n;
}
//Cau2
function tinhTong() {
     var soX=document.getElementById("soX").value*1;
     var soN=document.getElementById("soN").value*1;
     var tong=null;
     var lt=1;
     var dem=1;
     while (dem<=soN) {
      lt=lt*soX;
      tong= lt+tong;
      dem++;
     }
     document.getElementById("ketQua2").innerHTML=tong;
}
//Cau3
function tinhGiaiThua() {
  var inPut3=document.getElementById("inPut3").value*1;
  var dem=1;
  var output=1;
  while (dem<=inPut3) {
      output= output*dem;
      dem= dem+1;
  }
  document.getElementById("ketQua3").innerHTML=output; }
  //Cau4
  function doiMau()
            {
                var divs = document.getElementsByClassName("div");
                for (var i = 0; i < divs.length; i++){
                    
                    if ((i + 1) % 2 == 0){
                        divs[i].style.background = "red";
                    }
                    else { 
                        divs[i].style.background = "blue";
                    }
                }
            }