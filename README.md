# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm run build:tsc` command
2. Setup database settings inside `ormconfig.ts` file
3. Run `npm run dev` command


### 주의 사항
1. Database 는 직접 생성 후 ormConfig.ts, env, keys.ts 를 통해 직접 바꿔주셔야 합니다.
2. `npm run buid:tsc` 명령어를 통해 tsoa, swagger build 를 진행합니다.
3. `npm run dev` 를 통해 서버를 실행합니다 (nodemon)
