let videos = [
    {
        name: "Рыжуху ебут в очко",
        photo: "https://peepeebabes.org/uploads/posts/2021-03/1615337024_41-p-zhestkaya-yeblya-v-anal-porno-45.jpg",
        description: "Рыжая сука раздвигает ноги альфа самцу",
        video: "https://x1.cdnxe.com/x1//upload_4dec1313792708acc97de80ed6a6c00a/23195/JOPORN_NET_23195_720p.mp4?video=OGY5NjFhZmY0NDNjYWVjYWFjYjc4Njg5YzM4MDdlZTI=&time=1630116153&ip=91.243.109.191"
    },
    {
        name: "Лысый из браззерс ебет",
        video: "https://www.pornfappy.com/get_file/1/5c688473e2e14aa56113b4ddd88ea87bc10540926d/161000/161779/161779.mp4/?embed=true&rnd=1630120048966",
        description: "Тестовое описание"
    },
    {
        name: "Сука прыгает на хую",
        video: "https://www.pornfappy.com/get_file/1/3cd58c78cf76a70dd08f5e8c7f3da26b8b65c2fa3d/136000/136582/136582.mp4/?embed=true&rnd=1630120206795",
        description: "Тестовое описание"
    },
    {
        name: "Четвертое видео",
        video: "https://porno365.contact/get_file/1/897fd298cc2544080b7feda2f361955b/5000/5505/5505.mp4/?rnd=1630120444673",
        description: "Тестовое описание"
    },
    {
        name: "Второе видео",
        photo: "https://peepeebabes.org/uploads/posts/2021-03/1615337024_41-p-zhestkaya-yeblya-v-anal-porno-45.jpg",
        description: "Тестовое описание"
    },
    {
        name: "Второе видео",
        photo: "https://peepeebabes.org/uploads/posts/2021-03/1615337024_41-p-zhestkaya-yeblya-v-anal-porno-45.jpg",
        description: "Тестовое описание"
    },
    {
        name: "Второе видео",
        photo: "https://peepeebabes.org/uploads/posts/2021-03/1615337024_41-p-zhestkaya-yeblya-v-anal-porno-45.jpg",
        description: "Тестовое описание"
    },
    {
        name: "Второе видео",
        photo: "https://peepeebabes.org/uploads/posts/2021-03/1615337024_41-p-zhestkaya-yeblya-v-anal-porno-45.jpg",
        description: "Тестовое описание"
    },
];

let categorie = document.querySelectorAll(".categorie");
let categories = document.querySelector(".categories");
let modalWindow = document.createElement("div");
    modalWindow.classList.add("modalWindow", "modalWindowShow");

categorie.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.classList.add("clicked");
        let categorieName = elem.getAttribute("data-categorieName");
        categories.classList.add(categorieName, "clickedCategorie");
        categorie.forEach(elem2 => {
            elem2.classList.add("rotate")
        })
        elem.addEventListener("animationend", () => {
            document.querySelector("h1").remove();
            categories.innerHTML = "";
            if(categorieName == "anal"){
                 videos.forEach((elem) => {
                    let video = document.createElement("div");
                    video.classList.add("categorie", "video",  "rotationend");
                    video.addEventListener("click", (event) => {
                        modalWindow.innerHTML = 
                        `
                            <div class="modalWindowContent">
                                <div class="modalWindowTitle">
                                    ${elem.name}
                                    <div class="modalWindowVideo">
                                    <video class="pornVideo" src="${elem.video}" controls></video>
                                </div>
                                </div>
                                <div>
                                    <div class="modalWindowDescription">
                                    ${elem.description}
                                    </div>
                                </div>
                            </div>
                        `;
                        document.body.append(modalWindow);
                        document.querySelector("#blured").style.filter = "blur(10px)";
                    })
                    video.innerHTML = 
                    `
                    <div class="categorie-name">
                        ${elem.name}
                    </div>
                    <div class="categorie-photo">
                        <video src="${elem.video}"></video>
                    </div>
                    <div class="categorie-description">
                        ${elem.description}
                    </div>
                    `;
                    categories.append(video);
                 });
            }
        })
    })
})