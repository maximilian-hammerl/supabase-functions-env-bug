Deno.serve(() => {
    const secret = Deno.env.get('MY_SECRET')

    return new Response(JSON.stringify(secret), {headers: {'Content-Type': 'application/json'}})
})
