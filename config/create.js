
module.exports = function (monhoc, array) {
    var root1 = array.Sheet1;
    var root2 = array.Sheet2;
    var root = root1.concat(root2);
    var ret = Array();

    monhoc.forEach(mon => {
        mon = mon.trim();
        root.forEach(obj => {
            if(mon == obj.C)
            {
                //fix date
                var date = new Date(obj.T);
                date.setHours(date.getHours() + 1);
                var bd = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
                obj.T = bd;

                date = new Date(obj.U);
                date.setHours(date.getHours() + 1);
                var kt = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
                obj.U = kt;

                ret.push(obj);
            }
        })
    });

    

    return ret;
}