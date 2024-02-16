// pages/api/todos.js
export default async function handler(req, res) {
  // Verifies the request method
  if (req.method === 'GET') {
    try {
      // Uses fetch to call the external endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()

      // Returns the data received from the external endpoint
      res.status(200).json(data)
    } catch (error) {
      // In case of an error in the external call, returns error 500
      console.error('Error fetching external endpoint:', error) // Added error logging for better debugging
      res
        .status(500)
        .json({ error: 'Erro ao buscar dados do endpoint externo' })
    }
  } else {
    // Returns error 405 Method Not Allowed for other methods
    res.setHeader('Allow', ['GET'])
    // Corrected the syntax to use template literals for dynamic message parts
    res.status(405).end(`Método ${req.method} Não Permitido`)
  }
}
