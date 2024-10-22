var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-img img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex = 0;

function updImgFea(index){
    //xóa lớp active
    document.querySelectorAll('.list-img div').forEach(item=>{
        item.classList.remove('active')
    })
    //chọn ảnh
    currentIndex = index
    imgFeature.id = listImg[index].getAttribute('id')
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click', e=>{
        updImgFea(index)
    })
})

prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0){
        currentIndex = listImg.length-1
    }else{
        currentIndex--
    }
    updImgFea(currentIndex)
})

nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length-1){
        currentIndex = 0
    }else{
        currentIndex++
    }
    updImgFea(currentIndex)
})


updImgFea(0)

function nextPoster(){
    if(currentIndex == listImg.length-1){
        currentIndex = 0
    }else{
        currentIndex++
    }
    updImgFea(currentIndex)
}

setInterval(nextPoster,3500)
