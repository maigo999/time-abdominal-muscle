let today;
let milliseconds;
let seconds;
let intlist;
const target = 0;
let res;
let calcResult;
const button = document.getElementById("button");
const result = document.getElementById("result");
// ミリ秒を取得
function hard() {
  milliseconds = today.getMilliseconds();
  str = String(milliseconds).split("");
}
// 秒数を取得
function nomal() {
  seconds = today.getSeconds();
  str = String(seconds).split("");
}
function modecheck() {
  if (document.getElementById("checkbox").checked) {
    console.log("ハードモード");
    hard();
  } else {
    console.log("ノーマルモード");
    nomal();
  }
}

button.onclick = function() {
  //現在の時間を取得
  today = new Date();

  //モード判定
  modecheck();

  // strをintに戻す
  int = str.map(function(element) {
    return Number(element);
  });

  // ０の消去
  res = int.filter(function(a) {
    return a !== target;
  });

  // 配列の長さを取得
  intlist = res.length;

  // 配列の長さで計算式を分岐
  if (intlist == 3) {
    calcResult = res[0] * res[1] * res[2];
  } else if (intlist == 2) {
    calcResult = res[0] * res[1];
  } else if (intlist == 0) {
    alcResult = "0だよ";
  } else {
    calcResult = res[0];
  }
  result.innerHTML = calcResult;
};
