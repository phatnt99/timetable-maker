module.exports = function(data) {

    var temp = new Array();
    data.forEach(element => {
        temp.push(element);
    });

    for(var i =0; i < temp.length - 1; i++)
    {
        for(var j = i + 1; j < temp.length; j++)
        {
            if(temp[i].C == temp[j].C)
            {
                temp.splice(j,1);
                j--;
            }
        }
    }

      return temp;
}