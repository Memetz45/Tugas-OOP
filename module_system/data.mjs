import Table from "./table.mjs";
const table = new Table({
    columns: ["Nama", "Email"],
    data: [
        ["Slamet Nurhidayat", "slametnurhidayat45@gmail.com"],
        ["Shidqi Ramadhany", "shidqirama_12@gmail.com"],
        ["Resi Sujiwo", "resisujiwojowo99@gmail.com"]
    ]
});

// const app = document.getElementById("app");
// table.render(app);
export default table;