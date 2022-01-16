## 프로젝트 소개

![poster](/images/markdown/capstone_design_poster.jpg)

## 사용 기술

- Raspberry Pi

- Object detection API

- GPS+Python

- Google Assistance

## 기술적으로 어려웠던 점

- 음성으로 도보 이동 경로를 안내해주지 않아 기능을 구현하는 데 어려움을 겪었습니다. 따라서 크롬드라이버와 셀레니움을 이용해 네이버 길찾기 사이트에서 출발지와 도착지를 검색하여 이동 경로를 크롤링하였고 이를 tts 모듈로 출력하였습니다.

- 프로젝트가 끝난 후 네이버 지도 api를 이동한다면 도보 이동 경로를 쉽게 얻을 수 있다는 점을 알게 되었습니다. 따라서 네이버에 지도 api 이용을 신청하고 도보 이동 경로를 얻어오는 것을 구현해보았습니다.
