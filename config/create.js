
module.exports = function (monhoc, array) {
    var root1 = array.Sheet1;
    var root2 = array.Sheet2;
    var root = root1.concat(root2);
    var ret = Array();

    monhoc.forEach(mon => {
        root.forEach(obj => {
            if(mon == obj.C)
            {
                ret.push(obj);
            }
        })
    });

    return ret;
}