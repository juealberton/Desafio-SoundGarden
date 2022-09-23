let body = document.getElementsByTagName("body")[0]
body.onload = chamarEventos()

async function chamarEventos(){
    try{
        const linhasT = document.querySelector("#linhasTabela")
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events")

        const listarEventos = await response.json()
        listarEventos.forEach((evento, index) => {
            let arrumarData = new Date(evento.scheduled).toLocaleString()
            const card = `<tr>
            <th scope="row">${index+1}</th>
            <td>${arrumarData}</td>
            <td>${evento.name}</td>
            <td>${evento.attractions}</td>
            <td>
                <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
                <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
            </td>
        </tr>`;

        linhasT.innerHTML += card 
        })
    } catch(error){
        console.log (error)
    }
}