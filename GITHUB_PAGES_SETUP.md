# GitHub Pages 배포 방법

이 압축파일은 정보보안기사 필기 대비 사이트의 GitHub Pages용 정적 파일입니다.

## 업로드

1. ZIP 파일의 압축을 풉니다.
2. 압축을 푼 폴더 안의 `docs` 폴더와 `GITHUB_PAGES_SETUP.md` 파일을 GitHub 저장소 최상위에 업로드합니다.
3. 변경사항을 `main` 브랜치에 커밋합니다.

## Pages 설정

1. GitHub 저장소에서 `Settings`를 선택합니다.
2. 왼쪽 메뉴에서 `Pages`를 선택합니다.
3. `Build and deployment`의 `Source`를 `Deploy from a branch`로 설정합니다.
4. 브랜치는 `main`, 폴더는 `/docs`를 선택합니다.
5. `Save`를 누릅니다.

배포가 완료되면 다음 형식의 주소로 접속할 수 있습니다.

```text
https://깃허브아이디.github.io/저장소이름/
```

## 주의사항

- `docs` 폴더 자체를 저장소 최상위에 올려야 합니다.
- `docs` 폴더 안에는 `index.html`, `css`, `js`, `assets`가 있어야 합니다.
- ZIP 파일 자체만 GitHub에 업로드하면 실행되지 않습니다. 반드시 먼저 압축을 풀어야 합니다.
- 사이트의 문제풀이 기록과 메모는 브라우저의 로컬 저장소에 보관되므로 다른 브라우저나 다른 기기에는 자동으로 이전되지 않습니다.
