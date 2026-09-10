export async function GET() {
  return Response.json({
    status: "ok",
    service: "Main Character Café",
    timestamp: new Date().toISOString(),
  });
}