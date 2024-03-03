import {api, websiteComic} from "./api.js";
// ------------------------------------------------------------------------//
const z = document.querySelector.bind(document);
const zz = document.querySelectorAll.bind(document);

let boxWebsite = zz('.box-website_items');
let getWebsite = websiteComic.filter((web) => {
    return web.genreWebsite == "truyentranh"
})
let getWebsite2 = websiteComic.filter((web) => {
    return web.genreWebsite == "truyenchu"
})
boxWebsite[0].innerHTML = getWebsite.map(renderWebsiteItems).join('');
boxWebsite[1].innerHTML = getWebsite2.map(renderWebsiteItems).join('');
function renderWebsiteItems(item) {
    let {linkComic, nameWebsite} = item;
    return (`
        <li><a href=${linkComic} target="_blank">${nameWebsite}</a></li>
    `)
}