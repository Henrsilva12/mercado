let users = [];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, endereco, cidade, telefone } = req.body;

    if(!name || !endereco || !cidade || !telefone) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const newUser = {id: Date.now(), name, endereco, cidade, telefone};

    users.push(newUser);

    return res.status(201).json({ message:'Usuário criado com sucesso!', user: newUser});
    } else if (req.method === 'GET') {
        return res.status(200).json(users);
    }
    else {
        res.setHeader('Allow', ['POST', 'GET']);
        return res.status(405).end( `Method ${req.method} Not Allowed`);
    }
  
}