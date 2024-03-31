import {api} from "./api.js";
// ------------------------------------------------------------------------//
const z = document.querySelector.bind(document);
const zz = document.querySelectorAll.bind(document);
// Day mang len storage----------------------------------------------------------------------
const websiteComic = api.web;
    //  Xu ly khi nguoi dung muon tron gia tri lan dau
let overLay = z("#over-lay");
let arrayComic = [];
let getGenre = api.genre;
let webCookies = z('#web-cookies');
// Xu ly cookies 
let cookieBtns = zz('.web-cookies_btn > span');
let closeCookies = z('#web-cookies > i');
let isChoose = localStorage.getItem('isChoose');
if (isChoose == null) {
    webCookies.style.bottom = '0%';
    handleUserCookies();
}
if(isChoose == 0) {
        webCookies.style.bottom = '0%';
    handleUserCookies();
}
    // xu ly cac hop them truyyen tranh
    function handleUserCookies() {
        cookieBtns[0].onclick = () => {
            overLay.classList.add('close');
            webCookies.style.bottom = '-100%';
            let resetArray = confirm('Bạn có chắc chắn rằng đưa trang web về mặc định (không có truyện)');
            if (resetArray == 1) {
                localStorage.setItem('myArray', JSON.stringify(arrayComic));
                localStorage.setItem('genreApi', JSON.stringify(getGenre));
                localStorage.setItem('isChoose', 1);
                location.reload();
            } else {
                console.log("Không reset truyện tranh!");
            }
        }
        cookieBtns[1].onclick = () => {
            webCookies.style.bottom = '-100%';
            localStorage.setItem('isChoose', 1);
            localStorage.setItem('myArray', JSON.stringify(arrayComic));
            localStorage.setItem('genreApi', JSON.stringify(getGenre));
            location.reload();
        }
        closeCookies.onclick = () => {
            overLay.classList.add('close');
            webCookies.style.bottom = '-100%';
            location.reload();
        }
       
    } 
// Xu ly dong mo box demo
let closeBtn = z('.box-close');
let boxHead = z('.box-head')
let extraComic = z('#extra-comic');
let anotherWeb = z('#another_web');
// Cac phan tu cua hop them truyen tranh
let extraName = z('.extra-name');           
let extraImg = z('.extra-img');                 
let extraChap = z('.extra-chap');
let extraHref = z('.extra-link');
let extraGenre = z('.extra-genre');
let extraCharacter = z('.extra-character');
const demoImg = z('.demo_img');
const demoName = z('.demo_name');
const demoChap = z('.demo_chap');
const demoRead = z('.demo_read');
const demoComic= z('.demo_comic');
const demoGenre= z('.wrap_row2 .demo_genre');
const demoCharacter= z('.demo_character');
let typeComic = z('#type-comic');
let boxBtns = zz('.box-btn');
let comicNavInfor = z('.comic-nav_infor > span');

const settingBtn = z('#setting');
let boxDeleteBtn = z('.box-delete');
let extraBtn = z('#web-extra');
let widthScreen = screen.width;
var today = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"})

/* --------------------------BAT DAU CHAY CHUONG TRINH------------------------ */

//  Ham su ly khi ta dong mo hop them truyen tranh------------------------------
function handleBoxDemo(){
    settingBtn.addEventListener('click', () => {handlePlusBtn()})      
    extraBtn.onclick = () => {handlePlusBtn()}
    closeBtn.addEventListener('click', ()=> {
        extraComic.classList.add('close');
        overLay.classList.add('close');
        z('.list-nav').classList.remove('open');
            navIcon.classList.remove('close');
            closeNavIcon.classList.add('close');
        resetForm();
        z('.list-nav').classList.remove('close');
    })
    overLay.addEventListener('click', () => {
        extraComic.classList.add('close');
        overLay.classList.add('close');
        resetForm();
        z('.list-nav').classList.remove('close');
    })
} ;
function handlePlusBtn() {
     boxBtns[1].classList.add('close');
        boxBtns[0].classList.remove('close');
        extraComic.classList.remove('close');
        overLay.classList.remove('close');
        boxDeleteBtn.classList.add('close');
        resetForm(); handleValueInput(); handleExtraComic();
        boxHead.innerText = "Thêm truyện tranh";
        z('.list-nav').classList.add('close');
        //  Day gia tri truyen khi ban cap nhat len he thong
        localStorage.setItem('updateChap', new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}))        
}
// Xu ly mang truyen tranh-------------------------------------------------------------------
let listComic = z('#list-comic');
// Load trang web khi nguoi dung truy cap vao trang
let getComic = JSON.parse(localStorage.getItem('myArray')).sort((a, b) => {return b.nameChap - a.nameChap;})
let originComic = getComic;
    if(originComic != 0) {
        handleRandomComic()
    }
function startWeb() {
    handleComic(); handleBoxDemo(); handleTimeUpdate(getComic);
} startWeb();

function handleNavList() {
    let closeNavIcon = z('#closeNavIcon');
    let navIcon = z('#navIcon');
    navIcon.classList.remove('close');
    navIcon.onclick = () => {
        navIcon.classList.add('close');
        closeNavIcon.classList.remove('close');
        z('.list-nav').classList.add('open');
        overLay.classList.remove('close');
        closeNavIcon.onclick = () => {
            navIcon.classList.remove('close');
            closeNavIcon.classList.add('close');
            z('.list-nav').classList.remove('open');
            overLay.classList.add('close');
        }
        overLay.style.background = 'rgba(0,0,0,0.2)';
        overLay.onclick = () => {
            z('.list-nav').classList.remove('open');
            navIcon.classList.remove('close');
            closeNavIcon.classList.add('close');
            overLay.classList.add('close');
            boxGenre.style.top = "-200%";
        }
    }
}handleNavList();
//  Chen link googlesheet vao website
(function handleGoogleSheet() {
    let linkGoogle = z('#export_api');
    let getLink = localStorage.getItem('googleSheet');
    if ( getLink!= null) {
        linkGoogle.href = getLink;
    }
})();
    // Tao truyen de xuat cho website
function handleRandomComic() {
    let getRandom = Math.floor(Math.random() * originComic.length);
    let randomImg = z('.comic-random_img');
        randomImg.src = originComic[getRandom].imgHref;
    let randomBackground = z('.comic-random_background');
        randomBackground.src = originComic[getRandom].imgHref;
    let randomName = z('.comic-random_name');
        randomName.innerText = originComic[getRandom].nameComic;
    let randomLink = z('.random_links-comic');
        randomLink.href = originComic[getRandom].nameHref;
    let randomChap = z('.random_links-chap');
        randomChap.href = originComic[getRandom].chapterHref;
    z('.random_links-chap span').innerText = originComic[getRandom].nameChap
    let randomGenre = z('.comic-random_genre');
    let x = originComic[getRandom].arrGenre.length;
    for (let i = 0; i < x; i++) {
        let span = document.createElement('span');
        span.innerText = originComic[getRandom].arrGenre[i];
        randomGenre.appendChild(span);
    }
} ;
    // Tao danh sach truyen theo the loai 
function handleListComic() {
    const comicGenreBox = z('.comic-genre_box');
    const comicGenreTitle = z('.comic-genre_title div');
    const arrGenre = api.genre;
    if (getComic != null) {
        function handleArr() {
            const arr = [];
            for (let i = 0; i < arrGenre.length; i++ ){
                let genre = arrGenre[i].name.toLowerCase();
                let x = getComic.filter((e) => {
                    return e.listGenre.toLowerCase().includes(genre);
                })
                arr.push({
                    nameGenre : genre,
                    arrComic: x
                });
            }
            let newArr = arr.filter((item) => {
                return item.arrComic.length >= 1;
            })
            let random = Math.floor(Math.random() * newArr.length);
            comicGenreTitle.innerText = "Danh sách truyện theo thể loại: " + newArr[random].nameGenre;
            let currentComic = newArr[random].arrComic.sort((a, b) => {return b.nameChap - a.nameChap;})
            comicGenreBox.innerHTML = currentComic.map(renderComic).join("");
        } handleArr();
    }
    function renderComic(item) {
        let {nameComic, nameChap, imgHref, nameHref, chapterHref} = item;
        return (`
        <div class="genre_box-item">
            <a href=${nameHref} target="_blank" class="box-item_link">
                <img src=${imgHref} alt="">
            </a>
            <a href=${nameHref} target="_blank" class="box-item_name name">${nameComic}</a>
            <a href=${chapterHref} target="_blank" class="box-item_chap">
                <p>Đọc tiếp: <span class="item_chap-num"> Chương ${nameChap}</span></p>
            </a>
        </div>
        
        `)
    }
} handleListComic();
// Xu ly khi ban nhap du lieu vao o the loai
        // SUA TRUYEN, DUA TRUYEN LEN LOCAL STORAGE-----------------------------
    function handleArrayComic(){   
        getComic.push(getComicValue());
        localStorage.setItem('myArray', JSON.stringify(getComic));
    } ;
        // POST TRUYEN, THEM TRUYEN LEN LOCAL STORAGE------------------------------------------------
        function handleExtraComic() {z('.list-nav').classList.remove('open');
        navIcon.classList.remove('close');
        closeNavIcon.classList.add('close');
            boxBtns[0].addEventListener('click', () => {
                let answerUser = confirm("Bạn có muốn thêm truyện vào không?");
                if(answerUser == 1){
                    handleArrayComic(); handleComic();
                    resetForm();
                    // Reset lại trang
                    // location.reload();
                } else{
                    resetForm();
                    console.log("Bạn không muốn thêm truyện tranh");
                }
            })
        }
//  Su dung de tao phan bo loc truyen tranh----------------
    // Kieu truyen
let navTypeBtn = zz('.comic-nav_type > li');
    navTypeBtn.forEach((btn, index) => {
        navTypeBtn[0].onclick = () => {    
            z('.comic-nav_type > li.choose-btn').classList.remove('choose-btn'); 
            listComic.innerHTML = getComic.map(renderComic).join("");
            handleComicItem(getComic); handleTimeUpdate(getComic);
            navTypeBtn[0].classList.add('choose-btn');
            comicNavInfor.innerText = navTypeBtn[0].innerText;
        }
        btn.onclick = () => {
            let typeBtnChoose = z('.comic-nav_type > li.choose-btn');
            typeBtnChoose.classList.remove('choose-btn');
            if(index !== 4) {
                comicNavInfor.innerText = btn.innerText;
                handleFilterTypeComic(navTypeBtn[index]);

            } else {
                navTypeBtn[0].classList.add('choose-btn');
                comicNavInfor.innerText = navTypeBtn[0].innerText;
            }
        };
    })
    // Tao bo loc tim ten truyen tranh 
    navTypeBtn[4].addEventListener('click', () => {
        listComic.innerHTML = getComic.map(renderComic).join("");
        handleComicItem(getComic); handleTimeUpdate(getComic);
    })
    navTypeBtn[4].addEventListener('keyup', (e) => {
        let getValueInput = e.target.value.toLowerCase();
        let newGetComic = getComic.filter((item) => {
            return item.nameComic.toLowerCase().includes(getValueInput)
        })
        listComic.innerHTML = newGetComic.map(renderComic).join("");
        handleComicItem(newGetComic); handleTimeUpdate(newGetComic);
    })
    // The loai

//  Them danh sach The loai--------------------------------------
let listGenre = z('#list-genre');
let genreWeb = z('.genre-web');
let boxGenre = z('#web-genre');
let titleBoxGenre = z('.web-genre_head');
const genreTypeBtn = zz('.web-genre_type span');
genreTypeBtn.forEach((btn, index) => {
    btn.onclick = () => {
        z('.web-genre_type span.choose').classList.remove('choose');
        btn.classList.add('choose');
        let getWebsite = websiteComic.filter((web) => {
            return web.genreWebsite == btn.getAttribute('id');
        })
        listGenre.innerHTML = getWebsite.map(renderWebsite).join('');
    }
})
//  Them danh sach website---------------------------------------
let getWebsite = websiteComic.filter((web) => {
    return web.genreWebsite == "truyentranh";
})
anotherWeb.addEventListener("click", () => {
    titleBoxGenre.innerText = "Chọn các website bạn muốn đọc truyện tại đây!";
    boxGenre.style.top = "62px";
    overLay.classList.remove('close');
    z('.web-genre_type').style.display = 'flex';
    listGenre.innerHTML = getWebsite.map(renderWebsite).join('');
})
genreWeb.onclick = () => {
    boxGenre.style.top = "62px";
    overLay.classList.remove('close');
    z('.web-genre_type').style.display = 'none';
    titleBoxGenre.innerHTML = renderGenreHead();
    listGenre.innerHTML = getGenre.map(renderGenre).join('');
    let genreBtns = zz('#list-genre > li');
    genreBtns[0].classList.add('choose-btn');
    z('.genre_head').innerText = "Tất cả";
    z('.genre_head-num').innerText = getComic.length;
        genreBtns.forEach( (btn,index) => {
            genreBtns[0].onclick = () => {location.reload();}
            btn.onclick = () => {
                let genreBtnChoose = z('#list-genre > li.choose-btn');
                genreBtnChoose.classList.remove('choose-btn');
                handleFilterComic(genreBtns[index]);  
                comicNavInfor.innerText = btn.innerText;
            };
        })
}
overLay.onclick = () => {
    boxGenre.style.top = "-100%";
    overLay.classList.add('close');
}
function renderGenreHead() {
    return (`
    <div class="genre_head-title">
        <div>Chọn thể loại truyện bạn muốn tìm theo thể loại: </div>
        <span class="genre_head"></span> có:
        <span class="genre_head-num"></span> truyện
    </div>
    `)
}
    //  Tao bo loc the loai truyen tranh 
/*-----------------SUA TRUYEN, DUA TRUYEN LEN LOCAL STORAGE-------------------*/     
        // Xu ly khi xoa du lieu khi ta thoat khoi hop them truyen tranh----------------
        function resetForm(){
            extraName.value = "";
                demoName.innerText= "";
            extraImg.value = "";
                demoImg.src= "" ; 
            extraHref.value = "";
                demoRead.href= "" ;
            extraGenre.value = "";
                demoGenre.innerText= "" ;
            extraCharacter.value = "";
                demoCharacter.innerText= "" ;
            extraChap.value= "";
                demoChap.innerText= "" ;
        };

    //  Xu ly viec, tra ve  nguoi dung chon vao mot truyen tranh 
    function handleComicItem(getComic){
        const editBtns = zz('.comic-item > section');
        editBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                let currentComic = getComic[index];
                boxHead.innerHTML = 'Sửa truyện: ' + currentComic.nameComic;
                extraComic.classList.toggle('close');
                boxDeleteBtn.classList.remove('close');
                boxBtns[1].classList.remove('close');
                boxBtns[0].classList.add('close');
                overLay.classList.remove('close');
                    insertCurrentValue(currentComic);  handleValueInput(); 
                localStorage.setItem('updateChap', new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"}));
                //  xu ly link chap----------------------------------------------
                deleteComic(currentComic, originComic);
                getValueLocal(originComic, currentComic);
            })
        })
    } handleComicItem(getComic);
        function deleteComic(currentComic, originComic) {
            boxDeleteBtn.style.backgroundColor = '#a53838';
            boxDeleteBtn.style.borderRadius = '5px';
            boxDeleteBtn.onclick = () => {
                let removeComic = originComic.findIndex(item => item.nameComic == currentComic.nameComic);
                    originComic.splice(removeComic, 1 );
                let isAnswer = confirm('Bạn có muốn xóa truyện "' + currentComic.nameComic + '" hay không?');
                if (isAnswer == 1) {
                    console.log("Bạn đã xóa truyện!");
                    localStorage.setItem('myArray', JSON.stringify(originComic));
                    location.reload();
                } else {
                    console.log("No delete");
                }
            }
        }
    //  Sua truyen tranh-----------------------------------------------------------------------
        function getValueLocal(originComic, currentComic){
            boxBtns[1].addEventListener('click', () => {
                let removeComic = originComic.findIndex(item => item.nameComic == currentComic.nameComic);
                originComic.splice(removeComic, 1 );
                originComic.push(getComicValue());
                localStorage.setItem('myArray', JSON.stringify(getComic));
            })
        };
/*------------------CAC HAM XU LY MOT PHAN----------------------------------- */
    // ham dung de tao bo loc
function handleFilterTypeComic(btn) {
    btn.classList.add('choose-btn');
    let currentValue = btn.innerText; 
    let newGetComic = getComic.filter(item => item.typeComic == currentValue)
    listComic.innerHTML = newGetComic.map(renderComic).join("");
    handleComicItem(newGetComic); handleTimeUpdate(newGetComic);
}
function handleFilterComic(btn) {
    btn.classList.add('choose-btn');
    let currentValue = btn.innerText.toLowerCase(); 
    z('.genre_head').innerText = btn.innerText;
    let newGetComic = getComic.filter(item => item.listGenre.toLowerCase().includes(currentValue))
    z('.genre_head-num').innerText = newGetComic.length;
    listComic.innerHTML = newGetComic.map(renderComic).join("");
    handleComicItem(newGetComic); handleTimeUpdate(newGetComic);
}
//  thay doi gia tri duong link cua chap khi ban tang giam chap cua truyen hien tai
    //  Xu ly truyen tranh---------------------------------------
    function handleComic(){
        if (getComic != null) {
            let arrComic = getComic.sort((a, b) => {return b.nameChap - a.nameChap;})
            listComic.innerHTML = arrComic.map(renderComic).join("");
        }
    } 
    //  Tra lai du lieu cho trang web----------------------------
    function renderComic(item){
        let {nameComic, nameChap, imgHref, nameHref, nameCharacter, chapterHref} = item;
        return(`
        <div class="comic-item">
            <a href=${nameHref} class="comic-item_wrap" target="_blank">
                <img src=${imgHref} alt="" class="comic-img img">
                <ul>
                    <li>Main: <span>${nameCharacter}</span></li>
                </ul>
                <div class= "comic-time"></div>
            </a>
            <div>
                <div class="comic-name name">${nameComic}</div>
                <a href= ${chapterHref} class="comic-chap" target="_blank">
                    Đọc tiếp <b>Chapter ${nameChap}</b > >
                </a>
            </div>
            <section>Sửa</section>
        </div>
        `)
    }
    //  chen danh sach cac the loai truyen 
    function renderGenre(item) {
        let {name} = item;
        return (`
            <li>${name}</li>
        `)
    } 
    function renderWebsite(item) {
        let {linkComic, nameWebsite} = item;
        return (`
            <li><a href=${linkComic} target="_blank">${nameWebsite}</a></li>
        `)
    }
//  Them cac so trang cho truyen tranh---------------------------
(function pagination() {
	let thisPage = 1;
	let limit = 60;
	let list = zz('.comic-item');
	let listPage = z('.listPage');
	function loadItem(){
		let beginGet = limit * (thisPage - 1);
		let endGet = limit * thisPage - 1;
		list.forEach((item, key)=>{
			if(key >= beginGet && key <= endGet){
				item.style.display = 'block';
			}else{
				item.style.display = 'none';
			}
		})
		renderListPage()
		tabPage()
	}
	loadItem();
	function renderListPage() {
		let count = Math.ceil(list.length / limit);
		let prevPage = z('.prev-page')
		let nextPage = z('.next-page')
		if (thisPage != 1) {
			prevPage.classList.remove('close')
			prevPage.onclick = () => { thisPage--; loadItem()}
		} else if(thisPage == 1) {prevPage.classList.add('close')}
		listPage.innerHTML = '';
		for( var i = 1; i <= count; i++){
			let newPage = document.createElement('li');
			newPage.innerText = i;
			if(i == thisPage){
				newPage.classList.add('active');
			}
			listPage.appendChild(newPage)
		}
		if (thisPage != count) {
			nextPage.classList.remove('close')
			nextPage.onclick = () => {thisPage++; loadItem()}
		} else if (thisPage >= count ) {nextPage.classList.add('close')}
	}
	function tabPage() {
		let pages = zz('.listPage > li')
		pages.forEach((page, index)=> {
			page.addEventListener('click', ()=>{
				thisPage = index + 1
				loadItem()
			})
		})
	}
})();
//  Ham nay dung de xu ly thanh cong cu website------------------
(function handleNavWeb() {
    const navIcon = zz('.comic-nav_icon > i');
    let boxNavType = z('.comic-nav_type');
    const navInfor = z('.comic-nav_infor');
    navInfor.onclick = () => {
        boxNavType.classList.toggle('open');
        navIcon[0].classList.toggle('close');
        navIcon[1].classList.toggle('close');
    }
    navIcon[0].addEventListener('click', () => {
        boxNavType.classList.add('open');
        navIcon[0].classList.add('close');
        navIcon[1].classList.remove('close');
    })
    navIcon[1].addEventListener('click', () => {
        boxNavType.classList.remove('open');
        navIcon[1].classList.add('close');
        navIcon[0].classList.remove('close');
    })
})();
    // Xu ly viec lay gia tri khi nguoi dung nhap vao o input-----------------------
function handleValueInput() {
    extraName.oninput = () => {
        let name =  extraName.value;
        demoName.innerText = name;
    };
    extraCharacter.oninput = ()=> {
        let name =  extraCharacter.value;
        demoCharacter.innerText=  name;
    }
    extraHref.oninput = ()=> {
        let name =  extraHref.value;
        demoRead.setAttribute('href', name);
    }
    extraImg.oninput = () => {
        let src = extraImg.value;
        demoImg.setAttribute('src', src);
    };
    typeComic.onclick = () => {
        let getValue = typeComic.value;
        demoComic.innerText = getValue;
    }
    //  tao chuc nang tim kiem ten website va them duong link chuong truyen
    extraChap.oninput = () => {
        let chap =  extraChap.value;
        demoChap.innerText = "Chapter " + chap;
        for (let i = 0; i < websiteComic.length; i++) {
            if(demoRead.getAttribute('href').includes(websiteComic[i].nameWebsite)) {
                localStorage.setItem('indexWebsite', i);
            } 
        }
        handleLinkChapter(demoRead.getAttribute('href'), chap);
    };
    extraGenre.oninput = () => {
        let name =  extraGenre.value.toLowerCase();
        demoGenre.innerText=  name;
    };
};
    // Xu ly viec lay gia tri the input, dua vao object-----------------------------
function getComicValue() {
    let newComic = {
            nameComic:      demoName.innerText,
            imgHref:        demoImg.getAttribute('src'),
            nameHref:       demoRead.getAttribute('href'),
            nameCharacter:  demoCharacter.innerText,
            typeComic:      demoComic.innerText,
            nameChap:       demoChap.innerText.replace('Chapter ', ''),
            chapterHref:    localStorage.getItem('chapterHref'),
            arrGenre:       demoGenre.innerText.split(', '),
            listGenre:      demoGenre.innerText,
            updateChap:     localStorage.getItem('updateChap')
    }
    return newComic
};
    // Chen gia tri vao the input
function insertCurrentValue(currentComic) {
    extraName.value = currentComic.nameComic;
    extraCharacter.value = currentComic.nameCharacter;
    extraHref.value = currentComic.nameHref;
    extraImg.value = currentComic.imgHref;
    extraChap.value = currentComic.nameChap;
    extraGenre.value = currentComic.listGenre;
        demoName.innerText= currentComic.nameComic;
        demoCharacter.innerText= currentComic.nameCharacter ;
        demoRead.href= currentComic.nameHref ;
        demoImg.src= currentComic.imgHref ; 
        demoChap.innerText= "Chapter " + currentComic.nameChap ;
        demoGenre.innerText= currentComic.listGenre ;
        demoComic.innerText = currentComic.typeComic;
    localStorage.setItem('chapterHref', currentComic.chapterHref);
} 
//  Xu ly thoi gian cap nhat truyen--------------------------
function handleTimeUpdate(getComic) {
    let comicItems = zz('.comic-time');   
    let getToDay = (today.split(','))[0].split('/');
    let getTime = (today.split(','))[1].replace(/ /g, '').slice(0, -2).split(':');
    for (let i = 0; i < getComic.length; i++ ) {
        renderUpdateChap(getComic[i].updateChap, i);
    }
    function renderUpdateChap(passDay, index) {
        let getPassDay = (passDay.split(','))[0].split('/');; 
        let getPassTime = (passDay.split(','))[1].replace(/ /g, '').slice(0, -2).split(':');
        let getMeridiumCurrent = today.split(' ')[2]
        let getMeridiumPass = passDay.split(' ')[2]
        //  Xu ly viec khi ban vao trang truyen tranh -------------------------------------------------------
        let getSecond = +(getTime[2] - (getPassTime[2]));
        let getMinute = +(getTime[1] - (getPassTime[1]));
        let getDay = +(getToDay[1] - getPassDay[1]);
        let getMonth = +(getToDay[0] - getPassDay[0]);
        let getYear = +(getToDay[2] - getPassDay[2]);
        // Xu ly thoi gian getTime
            if (getMeridiumCurrent== getMeridiumPass) {
                let getHour = +(getTime[0] - (+getPassTime[0]));
                handleUpdateChap(getHour)
            } else {
                let getHour = 12 + (+getTime[0]) - (+getPassTime[0]);
                handleUpdateChap(getHour)
            }
        //  Tao ra gia tri de chen vao comic-time0
        function handleUpdateChap(getHour) {

            if (getYear == 0) {
                //  Xu ly so nam
                if (getMonth == 0) {
                    //  Xu ly so thang
                    if (getDay == 0) {
                        //  Xu ly so ngay
                        if (getHour == 0 ) {
                            //  Xu ly so gio
                            if (getMinute == 0) {
                                //  Xu ly so phut
                                if (getSecond > 0) {
                                    comicItems[index].innerText =  getSecond + " giây trước";
                                }
                                else {
                                    let newSecond = 60 + (+getTime[2]) - (+getPassTime[2])
                                    comicItems[index].innerText =  newSecond + " giây trước";
                                }
                            } else if (getMinute > 0){
                                comicItems[index].innerText =  getMinute + " phút trước";
                            } else {
                                let newMinute = 60 + (+getTime[1]) - (+getPassTime[1]);
                                comicItems[index].innerText =  newMinute + " phút trước";
                            }
                        } else if(getHour ==1){
                            let newMinute = 60 + (+getTime[1]) - (+getPassTime[1]);
                            if (newMinute < 60){
                                comicItems[index].innerText =  newMinute + " phút trước";
                            } else {
                                comicItems[index].innerText =  1 + " giờ trước";
                            }
                        } else {
                            comicItems[index].innerText =  getHour + " giờ trước";
                        }
                    } else if(getDay ==1){
                        if (getMeridiumPass == getMeridiumCurrent) {
                            let newHour = (24 - (+getPassTime[0]))  + (+getTime[0]);
                            if(newHour < 24) {
                                comicItems[index].innerText =  newHour + " giờ trước";
                            } else {
                                comicItems[index].innerText =  1 + " ngày trước";
                            }
                        } else {
                            comicItems[index].innerText =  1 + " ngày trước";
                        }
                    } else {
                        comicItems[index].innerText =  getDay + " ngày trước";
                    }
                } else if(getMonth ==1){
                    handleMonth(getPassDay[2], getPassDay[0])
                } else {
                    comicItems[index].innerText =  getMonth + " tháng trước";
                }
            
            } else {
                comicItems[index].innerText =  getYear + " năm trước";
            }
        }
        
        function handleMonth(year, month) {
            let day ;
            switch (month)
            {
                case 4: ;case 6: ;case 9: ;case 11: ;
                    day =  30;
                    renderMonth(day);
                    break;
                case 2:
                    //nếu năm nhập vào là năm nhuận thì tháng 2 sẽ có 29 ngày
                    if (year% 4 == 0 ) {
                        day =  29;
                        renderMonth(day);
                        break;
                    }
                    //ngược lại nếu không phải năm nhuận thì tháng 2 sẽ có 28 ngày
                    else {
                        day =  28;
                        renderMonth(day);
                    break;
                    }
                default: {
                    day = 31;
                    renderMonth(day);
                }
            };
            function renderMonth(day) {
                let newDay = day + (+getToDay[1]) - (+getPassDay[1]);
                if (newDay <= day) {
                    comicItems[index].innerText =  newDay + " ngày trước";
                } else {
                    comicItems[index].innerText =  "1 tháng trước";
                }
            }
        }
    }
    
} ;
function handleLinkChapter(nameHref, nameChap) {
    let getIndexWebsite = localStorage.getItem('indexWebsite');
    switch (websiteComic[getIndexWebsite].nameWebsite) {
    // -----------------------------------------------------------//
        case "goctruyentranh":
        case "sstruyen":
        case "truyenfull":
        case "trumtruyen":
        case "truyentranh18":
        case "wattpad": {
            let createLinkChap = nameHref + '/chuong-' + nameChap;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }; 
    // -----------------------------------------------------------//
        case "manga.io":
        case "truyenvn":
        case "truyen18.xyz": {
            let createLinkChap = nameHref + "/chapter-" + nameChap;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        };
    // -----------------------------------------------------------//
        case "a3manga": {
            let getNameComic = nameHref.split('/')[4];
            let createLinkChap = websiteComic[getIndexWebsite].linkComic + getNameComic +
                '-chap-' + nameChap;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        case "manhuavn": {
            let getNameComic = nameHref.split('/')[3].replace('0', 'chapter-' + nameChap);
            let createLinkChap = websiteComic[getIndexWebsite].linkComic 
                +'/doc-truyen/'+ getNameComic;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        case "thichdoctruyen": {
            let getNumberComic =  nameHref.split('-')[nameHref.split('-').length -1];
            let valueReplace = '/chuong-' + nameChap + '-' + getNumberComic + '.html';
            let getNameComic = nameHref.split('/')[4].replace(getNumberComic, valueReplace);
            let createLinkChap = websiteComic[getIndexWebsite].linkComic 
                +'/doc-truyen/'+ getNameComic;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        case "thichtruyen": { 
            let getNameComic = nameHref.split('/')[4];
            if (nameChap < 10) {
                let createLinkChap = websiteComic[getIndexWebsite].linkComic 
                    +'/doc-truyen/'+ getNameComic + '-chuong-0' + nameChap;
                localStorage.setItem('chapterHref', createLinkChap);
            } else if(nameChap >= 10) {
                let createLinkChap = websiteComic[getIndexWebsite].linkComic 
                +'/doc-truyen/'+ getNameComic + '-chuong-' + nameChap;
                localStorage.setItem('chapterHref', createLinkChap);
            }
            break;
        }
        case "timtruyen3s": {
            let getNameComic = nameHref.replace(nameHref.split('-')[0], 'doc');
            let getLinkChap = getNameComic.replace('.html', "-chuong-" + nameChap + ".html")
            let createLinkChap = websiteComic[getIndexWebsite].linkComic + getLinkChap ;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }  
        case "tamtruyen": {
            let createLinkChap = nameHref + '/' + nameChap;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        case "damconuong": {
            let createLinkChap = nameHref + '/' + "ch-" + nameChap;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        case "truyenqq": {
            let createLinkChap = nameHref + '-chap-' + nameChap + '.html';
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        case "tuoitho": {
            let createLinkChap = nameHref + '/chap-' + nameChap + '.html';
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        case "truyenyy": {
            let createLinkChap = nameHref + 'chuong-' + nameChap + '.html';
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        case "truyentranhs.com": {
            let createLinkChap = nameHref + '/chap-' + nameChap;
            localStorage.setItem('chapterHref', createLinkChap);
            break;
        }
        //  Nhung trang web khong lay duoc du lieu toi chuong truyen
        case "nettruyen": ; case "baotangtruyen": ; case "comics24h": ; case "congtruyen": ; case "blogtruyen": ; case "nhattruyen": ; case "doctruyen3q": ; case "truyenbest": ; case "acomics": ; case "abtruyen": ; case "tctruyen": ; case "truyenchu": ; case "truyendoc": ; case "doctruyentranh": ; case "alotruyentranh": ; case "truyengihot": ; case "hentai24h": ; case "hentaivv": ;
        case "acomics":{
            localStorage.setItem('chapterHref', nameHref);
            break;
        }
        default: {
            localStorage.setItem('chapterHref', nameHref);
        }

    // -----------------------------------------------------------//
    }
}
