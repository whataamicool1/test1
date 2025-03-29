export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Lua Code Server</h1>
      <p className="mb-4">
        This server provides raw Lua code at the{" "}
        <a href="/novaxryscripts" className="text-blue-500 hover:underline">
          /novaxryscripts
        </a>{" "}
        endpoint.
      </p>
      <div className="bg-gray-100 p-4 rounded-md w-full max-w-lg">
        <p className="font-mono text-sm">Content-Type: text/plain</p>
        <pre className="font-mono text-sm mt-2 p-2 bg-gray-200 rounded">print("Hello from loadstring execution!")</pre>
      </div>
    </div>
  )
}

