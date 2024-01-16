export const productFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Entrer le nom du produit",
    label: "Nom",
    componentType: "input",
  },
  {
    id: "visitors",
    type: "number",
    placeholder: "Entrer le nombre de visiteurs",
    label: "Nombre de visiteurs",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Entrer le prix du produit",
    label: "Prix du produit",
    componentType: "input",
  },
  {
    id: "sales",
    type: "number",
    placeholder: "Entrer le nombre de ventes",
    label: "Nombre de ventes",
    componentType: "input",
  },
  {
    id: "month",
    type: "",
    placeholder: "",
    label: "Mois",
    componentType: "select",
    options: [
      {
        id: "jan",
        label: "Janvier",
      },
      {
        id: "feb",
        label: "Février",
      },
      {
        id: "mar",
        label: "Mars",
      },
      {
        id: "apr",
        label: "Avril",
      },
      {
        id: "may",
        label: "Mai",
      },
      {
        id: "jun",
        label: "Juin",
      },
      {
        id: "jul",
        label: "Juillet",
      },
      {
        id: "aug",
        label: "Août",
      },
      {
        id: "sep",
        label: "Septembre",
      },
      {
        id: "oct",
        label: "Octobre",
      },
      {
        id: "nov",
        label: "Novembre",
      },
      {
        id: "dec",
        label: "Décembre",
      },
    ],
  },
];

export const productTableHeaders = [
  {
    id: "name",
    label: "Nom",
  },
  {
    id: "month",
    label: "Mois",
  },
  {
    id: "price",
    label: "Prix",
  },
  {
    id: "sales",
    label: "Ventes",
  },
  {
    id: "revenue",
    label: "Revenue",
  },
];

export const monthsMapper = {
  jan: "Janvier",
  feb: "Février",
  mar: "Mars",
  apr: "Avril",
  may: "Mai",
  jun: "Juin",
  jul: "Juillet",
  aug: "Août",
  sep: "Septembre",
  oct: "Octobre",
  nov: "Novembre",
  dec: "Décembre",
};

export const deviceMapper = {
  desktop: "PC fixe",
  laptop: "PC portable",
  mobile: "Mobile",
  tablet: "Tablette",
};

export const visiorsFormControls = [
  {
    id: "visitors",
    type: "number",
    placeholder: "Entrer un nombre de visiteurs",
    label: "Visiteurs",
    componentType: "input",
  },
  {
    id: "premiumUserNo",
    type: "number",
    placeholder: "Entrer un numéro d'utilisateur premium",
    label: "Numéro d'utilisateur premium",
    componentType: "input",
  },
  {
    id: "location",
    type: "text",
    placeholder: "Entrer une location",
    label: "Location",
    componentType: "input",
  },
  {
    id: "device",
    type: "",
    placeholder: "",
    label: "Appareil",
    componentType: "select",
    options: [
      {
        id: "desktop",
        label: "PC fixe",
      },
      {
        id: "laptop",
        label: "PC portable",
      },
      {
        id: "tablet",
        label: "Tablette",
      },
      {
        id: "mobile",
        label: "Mobile",
      },
    ],
  },
  {
    id: "month",
    type: "",
    placeholder: "",
    label: "Mois",
    componentType: "select",
    options: [
      {
        id: "jan",
        label: "Janvier",
      },
      {
        id: "feb",
        label: "Février",
      },
      {
        id: "mar",
        label: "Mars",
      },
      {
        id: "apr",
        label: "Avril",
      },
      {
        id: "may",
        label: "Mai",
      },
      {
        id: "jun",
        label: "Juin",
      },
      {
        id: "jul",
        label: "Juillet",
      },
      {
        id: "aug",
        label: "Août",
      },
      {
        id: "sep",
        label: "Septembre",
      },
      {
        id: "oct",
        label: "Octobre",
      },
      {
        id: "nov",
        label: "Novembre",
      },
      {
        id: "dec",
        label: "Décembre",
      },
    ],
  },
];

export const visitorsTableHeaders = [
  {
    id: "visitors",
    label: "Visiteurs",
  },
  {
    id: "location",
    label: "Location",
  },
  {
    id: "device",
    label: "Appareil",
  },
  {
    id: "premiumUserNo",
    label: "Visiteur premium",
  },
  {
    id: "month",
    label: "Mois",
  },
];

export const yearlyAnalyticsChartOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Fev",
      "Mar",
      "Avr",
      "Mai",
      "Jui",
      "Jul",
      "Aoû",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 20000,
  },
};

export const visitorAnalyticsChartOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

export const deviceAnalyticsChartOptions = {
  chart: {
    type: "donut",
  },
  colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
  labels: ["PC fixe", "PC portable", "Tablette", "Mobile"],
  legend: {
    show: true,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};
