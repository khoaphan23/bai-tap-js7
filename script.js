var arrNam = [];
var arrNu = [];

function save(){
    var select1 = document.getElementById('showall').value;
    var input = document.getElementById('image');
    var file = input.files[0]; // Get the selected file
    var reader = new FileReader();

    reader.onload = function(e) {
        var imageData = e.target.result; // Get the data URL of the image
        var a = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            code: document.getElementById('code').value,
            price: document.getElementById('price').value,
            image: imageData, // Set the image data URL
        }

        if (select1 === 'nam') {
            arrNam.push(a);
        } else if (select1 === 'nu') {
            arrNu.push(a);
        }

        console.log(a);
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(file);
}

function showman() {
    var html = '';
    for (var i = 0; i < arrNam.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + arrNam[i].id + "</td>";
        html += "<td>" + arrNam[i].name + "</td>";
        html += "<td>" + arrNam[i].code + "</td>";
        html += "<td>" + arrNam[i].price + "</td>";
        html += "<td><img src='" + arrNam[i].image + "' alt='Image' style='width: 50px; height: 50px;'></td>";
        html += "</tr>";
    }
    document.getElementById('tblman').innerHTML = html;
}

function showwoment() {
    var html = '';
    for (var i = 0; i < arrNu.length; i++) {
        html += "<tr>";
        html += "<td>" + (i + 1) + "</td>";
        html += "<td>" + arrNu[i].id + "</td>";
        html += "<td>" + arrNu[i].name + "</td>";
        html += "<td>" + arrNu[i].code + "</td>";
        html += "<td>" + arrNu[i].price + "</td>";
        html += "<td><img src='" + arrNu[i].image + "' alt='Image' style='width: 50px; height: 50px;'></td>";
        html += "</tr>";
    }
    document.getElementById('tblwoment').innerHTML = html;
}

function reset(){
    document.getElementById('id').value='';
    document.getElementById('name').value='';
    document.getElementById('code').value='';
    document.getElementById('price').value='';
    document.getElementById('image').value='';
}

function show() {
    showman();
    showwoment();
}
