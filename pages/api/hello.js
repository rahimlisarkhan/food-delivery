

const category = (req, res) => {
  const { method } = req
  if (method === "GET") {
    res.status(200).json({ category: 'Pizza' })
  }
}


export default category