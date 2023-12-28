
var modalDel = document.querySelector("#modalDel")

var modalNew = document.querySelector("#modalNew")

var mask = document.querySelectorAll(".mask");

var yes = document.querySelector("#yes")

var no = document.querySelector("#no")

var deleteList = document.querySelectorAll(".delete");

var create = document.querySelector(".create-new")

var close = document.querySelector("#closeModal");

close.addEventListener("click", (e) => {
    modalNew.classList.toggle("show")
    preview.innerHTML = `
    <p>No files currently selected for upload</p>
    `;
})

yes.addEventListener("click", (e) => {
    modalDel.classList.toggle("show")
})
no.addEventListener("click", (e) => {
    modalDel.classList.toggle("show")
})

deleteList.forEach((item) => {
    item.addEventListener("click", (e) => {
        modalDel.classList.toggle("show")
    })
})
mask.forEach((item) => {
    item.addEventListener("click", (e) => {
        if (modalDel.classList.toggle("show")) {
            modalDel.classList.toggle("show")
        }
        if (modalNew.classList.toggle("show")) {
            modalNew.classList.toggle("show")
            const para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.innerHTML = `${para}`;
        }

    })
})

create.addEventListener("click", (e) => {
    modalNew.classList.toggle("show")
})

const input = document.querySelector("#newFile");
const preview = document.querySelector(".preview");

input.addEventListener("change", updateImageDisplay);

function updateImageDisplay() {
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    const curFiles = input.files;
    if (curFiles.length === 0) {
        preview.innerHTML = `
        <p>No files currently selected for upload</p>
        `;
    } else {
        const list = document.createElement("ol");
        preview.appendChild(list);

        for (const file of curFiles) {
            const listItem = document.createElement("li");
            const para = document.createElement("p");
            if (validFileType(file)) {
                para.textContent = `File name ${file.name}, file size ${returnFileSize(
                    file.size,
                )}.`;
                const image = document.createElement("img");
                image.src = URL.createObjectURL(file);
                image.alt = image.title = file.name;

                listItem.appendChild(image);
                listItem.appendChild(para);
            } else {
                para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
                listItem.appendChild(para);
            }

            list.appendChild(listItem);
        }
    }
}
const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
];

function validFileType(file) {
    return fileTypes.includes(file.type);
}

function returnFileSize(number) {
    if (number < 1024) {
        return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
        return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
        return `${(number / 1048576).toFixed(1)} MB`;
    }
}
