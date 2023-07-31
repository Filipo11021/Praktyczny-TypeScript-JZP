type NavigationItem = {
  path: string;
  label: string;
};

export const navigation = {
  home: {
    path: "/",
    label: "home",
  },
  login: {
    path: "/login",
    label: "log in",
  },
  register: {
    path: "/auth/register",
    label: "register",
  },
} as const satisfies Record<PropertyKey, NavigationItem>;

type Navigation = typeof navigation;

const teams = Object.freeze(["PL", "GB", "SA"] as const);

const a = teams[0];
console.log(a)

const arr = [{ test: "a" }, { test: "ab" }];

export type Test = (typeof arr)[number];

export const signedInNav = [];
export const signedOutNav = [];

export function redirectToAuth(
  path: Navigation["login"]["path"] | Navigation["register"]["path"]
) {
  console.log(path);
}
