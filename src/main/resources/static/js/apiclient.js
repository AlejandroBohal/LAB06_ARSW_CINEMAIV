
apiclient = (function () {
    let url = "http://localhost:8080/cinemas/"

    return {
        getFunctionsByCinema: function (name,callback) {
            $.getJSON(url+name,(data)=>{
                callback(data);
            },null)
        },
        getFunctionsByCinemaAndDate: function (name,date,callback) {
            $.getJSON(url+name+"/"+date,(data)=>{
                callback(data);
            },null)
        },
        buyTicket: function (name,date,movieName,row,col,callback) {
            $.getJSON(url+name+"/"+date+"/"+movieName+"/"+row+"/"+col,(data)=>{
                callback(data);
            },null)
        },
    }

})();





