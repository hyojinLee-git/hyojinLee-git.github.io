# SeeStead(See Instead)

![SeeStead](/images/markdown/seestead_thumbnail.png)

# 💡Topic

Object Detection API를 이용한 시각장애인 보행 보조장치입니다.

# 📝Summary

시각장애인의 보행을 보조하기 위해 다음 세가지 기능을 탑재하였습니다.

- Object Detection API를 이용해 전방의 물체 탐지
- GPS와 Python을 통해 도보 이동 경로를 음성 데이터로 전달
- Google Assistance를 통해 날씨 등 현재 상황의 데이터 알 수 있음

# 🛠️Tech Stack

- Raspberry Pi
- Object Detection API
- GPS
- Python
- Google Assistance

# ✋Part

- Object Detection으로 카메라에 감지된 물체의 박스 크기가 일정 이상이면 경고음 발생
- GPS와 파이썬을 이용해 도보네비게이션 구현
- TTS 모듈을 통해 크롤링한 도보 이동 경로 데이터를 음성으로 출력

# 📖Learned

- 도보 이동 과정을 구현하며 처음에는 Selenium과 크롬 드라이버를 이용해 도보 이동 경로를 가져왔고 이를 TTS 모듈을 이용해 음성 데이터로 출력하였습니다.
- 프로젝트가 끝난 뒤 네이버 길찾기 API를 이용하면 더욱 빠르게 도보 이동 경로를 가져올 수 있다는 점을 알게 되었고 이를 구현해보았습니다.
