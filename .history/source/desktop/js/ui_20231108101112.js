// =============== js default ===================

// INFO : for header home page
$(window).scroll(function () {
  var sticky = $(".header-home.site-header .sticky");
  $(".small-logo").addClass("show");
  sticky.addClass("fixed");
  if ($(window).scrollTop() == 0) {
    $(".site-header .sticky").removeClass("fixed");
    $(".small-logo").removeClass("show");
  }
});

// INFO : for header
$(window).scroll(function () {
  var sticky = $(".site-header .sticky");
  sticky.addClass("fixed");
  if ($(window).scrollTop() == 0) {
    sticky.removeClass("fixed");
  }
});

// INFO : for navigation
var showMenu = $(".site-header .ic-menu");
var closeMenu = $(".navigation");
var menu = $(".navigation");

showMenu.click(function (e) {
  e.preventDefault();
  menu.fadeToggle();
  $("body").toggleClass("show-menu");
  $(".site-header .sticky.fixed").toggleClass("w");
});

closeMenu.click(function (e) {
  menu.fadeToggle();
  $("body").toggleClass("show-menu");
  $(".site-header .sticky").removeClass("w");
});

// INFO : for comment
var input = $(".wrap-comment .input-comment");
input.on("click", function () {
  input.addClass("active");
});

// INFO : for modal
$("body").append("<div class='modal-backdrop'></div>");
$(".btn-modal").on("click", function () {
  $("body").addClass("modal-open");
  $(".modal-backdrop").fadeIn();
  var id = $(this).data("target");
  $('.modal[data-target="' + id + '"]').fadeIn();
  $(".navigation.sticky.fixed").addClass("show-modal");
});

$(".modal-backdrop").on("click", function () {
  setTimeout(() => {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $(".modal-backdrop").fadeOut();
  $(".modal").fadeOut();
});

$(".btn-close").on("click", function () {
  setTimeout(() => {
    $("body").removeClass("modal-open");
    $(".navigation.sticky.fixed").removeClass("show-modal");
  }, 400);
  $(".modal-backdrop").fadeOut();
  $(".modal").fadeOut();
});

// INFO : for audio
$(".audio .right .select-voice").click(function (e) {
  e.preventDefault();
  $(".audio .right .voice-board").toggle();
});

$(".audio .play-button").click(function (e) {
  e.preventDefault();
  $(".audio .ic-audio-pause").toggleClass("ic-audio-play");
});

$(".audio .mute-button").click(function (e) {
  e.preventDefault();
  $(".audio .ic-audio-volume").toggleClass("ic-audio-volume-slash");
});

$(".modal-body .ic-eye").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("slash");
});

// INFO : show search
$(".search-wrapper input").focusin(function () {
  $(this).addClass("show");
  $(".site-header .menu").addClass("insivible");
});
$(".search-wrapper input").focusout(function () {
  $(this).removeClass("show");
  $(".site-header .menu").removeClass("insivible");
});

// INFO :  back to top
var btn = $(".back-to-top");
$(window).scroll(function () {
  if ($(window).scrollTop() > 800) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// INFO : region filter
$(".search-filter .submit").click(function (e) {
  e.preventDefault();
  $(".search-filter .menu").fadeToggle("fast");
});

// INFO : region filter
$(".site-header .ic-bell").click(function (e) {
  e.preventDefault();
  $(".site-header .pick-news").fadeToggle("fast");
});

// INFO copy-source
if ($(".article__source .getlink").length > 0) {
  $(".article__source .btn").on("click", function () {
    $(".article__source .source-toggle").toggleClass("show");
  });

  var $temp = $("<input>");
  var $url = $(".article__source .source-toggle a").attr("href");
  $(".article__source .getlink").on("click", function () {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    $(".article__source .getlink").html("Đã copy");
  });
}

// INFO : check dark theme
var body = $("body");
if (
  body.hasClass("media-page") ||
  body.hasClass("video-page") ||
  // body.hasClass("timeline-page") ||
  body.hasClass("photo-page")
) {
  $("html").addClass("dark-theme");
}

// VN map
(async () => {
  const topology = await fetch(
    "https://raw.githubusercontent.com/tatrunghieu/covid-19-tracker/master/src/constants/vn-all.json?fbclid=IwAR14A-6qVZrcz-C10_f_yuuZfRMvPtHj4NEPz_9aH9rLnV6GanjTBbtLOco"
  ).then((response) => response.json());

  const VNData = [
    ["vn-3655", 10],
    ["22", 11],
    ["56", 12],
    ["82", 13],
    ["77", 14],
    ["60", 15],
    ["79", 16],
    ["83", 17],
    ["94", 18],
    ["25", 19],
    ["15", 20],
    ["30", 21],
    ["27", 22],
    ["33", 23],
    ["37", 24],
    ["35", 25],
    ["17", 26],
    ["26", 27],
    ["1", 28],
    ["24", 29],
    ["34", 30],
    ["68", 31],
    ["70", 32],
    ["54", 33],
    ["52", 34],
    ["64", 35],
    ["51", 36],
    ["vn-331", 37],
    ["87", 38],
    ["80", 39],
    ["31", 40],
    ["93", 41],
    ["95", 42],
    ["86", 43],
    ["72", 44],
    ["19", 45],
    ["12", 46],
    ["14", 47],
    ["2", 48],
    ["36", 49],
    ["42", 50],
    ["40", 51],
    ["44", 52],
    ["66", 53],
    ["58", 54],
    ["67", 55],
    ["62", 56],
    ["49", 57],
    ["45", 58],
    ["46", 59],
    ["48", 60],
    ["89", 61],
    ["96", 62],
    ["84", 63],
    ["4", 64],
    ["91", 65],
    ["10", 66],
    ["11", 67],
    ["20", 68],
    ["38", 69],
    ["vn-307", 70],
    ["8", 71],
    ["74", 72],
    ["92", 73],
    ["hs01", 72],
    ["truongsa", 73],
  ];

  Highcharts.mapChart("VNmap", {
    chart: {
      map: topology,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },
    colorAxis: {
      min: 0,
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return (
          '<div style="padding: 15px;background: #fff"><p style="font-family: URW Geometric;color: var(--gray-600, #6c757d);font-size: 12px;font-weight: 600;line-height: 150%;text-transform: uppercase;padding-bottom: 5px;margin-bottom: 5px;border-bottom: 1px solid #e9ecef;">Tin tức mới nhất tại</p><p style="font-family: Playfair Display; color: #000;font-size: 18px;font-weight: 600;line-height: 140%;">' +
          this.key +
          "</p></div>"
        );
      },
    },
    series: [
      {
        point: {
          events: {
            click: function () {
              // console.log(this.options.value);
              if (this.options.value == "10") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "11") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "12") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "13") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "14") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "15") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "16") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "17") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "18") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "19") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "20") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "21") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "22") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "23") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "24") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "25") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "26") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "27") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "28") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "29") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "30") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "31") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "32") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "33") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "34") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "35") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "36") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "37") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "38") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "39") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "40") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "41") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "42") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "43") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "44") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "45") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "46") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "47") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "48") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "49") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "50") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "51") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "52") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "53") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "54") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "55") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "56") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "57") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "58") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "59") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "60") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "61") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "62") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "63") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "64") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "65") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "66") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "67") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "68") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "69") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "70") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "71") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "72") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "73") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "72") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "73") {
                window.open("https://www.google.com/");
              }
            },
          },
        },
        data: VNData.map((elem) => {
          if (elem[1] > 1) {
            elem.push("#A21F19");
          }
          return elem;
        }),
        keys: ["hc-key", "value", "color"],
        states: {
          hover: {
            color: "#FEC61F",
          },
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}",
        },
      },
    ],
  });
})();

// world map
(async () => {
  const topology = await fetch(
    "https://code.highcharts.com/mapdata/custom/world-highres.topo.json"
  ).then((response) => response.json());
  const worldData = [
    ["fo", 10],
    ["um", 11],
    ["us", 12],
    ["jp", 13],
    ["sc", 14],
    ["in", 15],
    ["fr", 16],
    ["fm", 17],
    ["cn", 18],
    ["sw", 19],
    ["sh", 20],
    ["br", 21],
    ["ec", 22],
    ["au", 23],
    ["ki", 24],
    ["ph", 25],
    ["mx", 26],
    ["es", 27],
    ["bu", 28],
    ["mv", 29],
    ["sp", 30],
    ["gb", 31],
    ["gr", 32],
    ["as", 33],
    ["dk", 34],
    ["gl", 35],
    ["gu", 36],
    ["mp", 37],
    ["pr", 38],
    ["vi", 39],
    ["ca", 40],
    ["st", 41],
    ["tz", 42],
    ["cv", 43],
    ["dm", 44],
    ["nl", 45],
    ["jm", 46],
    ["ws", 47],
    ["om", 48],
    ["vc", 49],
    ["tr", 50],
    ["bd", 51],
    ["sb", 52],
    ["lc", 53],
    ["nr", 54],
    ["no", 55],
    ["kn", 56],
    ["bh", 57],
    ["to", 58],
    ["fi", 59],
    ["id", 60],
    ["mu", 61],
    ["se", 62],
    ["tt", 63],
    ["my", 64],
    ["bs", 65],
    ["pa", 66],
    ["pw", 67],
    ["tv", 68],
    ["mh", 69],
    ["cl", 70],
    ["th", 71],
    ["gd", 72],
    ["ee", 73],
    ["ag", 74],
    ["tw", 75],
    ["bb", 76],
    ["it", 77],
    ["mt", 78],
    ["pg", 79],
    ["de", 80],
    ["vu", 81],
    ["sg", 82],
    ["cy", 83],
    ["km", 84],
    ["fj", 85],
    ["ru", 86],
    ["va", 87],
    ["sm", 88],
    ["kz", 89],
    ["az", 90],
    ["am", 91],
    ["tj", 92],
    ["ls", 93],
    ["uz", 94],
    ["pt", 95],
    ["ma", 96],
    ["co", 97],
    ["tl", 98],
    ["kh", 99],
    ["ar", 100],
    ["sa", 101],
    ["pk", 102],
    ["ye", 103],
    ["ae", 104],
    ["ke", 105],
    ["pe", 106],
    ["do", 107],
    ["ht", 108],
    ["ao", 109],
    ["vn", 110],
    ["mz", 111],
    ["cr", 112],
    ["ir", 113],
    ["sv", 114],
    ["sl", 115],
    ["gw", 116],
    ["hr", 117],
    ["bz", 118],
    ["za", 119],
    ["cd", 120],
    ["kw", 121],
    ["ie", 122],
    ["kp", 123],
    ["kr", 124],
    ["gy", 125],
    ["hn", 126],
    ["mm", 127],
    ["ga", 128],
    ["gq", 129],
    ["ni", 130],
    ["ug", 131],
    ["mw", 132],
    ["sx", 133],
    ["tm", 134],
    ["zm", 135],
    ["nc", 136],
    ["mr", 137],
    ["dz", 138],
    ["lt", 139],
    ["et", 140],
    ["sd", 141],
    ["er", 142],
    ["gh", 143],
    ["si", 144],
    ["gt", 145],
    ["ba", 146],
    ["jo", 147],
    ["sy", 148],
    ["mc", 149],
    ["al", 150],
    ["uy", 151],
    ["cnm", 152],
    ["mn", 153],
    ["rw", 154],
    ["so", 155],
    ["bo", 156],
    ["cm", 157],
    ["cg", 158],
    ["eh", 159],
    ["rs", 160],
    ["me", 161],
    ["bj", 162],
    ["ng", 163],
    ["tg", 164],
    ["la", 165],
    ["af", 166],
    ["ua", 167],
    ["sk", 168],
    ["jk", 169],
    ["bg", 170],
    ["qa", 171],
    ["li", 172],
    ["at", 173],
    ["sz", 174],
    ["hu", 175],
    ["ro", 176],
    ["lu", 177],
    ["ad", 178],
    ["ci", 179],
    ["lr", 180],
    ["bn", 181],
    ["be", 182],
    ["iq", 183],
    ["ge", 184],
    ["gm", 185],
    ["ch", 186],
    ["td", 187],
    ["kv", 188],
    ["lb", 189],
    ["dj", 190],
    ["bi", 191],
    ["sr", 192],
    ["il", 193],
    ["ml", 194],
    ["sn", 195],
    ["gn", 196],
    ["zw", 197],
    ["pl", 198],
    ["mk", 199],
    ["py", 200],
    ["by", 201],
    ["lv", 202],
    ["cz", 203],
    ["bf", 204],
    ["na", 205],
    ["ne", 206],
    ["ly", 207],
    ["tn", 208],
    ["bt", 209],
    ["md", 210],
    ["ss", 211],
    ["cf", 212],
    ["nz", 213],
    ["cu", 214],
    ["ve", 215],
    ["mg", 216],
    ["is", 217],
    ["eg", 218],
    ["lk", 219],
    ["bw", 220],
    ["kg", 221],
    ["np", 222],
  ];
  Highcharts.mapChart("worldMap", {
    chart: {
      map: topology,
    },

    title: {
      text: "Highcharts Maps basic demo",
    },

    subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world-highres.topo.json">World, high resolution</a>',
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      min: 0,
    },
    tooltip: {
      useHTML: true,
      formatter: function () {
        return (
          '<div style="padding: 15px;background: #fff"><p style="font-family: URW Geometric;color: var(--gray-600, #6c757d);font-size: 12px;font-weight: 600;line-height: 150%;text-transform: uppercase;padding-bottom: 5px;margin-bottom: 5px;border-bottom: 1px solid #e9ecef;">Tin tức mới nhất tại</p><p style="font-family: Playfair Display; color: #000;font-size: 18px;font-weight: 600;line-height: 140%;">' +
          this.key +
          "</p></div>"
        );
      },
    },
    series: [
      {
        point: {
          events: {
            click: function () {
              //   console.log(this.name);
              if (this.options.value == "10") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "11") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "12") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "13") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "14") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "15") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "16") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "17") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "18") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "19") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "20") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "21") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "22") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "23") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "24") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "25") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "26") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "27") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "28") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "29") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "30") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "31") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "32") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "33") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "34") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "35") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "36") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "37") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "38") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "39") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "40") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "41") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "42") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "43") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "44") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "45") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "46") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "47") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "48") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "49") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "50") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "51") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "52") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "53") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "54") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "55") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "56") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "57") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "58") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "59") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "60") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "61") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "62") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "63") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "64") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "65") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "66") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "67") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "68") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "69") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "70") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "71") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "72") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "73") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "74") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "75") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "76") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "77") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "78") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "79") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "80") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "81") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "82") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "83") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "84") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "85") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "86") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "87") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "88") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "89") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "90") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "91") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "92") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "93") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "94") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "95") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "96") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "97") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "98") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "99") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "00") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "01") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "02") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "03") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "04") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "05") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "06") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "07") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "08") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "09") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "10") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "11") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "12") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "13") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "14") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "15") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "16") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "17") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "18") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "19") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "20") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "21") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "22") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "23") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "24") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "25") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "26") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "27") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "28") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "29") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "30") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "31") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "32") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "33") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "34") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "35") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "36") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "37") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "38") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "39") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "40") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "41") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "42") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "43") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "44") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "45") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "46") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "47") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "48") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "49") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "50") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "51") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "52") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "53") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "54") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "55") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "56") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "57") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "58") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "59") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "60") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "61") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "62") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "63") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "64") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "65") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "66") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "67") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "68") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "69") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "70") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "71") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "72") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "73") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "74") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "75") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "76") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "77") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "78") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "79") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "80") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "81") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "82") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "83") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "84") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "85") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "86") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "87") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "88") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "89") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "90") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "91") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "92") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "93") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "94") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "95") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "96") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "97") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "98") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "99") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "00") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "01") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "02") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "03") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "04") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "05") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "06") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "07") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "08") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "09") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "10") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "11") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "12") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "13") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "14") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "15") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "16") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "17") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "18") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "19") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "20") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "21") {
                window.open("https://www.google.com/");
              }
              if (this.options.value == "22") {
                window.open("https://www.google.com/");
              }
            },
          },
        },
        data: worldData.map((elem) => {
          if (elem[1] > 1) {
            elem.push("#A21F19");
          }
          return elem;
        }),
        keys: ["hc-key", "value", "color"],
        name: "Tin tức mới nhất tại",
        states: {
          hover: {
            color: "#FEC61F",
          },
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}",
        },
      },
    ],
  });
})();
