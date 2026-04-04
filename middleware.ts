import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const maintenanceMode = true; // toggle this

  if (maintenanceMode) {
    return NextResponse.rewrite(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
