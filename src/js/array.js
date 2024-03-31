
import {api, websiteComic} from "./api.js";
const z = document.querySelector.bind(document);
const zz = document.querySelectorAll.bind(document);

let textArea = z('textarea');
let getComic = JSON.parse(localStorage.getItem('myArray')).sort((a, b) => {return b.nameChap - a.nameChap;})
textArea.innerText = localStorage.getItem('myArray');
let boxGenre = z('.box-genre');
let listGenre = z('.box-genre_list');
listGenre.innerHTML = api.genre.map(renderGenre).join('');
let comicNum = z('.comic_num');
let comicGenre = z('.comic_genre');
let typeComic = z('.type_comic');
let searchInput = z('.search-comic')
comicNum.innerText = getComic.length;
comicGenre.innerText = "Tất cả";
// listGenre
let genreIcon = z('.genre_icon');
let overLay = z('#over-lay');
let widthScreen = screen.width;
z('.box-infor').style.background = 'rgb(48, 46, 46)';
if(widthScreen > 480) {
    genreIcon.onclick = () => {
        boxGenre.style.top = '7%';
        overLay.classList.remove('close');
        z('.box-infor').style.top ="-25%";
    }
    overLay.onclick = () => {
        boxGenre.style.top = '-100%';
        overLay.classList.add('close');
        z('.box-infor').classList.remove('fixed');
        z('.box-infor').style.top ="0%";
    }
} else {
    genreIcon.onclick = () => {
        boxGenre.style.top = '7%';
        z('.box-infor').classList.add('fixed');
        overLay.classList.remove('close');
        z('.box-infor').style.background = 'rgb(48, 46, 46)';
    }
    overLay.onclick = () => {
        boxGenre.style.top = '-100%';
        overLay.classList.add('close');
        z('.box-infor').classList.remove('fixed');
    }
}
(function handleGoogleSheet() {
    let linkGoogle = z('.link-google');
    let currentLInk = z('.box-goole_current');
    let input = z('.box-goole_post');
    let boxBtnApi = z('.box-google_btn');
    let getLink = localStorage.getItem('googleSheet');
    if ( getLink!= null) {
        currentLInk.value = getLink;
        linkGoogle.href = getLink;
    }
    input.oninput = () => {
        let getValueInput = input.value;
        localStorage.setItem('googleSheet', getValueInput);
    }
    boxBtnApi.onclick = () => {
        let isAnswer = confirm('Bạn có muốn Cập nhật đường link mới không?')
        if(isAnswer ==1) {
            linkGoogle.setAttribute('href', localStorage.getItem('googleSheet'));
            location.reload();
        }
    }

})();
function handleListGenre() {
    let genres = zz('.box-genre_list  div');
    genres[0].classList.add('choose')
    genres.forEach((genre, index) => {
        genre.addEventListener('click', () => {
            typeComic.innerText = "Thể loại ";
            if(genres[index].innerText == 'Tất cả') {
                genres[index].onclick = () => {location.reload()}; 
            } else {
                z('.box-genre  div.choose').classList.remove('choose');
                genre.classList.add('choose');
                let currentValue = genre.innerText.toLowerCase(); 
                let newGetComic = getComic.filter(item => item.listGenre.toLowerCase().includes(currentValue))
                if (newGetComic.length !== 0) {
                    textArea.innerText = JSON.stringify(newGetComic);
                    handleSearchComic(newGetComic); 
                } else {
                    textArea.innerText = 'Giá trị bạn chọn hiện không tìm được! Hãy thử chọn một thể loại khác nha.'
                }
                comicNum.innerText = newGetComic.length;
                comicGenre.innerText = genre.innerText;
            }
        })
    })
} handleListGenre();

let inputGenre = z('.box-genre_extra input');
let paraBtnGenre = z('.box-genre_extra p');
function handleInputGenre() {
    inputGenre.onkeyup = (e) => {
        let arrGenre = api.genre;
        let getValueInput = e.target.value.toLowerCase();
        // if (getValueInput == ) 
        let newArr = arrGenre.filter((item) => {
            return item.name.toLowerCase().includes(getValueInput);
        })
        if( newArr.length > 4) {
            userInput('grid', newArr);
            handleListGenre();
        } else if(newArr.length <= 4 && newArr.length >= 1) {
            userInput('block', newArr);
            handleListGenre();
        } else if(newArr.length < 1) {
            listGenre.style.display = 'block';
            listGenre.innerHTML = `<p>"Không tìm thấy thể loại bạn nhập!"</p>`
            paraBtnGenre.style.display = 'block';
        }
        comicNum.innerText = newArr.length;
        pushGenretoApi(getValueInput)
    };
}
handleInputGenre()
        function userInput(display, newArr) {
            listGenre.style.display = display;
            paraBtnGenre.style.display = 'none';
            listGenre.innerHTML = newArr.map(renderGenre).join('');
        }
        function pushGenretoApi(value) {
            let genreApi = JSON.parse(localStorage.getItem('genreApi'));
            paraBtnGenre.onclick = function userInputFind() {
                let isChoose = confirm('Bạn có chắc là thêm thể loại: "' + value + '" lên API không?')
                if(isChoose == 1) {
                    let valueGenre = {name: value };
                    genreApi.push(valueGenre);
                    localStorage.setItem('genreApi', JSON.stringify(genreApi));
                    location.reload();
                } else {
                    console.log("Ban khong them the loai nay len api")
                }
            }
        }
function handleSearchComic(arrComic) {
    searchInput.onkeyup = () => {
        let getValueInput = searchInput.value.toLowerCase();
        let newGetComic = arrComic.filter(item => item.nameComic.toLowerCase().includes(getValueInput))
        comicNum.innerText = newGetComic.length;
        textArea.innerText = JSON.stringify(newGetComic);
    }
} handleSearchComic(getComic);
function handleComicApi() {
    let arrComicNew = z('.arr-comic_new');
    let postBtn = z('.post-btn');
    arrComicNew.oninput = () => {
        let newArray = arrComicNew.value;
        postBtn.innerText = "POST API";
        postBtn.onclick = () => {
            answerPostApi(newArray)
        }
    }
    function answerPostApi(newArray) {
        let askPostAPI = confirm('Bạn có Thay thế mảng hiện tại bằng mảng này!');
                if(askPostAPI == 1) {
                    localStorage.setItem('myArray', newArray);
                    location.reload();
                } else{
                    arrComicNew.value = '';
                }
    }
} handleComicApi();
function renderGenre(item) {
    return(`
        <div>${item.name}</div>
    `)
}
