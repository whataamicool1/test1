import { NextResponse } from "next/server"

export async function GET() {
  const luaCode = 'print("Hello from loadstring execution!")'

  return new NextResponse(luaCode, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}

