# 베이스 이미지
FROM node:10

# working directory
WORKDIR /usr/src/app

# 복사
#COPY package.json ./
COPY ./ ./

# 추가적으로 실행할 파일 다운로드
RUN npm install

# 컨테이너 시작 시 실행 될 명령어 명시
CMD ["node", "server.js"]
