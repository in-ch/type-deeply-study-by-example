export enum LOGINMODE {
  TWITTER = "twitter",
  KAKAO = "kakap",
  NAVER = "naver",
  GOOGLE = "google",
  LOCAL = "local",
}

export type LoginType =
  | LOGINMODE.KAKAO
  | LOGINMODE.TWITTER
  | LOGINMODE.NAVER
  | LOGINMODE.GOOGLE
  | LOGINMODE.LOCAL;

function doLogin(mode: LoginType) {
  if (mode === LOGINMODE.TWITTER) {
    // 트위터 로그인 실시
  } else if (mode === LOGINMODE.KAKAO) {
    // 카카오 로그인 실시
  } else if (mode === LOGINMODE.LOCAL) {
    // 로컬 로그인 실시
  } else if (mode === LOGINMODE.NAVER) {
    // 네이버 로그인 실시
  } else {
    // 구글 로그인 실시
  }
}
