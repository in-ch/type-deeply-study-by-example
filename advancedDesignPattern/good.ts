import { LOGINMODE, LoginType } from "./bad";
import { Authenticator, LocalStrategy, TwitterStrategy } from "./class";

const auth = new Authenticator();

auth.use("twitter", new TwitterStrategy());
auth.use("local", new LocalStrategy());

function login(mode: LoginType, ...args: any) {
  return auth.authenticate(mode, args);
}

login(LOGINMODE.TWITTER, "123");
login(LOGINMODE.LOCAL, "bytefer", "666");
