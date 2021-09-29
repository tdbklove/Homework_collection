var name = "阿明";
// 取名
function named(){
  Swal.fire({
    title: '您好這裡是生物知識小課堂，<br>請問您的名字是？',
    input: 'text',
    inputValue: `${name}`,
    confirmButtonText: '確認',
    cancelButtonText: '略過',
    showCancelButton: true,
    allowOutsideClick: false,
    showLoaderOnConfirm: true
  }).then((res) => {
    console.log(res);
    if(res.dismiss == "cancel" || res.value == "") {
      Swal.fire({
        title: "不想輸入那就選用默認姓名囉",
        text: `你的名字是${name}，接下來開始挑戰吧!`,
        imageUrl: "img/00-0.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
      }).then(one);
    }else{
      name = res.value;
      Swal.fire({
        title: `歡迎您 ${name}`,
        text: "接下來讓我們一起挑戰容易搞錯的生物小知識吧!",
        imageUrl: "img/00-1.jpg",
        imageHeight: 300,
        allowOutsideClick: false
      }).then(one);
    }
  });
}
// 重新開始
function zero(){
  Swal.fire({
    title: '想繼續挑戰嗎?',
    inputValue: `${name}`,
    confirmButtonText: '確認',
    cancelButtonText: '再等等',
    showCancelButton: true,
    allowOutsideClick: false,
    showLoaderOnConfirm: true
  }).then((res) => {
    console.log(res)
    console.log(res);
    if(res.dismiss == "cancel") {
      Swal.fire({
        title: `噢...看來您還沒準備好`,
        text: "那請您做好準備再來挑戰吧",
        confirmButtonText: '返回',
        confirmButtonColor: "#aaa",
        allowOutsideClick: false
      }).then(zero);
    }else{
      Swal.fire({
        title: `看來您已經準備好了`,
        text: '答錯會回到第一題開始挑戰喔',
        confirmButtonText: '遊戲開始',
        allowOutsideClick: false
      }).then(one);
    }
  })
}
// 第一題
function one(){
  Swal.fire({
    title: "大象是世界上最大的哺乳動物嗎？",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonColor: "#30d695",
    cancelButtonColor: "#ff5e5e",
    imageUrl: "img/01.jpg",
    imageHeight: 300,
  }).then((res) => {
    if(res.value == true){
      Swal.fire({
        title: "答錯囉",
        text: "非洲象是陸地上最大的哺乳動物，但世界上最大的哺乳動物是藍鯨，藍鯨是目前已知現存最大的水生哺乳動物。",
        confirmButtonText: "重新挑戰",
        imageUrl: "img/01-0.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
      }).then(zero);
    }else{
      Swal.fire({
        title: "恭喜您，答對了！",
        text: "讓我們前進下一題。",
        confirmButtonText: "下一題",
        imageUrl: "img/01-1.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
        footer: "答案：最大的哺乳動物是藍鯨"
      }).then(two);
    }
  })
}
// 第二題
function two(){
  Swal.fire({
    title: "蜈蚣是昆蟲的一種嗎？",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonColor: "#30d695",
    cancelButtonColor: "#ff5e5e",
    imageUrl: "img/02.jpg",
    imageHeight: 300,
  }).then((res) => {
    if(res.value == true){
      Swal.fire({
        title: "答錯囉",
        text: "昆蟲是屬於節肢動物門的昆蟲綱，最容易分辨的特徵是它們有三對腳和頭胸腹三個部分，而蜈蚣屬於節肢動物門的唇足綱，所以蜈蚣不是昆蟲的一種。",
        confirmButtonText: "重新挑戰",
        imageUrl: "img/02-0.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
      }).then(zero);
    }else{
      Swal.fire({
        title: "恭喜您，答對了！",
        text: "讓我們前進下一題。",
        confirmButtonText: "下一題",
        imageUrl: "img/02-1.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
        footer: "答案：蜈蚣是唇足綱"
      }).then(three);
    }
  })
}
// 第三題
function three(){
  Swal.fire({
    title: "烏龜是爬蟲類還是兩棲類？",
    confirmButtonText: "爬蟲類",
    cancelButtonText: "兩棲類",
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonColor: "#30d695",
    cancelButtonColor: "#ff5e5e",
    imageUrl: "img/03.jpg",
    imageHeight: 300,
  }).then((res) => {
    if(res.value == true){
      Swal.fire({
        title: "恭喜您，答對了！",
        text: "讓我們前進下一題。",
        confirmButtonText: "下一題",
        imageUrl: "img/03-1.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
      }).then(four);
    }else{
      Swal.fire({
        title: "答錯囉",
        text: "兩棲類是從皮膚吸收水分， 體表沒有鱗片容易乾燥，所以必須生活在水邊。 而爬蟲類身上有堅固鱗片，能保持體內水分不散失，因此有堅硬外皮的烏龜是屬於爬蟲類。",
        confirmButtonText: "重新挑戰",
        imageUrl: "img/03-0.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
      }).then(zero);
    }
  })
}
// 第四題
function four(){
  Swal.fire({
    title: "海豚作為海洋動物跟大部份的魚類一樣是用腮呼吸的嗎？",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonColor: "#30d695",
    cancelButtonColor: "#ff5e5e",
    imageUrl: "img/04.jpg",
    imageHeight: 300,
  }).then((res) => {
    if(res.value == true){
      Swal.fire({
        title: "答錯囉",
        text: "海豚為海洋哺乳動物，和其他哺乳動物一樣用肺呼吸，並利用頭上的呼吸孔吸氣和換氣。",
        confirmButtonText: "重新挑戰",
        imageUrl: "img/04-0.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
      }).then(zero);
    }else{
      Swal.fire({
        title: "恭喜您，答對了！",
        text: "讓我們挑戰最後一題。",
        confirmButtonText: "下一題",
        imageUrl: "img/04-1.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
        footer: "答案：海豚靠肺呼吸"
      }).then(five);
    }
  })
}
// 第五題
function five(){
  Swal.fire({
    title: "海星是棘皮動物還是軟體動物呢？",
    confirmButtonText: "棘皮動物",
    cancelButtonText: "軟體動物",
    showCancelButton: true,
    allowOutsideClick: false,
    confirmButtonColor: "#30d695",
    cancelButtonColor: "#ff5e5e",
    imageUrl: "img/05.jpg",
    imageHeight: 300,
  }).then((res) => {
    if(res.value == true){
      Swal.fire({
        title: "挑戰成功！",
        text: "讓我們迎接新一屆的生物知識王。",
        confirmButtonText: "恭喜您",
        imageUrl: "img/05-1.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
      }).then(crown);
    }else{
      Swal.fire({
        title: "挑戰失敗",
        text: "海星是屬於棘皮動物門的海星綱，像章魚、魷魚那一類的海洋生物才是軟體動物喔。",
        confirmButtonText: "重新挑戰",
        imageUrl: "img/05-0.jpg",
        imageHeight: 300,
        allowOutsideClick: false,
      }).then(zero);
    }
  })
}
function crown(){
  Swal.fire({
    title: "為王的誕生，獻上禮砲！",
    text: "恭喜您成為新一屆的生物知識王，要再重新挑戰一次嗎？",
    confirmButtonText: "重新開始",
    imageUrl: "img/cro.jpg",
    imageHeight: 300,
    allowOutsideClick: false,
  }).then(named);
}