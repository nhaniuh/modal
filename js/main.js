let but = document.querySelector("#but");
let modal = document.querySelector(".modal");
let plus = document.querySelector("#plus");
let clos = document.querySelector("#close");
let form = document.querySelector("form");
let inpmsnv = document.querySelector("#msnv");
let inpname = document.querySelector("#tennv");
let date = document.querySelector("#date");
let radios = document.getElementsByName("chucvu");
console.log(radios);
let cb = document.querySelector("#select");
let hes = document.querySelector("#heso");
let tab = document.querySelector("table");
let i = 0;
hes.value = 1.82;
let loimsnv = document.querySelector(".loimsnv");
let loiname = document.querySelector(".loitenvn");
let loidate = document.querySelector(".loidate");

function kiemtra() {
    let heso = 1.82;
    if (cb.value == "Bac1") {
        heso = 1.82;
    } else if (cb.value == "Bac2") {
        heso = 1.82 * 2;
    } else if (cb.value == "Bac3") {
        heso = 1.82 * 3;
    } else {
        heso = 1.82 * 4;
    }
    hes.value = heso;
}
but.addEventListener("click", function() {
    modal.classList.add("modal2");
})
clos.addEventListener("click", function(e) {
    e.preventDefault();
    inpmsnv.value = "";
    inpname.value = "";
    date.value = "";
    cb.value = "Bac1";
    hes.value = "1.82";
    modal.classList.remove("modal2");
})
let inp = /^FIT-\d{5}$/

function msnv() {

    inpmsnv.addEventListener("focus", function(e) {
        if (!inp.test(e.target.value)) {
            inpmsnv.style.border = "1px solid red";
            loimsnv.classList.add("loi");
        } else {
            inpmsnv.style.border = "black";
            loimsnv.classList.remove("loi");
        }
    })
    inpmsnv.addEventListener("input", function(e) {
        if (!inp.test(e.target.value)) {
            inpmsnv.style.border = "1px solid red";
            loimsnv.classList.add("loi");
        } else {
            inpmsnv.style.border = "black";
            loimsnv.classList.remove("loi");
        }
    })

}
// let test2 = inpname.value.trim();
function tennv() {
    let test3 = /^[A-Z][a-z à-ỵ]+(\s[A-Z][a-z à-ỵ]+)+$/
    inpname.addEventListener("focus", function(e) {
        if (!test3.test(e.target.value)) {
            inpname.style.border = "1px solid red";
            loiname.classList.add("loi");
        } else {
            inpname.style.border = "1px solid black";
            loiname.classList.remove("loi");
        }
    })
    inpname.addEventListener("input", function(e) {
        if (!test3.test(e.target.value)) {
            inpname.style.border = "1px solid red";
            loiname.classList.add("loi");
        } else {
            inpname.style.border = "1px solid black";
            loiname.classList.remove("loi");
        }
    })
}

function ngay() {

    date.addEventListener("focus", function() {
        let test4 = date.value.trim();
        let test5 = parseInt(test4.slice(0, 4));
        if (test4 === "" || test5 > 2022) {
            date.style.border = "1px solid red";
            loidate.classList.add("loi");
        } else {
            date.style.border = "1px solid black";
            loidate.classList.remove("loi");
        }
    })
    date.addEventListener("input", function() {
        let test4 = date.value.trim();
        let test5 = parseInt(test4.slice(0, 4));
        if (test4 === "" || test5 > 2022) {
            date.style.border = "1px solid red";
            loidate.classList.add("loi");
        } else {
            date.style.border = "1px solid black";
            loidate.classList.remove("loi");
        }
    })
}
plus.addEventListener("click", function(e) {
    e.preventDefault();
    let chucvu = "";
    for (let r of radios) {
        if (r.checked) {
            if (r.id == "canbo") {
                chucvu = "Cán Bộ Cao Cấp";
            } else {
                chucvu = "Nhân Viên";
            }
        }
    }
    if (inpmsnv.value.trim() === "" || inp.test(inpmsnv.value.trim())) {
        inpmsnv.style.border = "1px solid red";
        loimsnv.classList.add("loi");
        msnv();
    } else if (!test3.test(inpname.value.trim()) || inpname.value.trim() === "") {
        inpname.style.border = "1px solid red";
        loiname.classList.add("loi");
    } else if (chucvu === "") {
        alert("Loi cv");
    } else {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        i++;
        td1.textContent = i;
        td2.textContent = inpmsnv.value.trim();
        td3.textContent = inpname.value.trim();
        td4.textContent = date.value.trim();
        td5.textContent = chucvu;
        td6.textContent = cb.value;
        tr.append(td1, td2, td3, td4, td5, td6);
        tab.append(tr);
        modal.classList.remove("modal2");
        inpmsnv.value = "";
        inpname.value = "";
        date.value = "";
        // for (let j of radios) {
        //     j.disabled = true; // Vô hiệu hóa tất cả các radio button
        // }
        cb.value = "Bac1";
    }

})
cb.addEventListener("change", function() {
    kiemtra();
});
modal.addEventListener("click", function(e) {
    if (!form.contains(e.target)) {
        inpmsnv.value = "";
        inpname.value = "";
        date.value = "";
        cb.value = "Bac1";
        hes.value = "1.82";
        // for (let j of radios) {
        //     j.disabled = true; // Vô hiệu hóa tất cả các radio button
        // }
        modal.classList.remove("modal2");
    }
})
class nhanvien {
    constructor(stt, name, date, cv, cb) {
        this.stt = stt;
        this.name = name;
        this.date = date;
        this.cv = cv;
        this.cb = cb;
    }
}