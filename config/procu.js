
function fetchdt(obj)
{
    var vale = {
        row: "",
        col: "",
        ma: ""
    }

    switch (obj.L[0]) {
        case '1':
            vale.row = 0;
            break;
        case '2':
            vale.row = 1;            
            break;
        case '3':
            vale.row = 2;            
            break;
        case '4':
            vale.row = 3;            
            break;
        case '5':
            vale.row = 4;            
            break;  
        case '6':
            vale.row = 5;            
            break;
        case '7':
            vale.row = 6;            
            break;
        case '8':
            vale.row = 7;            
            break;
        case '9':
            vale.row = 8;            
            break;  
        case '10':
            vale.row = 9;            
            break;            
        default:
            vale.row = -1;
            break;
    }

    switch (obj.K) {
        case '2':
            vale.col = 0;
            break;
        case '3':
            vale.col = 1;            
            break;
        case '4':
            vale.col = 2;            
            break;
        case '5':
            vale.col = 3;            
            break;
        case '6':
            vale.col = 4;            
            break;  
        case '7':
            vale.col = 5;            
            break;
        default:
            vale.col = -1;
            break;            
    }

    vale.ma = obj.C;
    vale.stt = obj.A;

    return vale;

}

function isTrungTiet(obj1, obj2)
{
    for(var i = 0; i < obj1.length; i++) {
        if(obj2.includes(obj1[i])) {
            return true;
        }
    }
    return false;
}

module.exports = function(data) {
    // Create one dimensional array 
var mang = new Array(10); 
var mangLoi = new Array();
var mangLoiObj = new Array();

// Loop to create 2D array using 1D array 
for (var i = 0; i < mang.length; i++) { 
    mang[i] = new Array(6); 
} 
  
// Loop to initilize 2D array elements. 
for (var i = 0; i < 10; i++) { 
    for (var j = 0; j < 6; j++) { 
        mang[i][j] = 0; 
    } 
} 

//var xx = fetchdt(data[2]);

//mang[xx.row][xx.col] = xx.ma;
//mang[xx.row + 1][xx.col] = -1;

// check trùng lịch
for(var i =0; i < data.length - 1; i++)
{
    for(var j= i+1; j <data.length;j++)
    {
        if(data[i].J != 'HT2') {
        if(data[i].K == data[j].K) { //trùng ngày
            if(isTrungTiet(data[i].L, data[j].L)) {
                var captrung = {
                    obj1: data[i],
                    obj2: data[j]
                }
                mangLoi.push(captrung);
                mangLoiObj.push(data[i]);
                mangLoiObj.push(data[j]);            
            }
        }
        }
    }
}

data.forEach(element => {
    var xx = fetchdt(element);
    if(xx.row != -1 && xx.col != -1)
    {
        if(mangLoiObj.includes(element) == false) {
        mang[xx.row][xx.col] = xx.ma + "-" + xx.stt;

        for(var i = 1; i < element.L.length; i++) {
            mang[xx.row + i][xx.col] = -1;
        }
    }
    }
    else if(element.J != 'HT2') {
        var loi = {
            obj1: element,
            obj2: "404"
        }
        mangLoi.push(loi);
    }

});

var rets = {
    yes: mang,
    no: mangLoi
}

return rets;

}