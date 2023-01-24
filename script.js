class Table {
    constructor(init) {
        this.init = init;
    }

    creatHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
            open += `<th>${d}</th>`;
        });

        return open + close;
    }

    createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";

        data.forEach((d) => {
            open +=`
            <tr>
                <td>${d[0]}</td>
                <td>${d[1]}</td>
            </tr>
            `;
        });

        return open + close;
    }

    render(element) {
        let table = 
        "<table class='table table-hover'>" +
        this.creatHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
        element.innerHTML = table;
    }
}

const table = new Table({
    columns: ["Nama", "Email"],
    data: [
        ["Slamet Nurhidayat", "slametnurhidayat45@gmail.com"],
        ["Shidqi Ramadhany", "shidqirama_12@gmail.com"],
        ["Resi Sujiwo", "resisujiwojowo99@gmail.com"]
    ]
});

const app = document.getElementById("app");
table.render(app);