
export async function GET() {
    console.log('todoApi : GET')
    return Response.json({
        title: 'Learn HTML'
    })
}