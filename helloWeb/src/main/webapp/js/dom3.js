// dom3.js
// table>(thead>tr>th*5) + (tbody>tr>td*5) * 건수
import table from "./domTable.js";
let url =
  "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=7AIvBZ6Pr6%2F03QR%2BX108O59D7qWQDAwwyvy1tj8rBZGMzRfXX0nq9cfr68KaVaqC7X1b7V%2BeFTQ0vBq0Mz2T0A%3D%3D";
let titles = ["센터id", "센터명", "의료원", "연락처", "위도", "경도"];

fetch(url)
  // function(resove) {return resolve.json()} => 화살표 구문으로 변형(아래참고)
  .then((resolve) => resolve.json())
  .then(fetchCallback)
  .catch((err) => console.log("error => ", err));

// fetch 호출되는 함수. callback 함수.
function fetchCallback(result) {
  let rawData = result.data; // 원래 데이터
  console.log(rawData[0]);
  let sidoAry = []; // optAry에 sido 정보 중복된 값 제거.
  rawData.forEach((center) => {
    if (sidoAry.indexOf(center.sido) == -1) {
      sidoAry.push(center.sido);
    }
  });

  let sidoSel = document.querySelector("#sidoList");
  sidoAry.forEach((sido) => {
    let opt = document.createElement("option");
    opt.innerHTML = sido;
    sidoSel.append(opt);
  });

  // select 태그에 change 이벤트 발생.
  sidoSel.addEventListener("change", changeCallback);
  function changeCallback(e) {
    // console.log(e.target.value);
    let searchSido = e.target.value;

    // 선택된 시도 값에 맞는 센터명만 출력.
    let filterAry = rawData.filter((center) => center.sido == searchSido);
    genTable(filterAry);
  }

  // 초기데이터로 화면출력.
  // let filterAry = rawData.filter((center, idx) => idx < 10);
  // genTable(filterAry);
}

function genTable(rawData = []) {
  // 초기화.
  // document.getElementById('show') => 아이디값 입력
  document.querySelector("#show").innerHTML = "";

  // 전체 rawData로 출력.
  let thead = table.makeHead(titles); // 헤더정보.
  // let mapData = rawData.map((center) => {
  //   // 매핑정보출력.
  //   let newObj = {
  //     id: center.id,
  //     centerName: center.centerName.replace("코로나19 ", ""),
  //     org: center.org,
  //     phoneNumber: center.phoneNumber,
  //     lat: center.lat,
  //     lng: center.lng,
  //   };

  //   return newCenter;
  // });
  let mapData = rawData.reduce((acc, item) => {
    let center = {
      id: item.id,
      centerName: item.centerName.replace("코로나19 ", ""),
      org: item.org,
      phoneNumber: item.phoneNumber,
      lat: item.lat,
      lng: item.lng,
    };

    acc.push(center);
    return acc;
  }, []);

  console.log(mapData);

  let tbody = table.makeBody(mapData); // [{}, {}, {}...... {}]
  let tbl = document.createElement("table");
  tbl.setAttribute("border", "1");
  tbl.append(thead, tbody);
  document.querySelector("#show").append(tbl);

  // tr클릭 이벤트 등록.
  let targetTr = document.querySelectorAll("tbody tr");
  targetTr.forEach((tr) => {
    tr.addEventListener("click", function (e) {
      let lat = tr.children[4].innerHTML;
      let lng = tr.children[5].innerHTML;
      location.href = "daumapi.html?x=" + lat + "&y=" + lng;
    });
  });
}
