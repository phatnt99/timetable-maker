function loc(data, key) {
    for(var i =0; i < data.length; i++) {
        if(key.C == data[i].C) {
            return false;
        }
    }
    return true;
}

function tee(data3) {
    var err = Array();

    if(data3.length > 0) {
        data3.forEach(function(obj) {
            if(obj.obj2 != '404') {
                err.push(obj.obj1);
                err.push(obj.obj2);
            };
        });
    }

    return err;
}

function cop(data4) {
    var temp = new Array();
    data4.forEach(element => {
        temp.push(element);
    });
    return temp;
}

module.exports = function(data3, data4) {
    //lọc data3
    var temp = tee(data3); // mảng lỗi
    var mangdung = cop(data4); // mảng đăng kí
    var ret = Array();

    mangdung.forEach(element => {
        if(loc(temp, element) == true) { // không có
            ret.push(element);
        }
    });

    return ret;
}