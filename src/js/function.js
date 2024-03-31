






function handleTimeUpdate(getComic) {
    let comicItems = zz('.comic-time');
    var today = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"})
    let getToDay = (today.split(','))[0].split('/');
    let getTime = (today.split(','))[1].replace(/ /g, '').slice(0, -2).split(':');
    for (let i = 0; i < getComic.length; i++ ) {
        renderUpdateChap(getComic[i].updateChap, i);
    }
    function renderUpdateChap(passDay, index) {
        let getPassDay = (passDay.split(','))[0].split('/');; 
        let getPassTime = (passDay.split(','))[1].replace(/ /g, '').slice(0, -2).split(':');
        //  Xu ly viec khi ban vao trang truyen tranh -------------------------------------------------------
        let getSecond = +(getTime[2] - getPassTime[2]);
        let getMinute = +(getTime[1] - getPassTime[1]);
        let getHour = +(getTime[0] - getPassTime[0]);
        let getDay = +(getToDay[1] - getPassDay[1]);
        let getMonth = +(getToDay[0] - getPassDay[0]);
        let getYear = +(getToDay[2] - getPassDay[2]);
        //  Tao ra gia tri de chen vao comic-time0
        if (getYear == 0) {
            if (getMonth == 0) {
                if (getDay == 0) {
                    if (getHour == 0) {
                        if (getMinute == 0) {
                            if (getSecond == 0) {
                            }
                            else {
                                comicItems[index].innerText =  getSecond + " giây trước";
                            }
                        } else {
                            comicItems[index].innerText =  getMinute + " phút trước";
                        }
                    } else {
                        if (getHour < 0) {
                            let getHour = 12 - (+getPassTime[0]) + +getTime[1];
                            comicItems[index].innerText =  getHour + " giờ trước";
                        } else {
                            comicItems[index].innerText =  getHour + " giờ trước";
                        }
                    }
                } else {
                    if (getDay < 0) {
                        let getDay = 30 - (+getPassDay[0]) + +getToDay[1];
                        comicItems[index].innerText =  getDay + " ngày trước";
                    } else {
                        comicItems[index].innerText =  getDay + " ngày trước";
                    }
                }
            } else {
                comicItems[index].innerText =  getMonth + " tháng trước";
            }
        
        } else {
            comicItems[index].innerText =  getYear + " năm trước";
        }
    }
    
} ;

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