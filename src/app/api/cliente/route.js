
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, endereco, cidade, telefone } = req.body;

    if(!name || !endereco || !cidade || !telefone) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const newUser = {id: Date.now(), name, endereco, cidade, telefone};
    return res.status(201).json({ message:'Usuário criado com sucesso!', user: newUser});
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end( `Method ${req.method} Not Allowed`);
    }
  
}