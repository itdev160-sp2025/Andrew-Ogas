var ext1Array = {
    extID: 'ext1',
    title: 'ESLint',
    imageSource: './images/ESLint.png',
    description: 'Integrates ESLint into VS Code.',
    downloadLink: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
    author: 'Microsoft',
    downloads: 41688866,
    stars: 4.4
    };

var ext2Array = {
    extID: 'ext2',
    title: 'Shopify Liquid Template Snippets',
    imageSource: './images/ShopifyImage.png',
    description: 'This extension for Visual Studio Code adds snippets for Shopify Liquid Template.',
    downloadLink: 'https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets',
    author: 'Franky Lau',
    downloads: 186354,
    stars: 5
    };

var dateSet = document.getElementById('date');
dateSet.textContent = todayIs();

ArticleSet(ext1Array);
ArticleSet(ext2Array);

function ArticleSet(infoArray) {

    var titleSet = document.getElementById(infoArray.extID + "-title");
    titleSet.textContent = infoArray.title;

    var imageSet = document.getElementById(infoArray.extID + "-image");
    imageSet.src = infoArray.imageSource;

    var descriptionSet = document.getElementById(infoArray.extID + "-descrpition");
    descriptionSet.textContent = infoArray.description;
    
    var dLink = document.getElementById(infoArray.extID + "-downloadLink");
    dLink.href = infoArray.downloadLink;
    dLink.textContent = 'Download Here';
    
    var authorSet = document.getElementById(infoArray.extID + "-author");
    authorSet.textContent = ('Author: ' + infoArray.author );

    var downloadsSet = document.getElementById(infoArray.extID + "-downloads");
    downloadsSet.textContent = "Downloads: " + infoArray.downloads;
    
    var starsSet = document.getElementById(infoArray.extID + "-stars");
    starsSet.textContent = "Stars: " + infoArray.stars;
}

function todayIs() {
    var today = new Date();
    return today.toDateString();
}