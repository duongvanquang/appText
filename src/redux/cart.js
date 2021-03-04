import { createActions, createReducer } from 'reduxsauce';
const { Types, Creators } = createActions({
  addCart: ['product'],
})

export const cartTypes = Types;
export default Creators;

let words = [
  {
    "id": { "s": "0" },
    "title": { "s": "M\u1eb9o v\u1eb7t s\u1ee9c kh\u1ecfe hay n\u00ean bi\u1ebft" },
    "description": { "s": "#meovat #suckhoemoingay" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" },
  },
  {
    "id": { "s": "1" },
    "title": { "s": "M\u1eb9o v\u1eb7t v\u1ec1 s\u1ee9c kh\u1ecfe ch\u1ed1ng b\u1ec7nh t\u1eadt" },
    "description": { "s": "#meovat #suckhoemoingay" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "2" },
    "title": { "s": "Cu\u1ed9c s\u1ed1ng s\u1ebd t\u1ed1t h\u01a1n nh\u1edd m\u1eb9o v\u1eb7t s\u1ee9c kh\u1ecfe n\u00e0y" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "3" },
    "title": { "s": "M\u1eb9o v\u1eb7t d\u00e2n gian \u0111\u1ea9y l\u00f9i b\u1ec7nh t\u1eadt hay h\u01a1n d\u00f9ng thu\u1ed1c" },
    "description": { "s": "#meovat #suckhoemoingay" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "3" },
    "title": { "s": "M\u1eb9o v\u1eb7t d\u00e2n gian \u0111\u1ea9y l\u00f9i b\u1ec7nh t\u1eadt hay h\u01a1n d\u00f9ng thu\u1ed1c" },
    "description": { "s": "#meovat #suckhoemoingay" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "4" },
    "title": { "s": "S\u1ed1ng kh\u1ecfe h\u00e0ng ng\u00e0y" },
    "description": { "s": "#meovat #suckhoemoingay" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "5" }, "title": { "s": "M\u1eb9o v\u1eb7t c\u00f3 \u00edch cho s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "6" }, "title": { "s": "Th\u00f3i quen t\u1ed1t gi\u00fap \u0111\u1ea9y l\u00f9i b\u1ec7nh t\u1eadt" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "7" },
    "title": { "s": "S\u1ee9c kh\u1ecfe l\u00e0 tr\u00ean h\u1ebft" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "8" },
    "title": { "s": "S\u1ed1ng kh\u1ecfe h\u01a1n nh\u1edd nh\u1eefng m\u1eb9o v\u1eb7t n\u00e0y" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "9" },
    "title": { "s": "B\u1ecf t\u00fai c\u00e1ch s\u1ed1ng kh\u1ecfe h\u01a1n m\u1ed7i ng\u00e0y" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "10" },
    "title": { "s": "\u0110\u1ea9y l\u00f9i b\u1ec7nh t\u1eadt nhanh ch\u00f3ng nh\u1edd m\u1eb9o v\u1eb7t s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe #benhtat" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "11" },
    "title": { "s": "Hi\u1ec7u qu\u1ea3 t\u1ee9c th\u00ec t\u1eeb nh\u1eefng m\u1eb9o v\u1eb7t s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe #benhtat" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "12" },
    "title": { "s": "S\u1ed1ng kh\u1ecfe h\u01a1n nh\u1edd m\u1eb9o hay n\u00e0y" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe #benhtat" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "13" },
    "title": { "s": "M\u1eb9o v\u1eb7t cho s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "14" },
    "title": { "s": "Th\u00f3i quen t\u1ed1t h\u00e0ng ng\u00e0y" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "15" },
    "title": { "s": "M\u1eb9o v\u1eb7t cu\u1ed9c s\u1ed1ng c\u00f3 \u00edch" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "16" },
    "title": { "s": "Th\u00f3i quen sai l\u1ea7m b\u1ea5y l\u00e2u nay" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "17" },
    "title": { "s": "T\u00e1c \u0111\u1ed9ng c\u1ee7a th\u00f3i quen x\u1ea5u \u0111\u1ebfn s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "18" },
    "title": { "s": "\u1ea2nh h\u01b0\u1edfng do nh\u1eefng th\u00f3i quen sai l\u1ea7m" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "19" },
    "title": { "s": "S\u1ee9c kh\u1ecfe h\u00e0ng ng\u00e0y" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "20" },
    "title": { "s": "Thay \u0111\u1ed5i th\u00f3i quen sai l\u1ea7m t\u1eeb h\u00f4m nay" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "21" },
    "title": { "s": "Th\u00f3i quen t\u01b0\u1edfng ch\u1eebng v\u00f4 h\u1ea1i \u0111ang \u1ea3nh h\u01b0\u1edfng t\u1edbi s\u1ee9c kh\u00f2e" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "22" },
    "title": { "s": "T\u00e1c h\u1ea1i c\u1ee7a th\u00f3i quen x\u1ea5u \u1ea3nh h\u01b0\u1edfng t\u1edbi s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#thoiquensailam #meovatsuckhoe #dangian" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "23" },
    "title": { "s": "S\u1ee9c kh\u1ecfe l\u00e0 v\u00e0ng cho m\u1ed7i ch\u00fang ta" },
    "description": { "s": "#meovat #suckhoemoingay #songkhoe #benhtat" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "24" },
    "title": { "s": "S\u1ed1ng kh\u1ecfe" },
    "description": { "s": "#songkhoe #meovat #thoiquensailam" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "25" },
    "title": { "s": "Nh\u1eadn th\u1ee9c \u0111\u01a1n gi\u1ea3n \u1ea3nh h\u01b0\u1edfng t\u1edbi s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#songkhoe #meovat #thoiquensailam" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "26" },
    "title": { "s": "Cu\u1ed9c s\u1ed1ng kh\u1ecfe \u0111\u1eb9p h\u00e0ng ng\u00e0y" },
    "description": { "s": "#songkhoe #meovat #thoiquensailam" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "27" },
    "title": { "s": "T\u00e1c h\u1ea1i kh\u00f4n l\u01b0\u1eddng do nh\u1eefng th\u00f3i quen sai l\u1ea7m" },
    "description": { "s": "#songkhoe #meovat #thoiquensailam" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "28" },
    "title": { "s": "M\u1eb9o v\u1eb7t nh\u1eadn th\u1ee9c t\u1ea7m quan tr\u1ecdng s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#songkhoe #meovat #thoiquensailam" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "29" },
    "title": { "s": "Sai l\u1ea7m nh\u1ecf t\u00e1c \u0111\u1ed9ng s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#songkhoe #meovat #thoiquensailam" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "30" },
    "title": { "s": "M\u1eb9o v\u1eb7t cu\u1ed9c s\u1ed1ng hay" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "31" },
    "title": { "s": "M\u1eb9o v\u1eb7t d\u00e2n gian" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "32" },
    "title": { "s": "M\u1eb9o t\u1eeb xa x\u01b0a t\u1ed1t cho s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "33" },
    "title": { "s": "M\u1eb9o v\u1eb7t d\u00e2n gian cho s\u1ee9c kh\u1ecfe h\u00e0ng ng\u00e0y" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "34" },
    "title": { "s": "M\u1eb9o v\u1eb7t v\u1ec1 s\u1ee9c kh\u1ecfe l\u01b0u truy\u1ec1n t\u1eeb h\u00e0ng \u0111\u1eddi nay" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "35" },
    "title": { "s": "Th\u00f3i quen t\u1ed1t cho s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "36" },
    "title": { "s": "M\u1eb9o d\u00e2n gian t\u1ed1t cho s\u1ee9c kh\u1ecfe" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "37" }, "title": { "s": "M\u1eb9o v\u1eb7t s\u1ee9c kh\u1ecfe h\u00e0ng ng\u00e0y" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "38" }, "title": { "s": "C\u1ea3m th\u1ea5y t\u1ed1t h\u01a1n m\u1ed7i ng\u00e0y b\u1eb1ng nh\u1eefng m\u1eb9o v\u1eb7t n\u00e0y" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "39" }, "title": { "s": "Th\u00f3i quen cho cu\u1ed9c s\u1ed1ng kh\u1ecfe m\u1ea1nh" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "40" },
    "title": { "s": "S\u1ed1ng kh\u1ecfe m\u1ed7i ng\u00e0y v\u1edbi nh\u1eefng m\u1eb9o v\u1eb7t hay" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "41" },
    "title": { "s": "M\u1eb9o v\u1eb7t gi\u00fap c\u01a1 th\u1ec3 kh\u1ecfe kh\u1eafn v\u00e0 n\u0103ng \u0111\u1ed9ng" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "42" },
    "title": { "s": "C\u1ea3m th\u1ea5y tuy\u1ec7t v\u1eddi h\u01a1n nh\u1edd m\u1eb9o n\u00e0y" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "43" },
    "title": { "s": "M\u1eb9o hay s\u1ee9c kh\u1ecfe b\u1ea1n n\u00ean bi\u1ebft" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "44" },
    "title": { "s": "S\u1ee9c kh\u1ecfe h\u00e0ng ng\u00e0y d\u00e0nh cho b\u1ea1n" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "45" },
    "title": { "s": "Kh\u1ecfe kho\u1eafn h\u01a1n khi bi\u1ebft m\u1eb9o n\u00e0y" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "46" },
    "title": { "s": "M\u1eb9o hay c\u1ef1c k\u00ec t\u1ef1 nhi\u00ean d\u00e0nh cho b\u1ea1n" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "47" },
    "title": { "s": "S\u1ebd th\u1eadt ti\u1ebfc n\u1ebfu kh\u00f4ng bi\u1ebft nh\u1eefng \u0111i\u1ec1u n\u00e0y s\u1ebd c\u00e0i thi\u1ec7n s\u1ee9c kh\u1ecfe c\u1ee7a b\u1ea1n" },
    "description": { "s": "#meodangian #meovat #songkhoe" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "48" },
    "title": { "s": "B\u00ed k\u00edp th\u00e0nh c\u00f4ng c\u1ee7a ng\u01b0\u1eddi Do Th\u00e1i" },
    "description": { "s": "#thanhcong #dothai #kiemtien #giauco" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "49" }, "title": { "s": "B\u00ed m\u1eadt v\u1ec1 s\u1ef1 th\u00e0nh c\u00f4ng" },
    "description": { "s": "#thanhcong #dothai #kiemtien #giauco" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "50" },
    "title": { "s": "Quy lu\u1eadt ki\u1ebfm ti\u1ec1n c\u1ef1c k\u00ec th\u00e0nh c\u00f4ng c\u1ee7a ng\u01b0\u1eddi Do Th\u00e1i" },
    "description": { "s": "#thanhcong #dothai #kiemtien #giauco" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "51" },
    "title": { "s": "\u0110\u1eb1ng sau s\u1ef1 th\u00e0nh c\u00f4ng c\u1ee7a ng\u01b0\u1eddi Do Th\u00e1i" },
    "description": { "s": "#thanhcong #dothai #kiemtien #giauco" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "52" },
    "title": { "s": "Quy lu\u1eadt ngh\u00ecn n\u0103m v\u1eabn th\u00e0nh c\u00f4ng c\u1ee7a ng\u01b0\u1eddi Do Th\u00e1i" },
    "description": { "s": "#thanhcong #dothai #kiemtien #giauco" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "53" },
    "title": { "s": "B\u00e0i h\u1ecdc v\u1ec1 s\u1ef1 th\u00e0nh c\u00f4ng c\u1ee7a ng\u01b0\u1eddi Do Th\u00e1i" },
    "description": { "s": "#thanhcong #baihoc #dothai #giauco" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "54" },
    "title": { "s": "D\u00f9 d\u00e2n s\u1ed1 ng\u01b0\u1eddi Do Th\u00e1i r\u1ea5t \u00edt nh\u01b0ng v\u1eabn n\u1eb1m top nh\u1eefng ng\u01b0\u1eddi gi\u00e0u c\u00f3 nh\u1ea5t th\u1ebf gi\u1edbi?" },
    "description": { "s": "#thanhcong #baihoc #dothai #giauco" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "55" },
    "title": { "s": "Tr\u00ed tu\u1ec7 si\u00eau vi\u1ec7t c\u1ee7a ng\u01b0\u1eddi Do Th\u00e1i trong vi\u1ec7c ki\u1ebfm ti\u1ec1n" },
    "description": { "s": "#thanhcong #baihoc #dothai #giauco" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "56" }, "title": { "s": "B\u00ed m\u1eadt \"Gi\u00e0u kh\u00f4ng l\u1ed1i tho\u00e1t\" c\u1ee7a nh\u1eefng Ng\u01b0\u1eddi Do Th\u00e1i" },
    "description": { "s": "#thanhcong #nguoidothai" },
    "poster": { "s": "http://guitarmtc.edu.vn/wp-content/uploads/2019/08/nhung-bai-cover-hay-2.jpg" }
  },
  {
    "id": { "s": "57" },
    "title": { "s": "S\u1ef1 gi\u00e0u c\u00f3 c\u1ee7a ng\u01b0\u1eddi Do Th\u00e1i nh\u1edd v\u00e0o \u0111\u00e2u?" },
    "description": { "s": "#thanhcong #nguoidothai" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "58" },
    "title": { "s": "B\u00ed m\u1eadt t\u01b0 duy tri\u1ec7u ph\u00fa kh\u00f4ng ph\u1ea3i ai c\u0169ng bi\u1ebft" },
    "description": { "s": "#tuduy #nguoigiau #nguoingheo #thatbai" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-co-chang-trai-viet-len-cay-phan-manh-quynh-mat-biet.jpg" }
  },
  {
    "id": { "s": "59" },
    "title": { "s": "T\u01b0 t\u01b0\u1edfng sai l\u1ec7ch \u1ea3nh h\u01b0\u1edfng t\u1edbi s\u1ef1 th\u00e0nh c\u00f4ng c\u1ee7a b\u1ea1n" },
    "description": { "s": "#tuduy #nguoigiau #nguoingheo #thatbai" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
  {
    "id": { "s": "60" },
    "title": { "s": "Thay \u0111\u1ed5i t\u01b0 t\u01b0\u1edfng sai l\u1ec7ch \u0111\u1ec3 gi\u00e0u c\u00f3 h\u01a1n" },
    "description": { "s": "#tuduy #nguoigiau #nguoingheo #thatbai" },
    "poster": { "s": "http://pianominhthanh.vn/upload/news/sheet-nhac-piano-con-yeu-dau-ai-roi-di-duc-phuc.jpg" }
  },
];
export const INITIAL_STATE = {
  products: words,
  cart: [],
}
const addCart = (state, { product}) => {
  return { ...state, cart: [...state.cart.filter(c => c._id != product._id), product] }
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CART]: addCart,
});