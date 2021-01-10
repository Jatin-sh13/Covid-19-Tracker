function myFunction() {
    var w = window.outerWidth;
    if (w <= 575.98) {
        document.getElementById('con').innerHTML = "Cnfmrd";
        document.getElementById('Act').innerHTML = "Actv";
        document.getElementById('Dea').innerHTML = "Rcvrd";
        document.getElementById('Rec').innerHTML = "Dcsd";
    }
}

function getcountry() {
    // Country India
    fetch('https://api.covid19india.org/data.json').then(res => res.json()).then(data => {
        console.log(data)
        document.getElementById('confirmed').textContent = data.statewise[0]['confirmed'];
        document.getElementById('Active').textContent = data.statewise[0]['active'];
        document.getElementById('recovered').textContent = data.statewise[0]['recovered'];
        document.getElementById('Deaths').textContent = data.statewise[0]['deaths'];
        let newdata = '';
        for (i = 1; i < data.statewise.length; i++) {
            newdata += `<tr>
                <td>
                    ${data.statewise[i]['state']}
                </td>
                <td>
                    ${data.statewise[i]['confirmed']}
                </td>
                <td>
                    ${data.statewise[i]['active']}
                </td>
                <td>
                    ${data.statewise[i]['deaths']}
                </td>
                <td>
                    ${data.statewise[i]['recovered']}
                </td>
            </tr>`;
        }
        document.getElementById('table-data').innerHTML = newdata;
    })
}
getcountry();
// Jquery finding country
let togglevalue = document.getElementById("customSwitch1")
let bodybackcolor = document.getElementById("my")
let navbar = document.getElementById("nav-bar")
let home = document.getElementById("home")
let Covid = document.getElementById("Covid-19")
let prevention = document.getElementById("preventions")
let gitlink = document.getElementById("github-link")
let fuck = document.getElementById("fuck")
let aboutus = document.getElementById("About-Us")
let brand = document.querySelector(".navbar-brand")
let header = document.getElementById("header")
let header1 = document.getElementById("header1")
let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")
let confirmed = document.getElementById("confirmed")
let Active = document.getElementById("Active")
let recovered = document.getElementById("recovered")
let Deaths = document.getElementById("Deaths")
let covid = document.getElementById("covid")
let pre = document.getElementById("Preventions")
let value = false;
togglevalue.addEventListener("click", function () {
    if (value === false) {
        value = true;
        bodybackcolor.style.background = "#09051a"
        navbar.style.background = "#0b0621"
        gitlink.style.color = "white"
        home.style.color = "white"
        Covid.style.color = "white"
        prevention.style.color = "white"
        aboutus.style.color = "white"
        brand.style.color = "white"
        header.style.color = "white"
        card1.style.background = "#0b0621"
        card1.style.color = "white"
        card2.style.background = "#0b0621"
        card2.style.color = "white"
        card3.style.background = "#0b0621"
        card3.style.color = "white"
        card4.style.background = "#0b0621"
        card4.style.color = "white"
        recovered.style.color = "rgb(82, 176, 113)"
        confirmed.style.color = "rgb(255, 125, 149)"
        Deaths.style.color = "red"
        Active.style.color = "rgb(101, 163, 255)"
        header1.style.color = "white"
        pre.style.color = "white"
        fuck.style.color = "white"
        covid.style.color = "white"
        $(document).ready(function () {
            $("tr:nth-child(even)").css("background-color", "#424040");
        });
        $("tr").css("color", "white")
        $("th").css("color", "white")
        $("th").css("background-color", "#424040")
        $("p").css("color", "white")
        $(".Points-Pre").css("color", "white")
        $(".about-us").css("color", "white")
        $(".footer").css("background-color", "#0b0621")
        $(".Get").css("color", "white")
        $("#faq").css("color", "white")
        $("#faq-content").css("color", "white")
        $(".navbar-toggler-icon").css("background-image", "url(https://img.icons8.com/fluent/48/000000/menu--v1.png)")
        return
    }
    if (value == true) {
        value = false;
        bodybackcolor.style.background = ""
        navbar.style.background = ""
        home.style.color = ""
        Covid.style.color = ""
        prevention.style.color = ""
        aboutus.style.color = ""
        brand.style.color = ""
        header.style.color = ""
        confirmed.style.color = ""
        recovered.style.color = ""
        Deaths.style.color = ""
        Active.style.color = ""
        header1.style.color = ""
        fuck.style.color = ""
        card1.style.background = ""
        card1.style.color = ""
        card2.style.background = ""
        card2.style.color = ""
        card3.style.background = ""
        card3.style.color = ""
        card4.style.background = ""
        card4.style.color = ""
        $(document).ready(function () {
            $("tr:nth-child(even)").css("background-color", "");
        });
        $("tr").css("color", "")
        $("th").css("color", "")
        $("th").css("background-color", "")
        $("p").css("color", "")
        covid.style.color = ""
        pre.style.color = ""
        $(".Points-Pre").css("color", "")
        $(".about-us").css("color", "")
        $(".footer").css("background-color", "")
        $(".Get").css("color", "")
        $("#faq").css("color", "")
        $("#faq-content").css("color", "")
        $(".navbar-toggler-icon").css("background-image", "")
        return
    }
})
