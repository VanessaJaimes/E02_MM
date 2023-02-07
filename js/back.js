function Calc_per(percent, percent1) {
  document.getElementById("myProgressBar").style.width = percent + "%";
  if (percent < 40) {
    document.getElementById("myProgressBar").className =
      "progress-bar progress-bar-striped progress-bar-animated bg-danger";
  } else if (percent < 70) {
    document.getElementById("myProgressBar").className =
      "progress-bar progress-bar-striped progress-bar-animated bg-warning";
  } else {
    document.getElementById("myProgressBar").className =
      "progress-bar progress-bar-striped progress-bar-animated bg-success";
  }

  document.getElementById("myProgressBar1").style.width = percent1 + "%";
  if (percent1 < 40) {
    document.getElementById("myProgressBar1").className =
      "progress-bar progress-bar-striped progress-bar-animated bg-danger";
  } else if (percent1 < 70) {
    document.getElementById("myProgressBar1").className =
      "progress-bar progress-bar-striped progress-bar-animated bg-warning";
  } else {
    document.getElementById("myProgressBar1").className =
      "progress-bar progress-bar-striped progress-bar-animated bg-success";
  }
}
/*
document.getElementById("updateProgresss").addEventListener("click", function () {
  var progress = Math.floor(Math.random() * 101);

  document.getElementById("myProgressBars").style.width = progress + "%";

  if (progress < 40) {
    document.getElementById("myProgressBars").className = "progress-bar progress-bar-striped progress-bar-animated bg-danger";
  } else if (progress < 70) {
    document.getElementById("myProgressBars").className = "progress-bar progress-bar-striped progress-bar-animated bg-warning";
  } else {
    document.getElementById("myProgressBars").className = "progress-bar progress-bar-striped progress-bar-animated bg-success";
  }
});*/

//1 kl = 2,20462 L
//1 kl = 1000 g
function Init() {
  localStorage.setItem("Warehouse", JSON.stringify([100000, 230000]));
  localStorage.setItem("Percent", JSON.stringify([100, 100]));
  Calc_per(
    JSON.parse(localStorage.getItem("Percent"))[0],
    JSON.parse(localStorage.getItem("Percent"))[1]
  );
}
Init();
var app = new Vue({
  el: "#app",
  data: {
    Message: "",
    Warehouse: "0",
    Weight: "Kilo",
    Amount: "",
    asd: 50 + "%",
    Percent: [100, 100],
    Sales: [],
    Whi: [
      JSON.parse(localStorage.getItem("Warehouse"))[0],
      JSON.parse(localStorage.getItem("Warehouse"))[1],
    ],
  },
  methods: {
    Buy() {
      let amount = this.Amount;
      this.Weight == "Gramo"
        ? (amount = amount / 1000)
        : this.Weight == "Libra"
        ? (amount = amount / 2.20462)
        : (amount = this.Amount);
      if (this.Whi[this.Warehouse] - amount < 0) {
        swal("","Cantidad excedida, la cantidad de la bodega es: " + this.Whi[this.Warehouse], "error");
        this.Message = "cantidad excedida";
      } else {
        this.Whi[this.Warehouse] = this.Whi[this.Warehouse] - amount;
        this.Percent[this.Warehouse] =
          (this.Whi[this.Warehouse] * 100) /
          JSON.parse(localStorage.getItem("Warehouse"))[this.Warehouse];
        this.Sales.push({
          Ware: this.Warehouse,
          Buy: amount,
        });
        Calc_per(this.Percent[0], this.Percent[1]);
      }

      this.Percent[this.Warehouse] <= 50
        ? this.Percent[this.Warehouse] <= 10
          ? 
          swal("Error de almacenamiento","el almacenamiento es inferior al 10% para la bodega " +
          (this.Warehouse + 1)+", la cantidad de arroz es de : " + this.Whi[this.Warehouse]): 
      
      swal("Error de almacenamiento","el almacenamiento es inferior al 50% para la bodega " +
      (this.Warehouse + 1) + ", la cantidad de arroz es de : " + this.Whi[this.Warehouse]):

       (this.Message = "");

    },
    Alert() {
      this.Percent[this.Warehouse] <= 50
        ? this.Percent[this.Warehouse] <= 10
          ? (this.Message =
              "el almacenamiento es inferior al 10% para la bodega " +
              (this.Warehouse + 1))
          : (this.Message =
              "el almacenamiento es inferior al 50% para la bodega " +
              (this.Warehouse + 1))
        : (this.Message = "");
    },
  },
});
