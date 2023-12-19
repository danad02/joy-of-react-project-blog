"use server";

import { cookies } from "next/headers";

const YEAR = 365 * 24 * 60 * 60 * 1000;

export async function setThemeCookieAction(theme) {
  cookies().set("color-theme", theme, {
    expires: Date.now() + YEAR,
  });
}
