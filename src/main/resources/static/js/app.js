let app = ( () =>{
    let cinemaName =undefined;
    let date = undefined;
    let movies =[]
    let seats = []
    let service = apiclient;
    // let service = apimock;
    const mapToObjects = (cinemaFunctions) =>{
        let table = $("#tabla > tbody");
        table.empty();
        movies = cinemaFunctions.map(({movie:{name,genre},date}) => ({  //retorna un objeto sin necesidad de return :3
            name:name,
            genre:genre,
            hour:date.split(" ")[1]
        }));
        movies.forEach(({name,genre,hour})=>{
            table.append(
                `<tr> <td>${name}</td>
                      <td>${genre}</td>
                      <td>${hour}</td>
                      <td>
                          <button type="button" onclick="app.getSeats($('#cinema').val(),
                              $('#date').val().concat(' ','${hour}'),'${name}')" 
                              class="btn btn-primary">Disponibilidad
                          </button>
                      </td>
                </tr>`
            );
        })
    }
    const draw = (seats) =>{
        let numeroAsientosDisponibles = 0;
        let canvas = document.getElementById('canvas');
        let lapiz = canvas.getContext("2d");
        lapiz.fillStyle = "white";
        lapiz.fillRect(0, 0, canvas.width, canvas.height);
        lapiz.strokeStyle = 'lightgrey';
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 12; j++) {
                if (seats[i][j] === true) {
                    numeroAsientosDisponibles++;
                    lapiz.fillStyle = "#BDC3C7";
                } else {
                    lapiz.fillStyle = "#2980B9";
                }
                lapiz.fillRect(j * 43, i * 43, 36, 36);
            }
        }
        $('#numeroDeAsientos').text(`Asientos Disponibles: ${numeroAsientosDisponibles}`);
    }
    return{
        changeCinemaName(newCinema){cinemaName=newCinema},
        changeDate(newDate){date = newDate},
        getSeats(name,date,functionName){
            document.getElementById('buyTicket').innerHTML =
                '<label>Asiento</label>'
                    +'<input type="text" id="x" placeholder="Numero de Fila" name="Fila">'
                    +'<input type="text" id="y" placeholder="Numero Columna" name="Columna">'
                    +'<button type="button" onclick="app.buyTicket('${name}','${date}','${functionName}',$(\'#x\').val(),$(\'#y\').val())"'
                            +'class="btn btn-warning">Comprar'
                    +'</button>';

            let availability = $('#Availability');
            availability.empty();
            availability.append(`Availability ${functionName}`)
            service.getFunctionsByCinemaAndDate(name,date,(funciones) =>{
                for (const funcion of funciones){
                    if(funcion.movie.name === functionName){
                        draw(funcion.seats);
                        break;
                    }
                }
            })
        },
        updateFunctions(cinema,date){
            this.changeCinemaName(cinema);
            this.changeDate(date);
            $('#seleccionado').text(`Cine seleccionado: ${cinemaName}`);
            service.getFunctionsByCinemaAndDate(cinema,date,mapToObjects)
        },
        buyTicket(name, date,movieName,row,col){
        service.buyTicket(name,date,movieName,row,col,(funcion) =>{

            if(funcion.movie.name === functionName){
                draw(funcion.seats);
            }

        })
        }
        }


    })();