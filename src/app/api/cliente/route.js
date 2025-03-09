
let users = []; // Armazenamento temporário para os usuários

export async function POST(request) {
    try {
        const { name, endereco, cidade, telefone } = await request.json();

        if (!name || !endereco || !cidade || !telefone) {
            return new Response(JSON.stringify({ error: 'Todos os campos são obrigatórios.' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const newUser = { id: Date.now(), name, endereco, cidade, telefone };
        users.push(newUser);

        return new Response(JSON.stringify({ message: 'Usuário criado com sucesso!', user: newUser }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Erro ao processar a requisição.' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export async function GET() {
    return new Response(JSON.stringify(users), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}